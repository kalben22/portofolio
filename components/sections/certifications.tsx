"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Clock } from "lucide-react"
import SectionTitle from "@/components/ui-custom/section-title"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-muted/50 relative" ref={ref}>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Certifications & Formation"
          subtitle="Mes certifications et parcours académique"
          inView={inView}
        />

        <div className="grid gap-6 mt-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Formation
            </h3>
            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>{"Master's degree, Cybersecurity"}</CardTitle>
                  <CardDescription>{"Epitech - L'école de l'excellence informatique, Août 2024 - 2026"}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{"Architecture des systèmes, Communication, Cybersécurité, Forensique numérique et sécurité des systèmes d'information"}</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>{"Université numérique Cheikh Hamidou KANE (UN-CHK)"}</CardTitle>
                  <CardDescription>2023 - 2024</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{"Formation en technologies numériques et systèmes d'information"}</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>{"Licence en Systèmes d'Information de Gestion"}</CardTitle>
                  <CardDescription>IUT-Parakou, 2021 - 2024</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{"Gestion des systèmes d'information et technologies de l'information"}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>{"Certifications Cybersécurité & Blue Team"}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">BTJA (Blue Team Junior Analyst)</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CNSP (Certified Network Security Practitioner)</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CBTP (Certified Blue Team Practitioner)</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CRTA (Certified Red Team Analyst)</Badge>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Certifications Cisco</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CCNA 1 : Introduction to Networks</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CCNA 2 : Switching, Routing and Wireless Essentials</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">{"Support et Sécurité des réseaux"}</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Introduction to Cybersecurity</Badge>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    En cours
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">SAL1 (In progress...)</Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

