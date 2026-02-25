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
    name: "CTF CyberSecurity Challenge",
    date: "Octobre 2023",
    location: "Paris, France",
    team: "SecureBytes",
    placement: "2ème place",
    description:
      "Compétition de type Capture The Flag axée sur la sécurité des applications web, le reverse engineering et la cryptographie.",
    skills: ["Web Security", "Reverse Engineering", "Cryptography", "Forensics"],
    highlight:
      "Notre équipe a résolu 90% des challenges de sécurité web, démontrant une expertise particulière dans ce domaine.",
  },
  {
    name: "Hackathon SecuriNet",
    date: "Mai 2023",
    location: "Lyon, France",
    team: "NetDefenders",
    placement: "1ère place",
    description:
      "Hackathon de 48 heures centré sur la détection et la réponse aux incidents de sécurité dans un environnement d'entreprise simulé.",
    skills: ["Incident Response", "Network Security", "SIEM", "Threat Hunting"],
    highlight:
      "Développement d'un outil automatisé de détection d'intrusion qui a permis d'identifier rapidement les menaces persistantes avancées.",
  },
  {
    name: "European Cyber Week Challenge",
    date: "Novembre 2022",
    location: "Rennes, France",
    team: "CyberShield",
    placement: "Top 5",
    description:
      "Compétition européenne mettant l'accent sur la protection des infrastructures critiques et la réponse aux cyberattaques.",
    skills: ["Critical Infrastructure", "Blue Team", "Red Team", "Threat Intelligence"],
    highlight:
      "Reconnaissance spéciale pour notre stratégie de défense innovante contre les attaques de type ransomware.",
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
                        <span>Équipe: {competition.team}</span>
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

