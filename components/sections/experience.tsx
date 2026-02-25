"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "@/components/ui-custom/section-title"
import ExperienceCard from "@/components/cards/experience-card"

const experiences = [
  {
    title: "Administrateur Sécurité Réseau",
    company: "Entreprise XYZ",
    period: "2020 - Présent",
    description:
      "Responsable de la sécurité de l'infrastructure réseau et de la mise en place des politiques de sécurité.",
    responsibilities: [
      "Gestion des firewalls et systèmes de détection d'intrusion",
      "Mise en place d'une architecture Zero Trust",
      "Réalisation d'audits de sécurité et tests de pénétration",
      "Gestion des incidents de sécurité",
    ],
  },
  {
    title: "Administrateur Système & Réseau",
    company: "Entreprise ABC",
    period: "2017 - 2020",
    description: "Administration et maintenance de l'infrastructure IT de l'entreprise.",
    responsibilities: [
      "Administration des serveurs Windows et Linux",
      "Gestion de l'infrastructure réseau (Cisco)",
      "Mise en place et maintenance des solutions de virtualisation",
      "Support technique niveau 3",
    ],
  },
  {
    title: "Technicien Réseau",
    company: "Entreprise DEF",
    period: "2015 - 2017",
    description: "Support technique et déploiement d'équipements réseau.",
    responsibilities: [
      "Installation et configuration des équipements réseau",
      "Dépannage et résolution des problèmes réseau",
      "Documentation des infrastructures",
      "Support aux utilisateurs",
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
          subtitle="Mon parcours professionnel en tant qu'administrateur réseau, système et sécurité"
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

