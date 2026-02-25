"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Mail, Github, Linkedin, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToNextSection = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-16" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-primary font-semibold">{"Bonjour, je suis Bernard Houngbo"}</span>
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TypeAnimation
                  sequence={[
                    "Cybersecurity Analyst",
                    1000,
                    "DFIR Specialist",
                    1000,
                    "Network Security Expert",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </motion.h1>

              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {"Analyste en cybersécurité proactif et méticuleux, spécialisé en Digital Forensics & Incident Response (DFIR) et sécurité réseau. Passionné par la détection des menaces, l'analyse forensique et la sécurisation des infrastructures d'entreprise."}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button className="gap-2 group">
                <Mail className="h-4 w-4 group-hover:animate-bounce" />
                Me contacter
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Voir mon CV
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="https://www.linkedin.com/in/bernard-houngbo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/kalben22" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-75 blur-sm animate-pulse"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-background">
                <Image
                  alt="Profile"
                  className="aspect-square object-cover"
                  height="400"
                  width="400"
                  src="/placeholder.svg?height=400&width=400"
                />
              </div>
              <div className="absolute -z-10 inset-0 bg-grid-small-pattern opacity-10 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          onClick={scrollToNextSection}
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

