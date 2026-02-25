"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "@/components/ui-custom/section-title"
import ExperienceCard from "@/components/cards/experience-card"

const experiences = [
  {
    title: "Analyste Cybersécurité",
    company: "ClikForm",
    period: "Oct. 2025 - Présent",
    description:
      "Assurer la sécurité du code et des applications tout au long du cycle de développement jusqu'au déploiement en production.",
    responsibilities: [
      "Revue de code sécurisée et détection de vulnérabilités (SAST/DAST)",
      "Intégration de la sécurité dans le pipeline CI/CD (DevSecOps)",
      "Analyse des risques et évaluation des menaces sur les applications",
      "Mise en place de bonnes pratiques de sécurité pour les développeurs",
      "Tests de pénétration applicatifs et remédiation des vulnérabilités",
      "Veille sur les nouvelles vulnérabilités et menaces (CVE, OWASP Top 10)",
    ],
  },
  {
    title: "IT Support Specialist",
    company: "African Education & Innovation Group (AEIG)",
    period: "Oct. 2024 - Présent",
    description:
      "Support technique et gestion de l'infrastructure IT pour plus de 200 utilisateurs dans un environnement éducatif.",
    responsibilities: [
      "Support technique pour les utilisateurs, plus de 200 postes",
      "Gestion des équipements IT (PCs, claviers, souris, serveurs, etc.)",
      "Administration système et réseau",
      "Gestion des incidents et escalade",
      "Gestion des actifs IT",
    ],
  },
  {
    title: "Web Developer",
    company: "Direction des Bourses et Aides Universitaires",
    period: "Avril 2024",
    description: "Développement d'une application web et mise en place de l'infrastructure réseau.",
    responsibilities: [
      "Développement d'une application de gestion des étudiants béninois à l'étranger",
      "Installation d'un firewall OPNSense",
      "Déploiement d'un contrôleur de domaine sur le réseau",
      "Mise en place d'un serveur de partage de fichiers",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-muted/50 relative" ref={ref}>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Expérience"
          subtitle="Mon parcours professionnel en cybersécurité et infrastructure IT"
          inView={inView}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent ml-6 md:ml-8 hidden md:block"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ExperienceCard
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                responsibilities={experience.responsibilities}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

