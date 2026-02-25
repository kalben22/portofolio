"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, MapPin } from "lucide-react"
import SectionTitle from "@/components/ui-custom/section-title"

// Données des compétitions
const competitions = [
  {
    name: "HackerLab 2025",
    date: "2025",
    location: "Benin",
    team: "",
    placement: "Finaliste",
    description:
      "Compétition nationale de cybersécurité mettant à l'épreuve les compétences en sécurité offensive et défensive, forensique numérique et analyse de vulnérabilités.",
    skills: ["CTF", "Forensics", "Network Security", "Web Security", "DFIR"],
    highlight:
      "Qualification en finale démontrant une maîtrise solide des techniques d'analyse forensique et de détection des menaces.",
  },
  {
    name: "Huawei ICT Competition - Phase Afrique",
    date: "2025",
    location: "Afrique",
    team: "",
    placement: "Finaliste",
    description:
      "Compétition internationale organisée par Huawei, couvrant les technologies réseau, cloud et sécurité à l'échelle du continent africain.",
    skills: ["Networking", "Cloud Computing", "Security", "ICT Infrastructure"],
    highlight:
      "Sélection parmi les meilleurs talents IT du continent, démontrant une expertise avancée en infrastructure réseau et sécurité.",
  },
  {
    name: "Hackathon Sèmè-City (SCOP)",
    date: "2025",
    location: "Sèmè-City, Benin",
    team: "",
    placement: "Vainqueur",
    description:
      "Hackathon organisé à la cité de l'innovation Sèmè-City, axé sur le développement de solutions technologiques innovantes.",
    skills: ["Innovation", "Problem Solving", "Development", "Teamwork"],
    highlight:
      "Premier prix remporté grâce à une solution innovante, prouvant des capacités de résolution de problèmes et de travail en équipe sous pression.",
  },
]

export default function Competitions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="competitions" className="py-20 bg-muted/50 relative" ref={ref}>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Compétitions & Hackathons"
          subtitle="Mes participations à des événements de cybersécurité et les compétences démontrées"
          inView={inView}
        />

        <div className="mt-12 space-y-8 max-w-4xl mx-auto">
          {competitions.map((competition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        {competition.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 mr-2">
                          {competition.placement}
                        </Badge>
                        {competition.team && <span>{"Équipe: "}{competition.team}</span>}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{competition.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{competition.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <p>{competition.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Compétences démontrées:</h4>
                    <div className="flex flex-wrap gap-2">
                      {competition.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border-none"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium">Fait marquant:</p>
                    <p className="text-muted-foreground">{competition.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

