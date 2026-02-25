"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "@/components/ui-custom/section-title"
import ProjectCard from "@/components/cards/project-card"

const projects = [
  {
    title: "Security Operations Center (SOC) Lab",
    description:
      "Mise en place d'un SOC complet avec Wazuh pour la détection endpoint, OpenSearch pour l'agrégation de logs en temps réel, et TheHive pour la gestion des incidents et l'exécution automatisée de playbooks.",
    tags: ["Wazuh", "OpenSearch", "TheHive", "SIEM", "Detection Rules", "Automated Playbooks"],
    image: "/images/project-soc-lab.jpg",
  },
  {
    title: "Architecture Réseau Cyber-Café",
    description:
      "Conception et implémentation d'une architecture réseau sécurisée avec routage dynamique OSPF, services AAA, DNS, DHCP et gestion des accès SSH.",
    tags: ["OSPF", "AAA", "DNS", "DHCP", "SSH", "Network Security"],
    image: "/images/project-network-arch.jpg",
  },
  {
    title: "Plateforme All-in-One d'outils DFIR",
    description:
      "Développement d'une plateforme centralisant les outils de Digital Forensics & Incident Response pour faciliter les investigations numériques et la réponse aux incidents.",
    tags: ["DFIR", "Forensics", "Incident Response", "Python", "Automation", "Analysis Tools"],
    image: "/images/project-dfir-platform.jpg",
  },
  {
    title: "Landing Page - Association",
    description:
      "Création d'une landing page moderne et responsive pour une association, avec un design épuré, des sections d'information, et des appels à l'action engageants.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "UI/UX", "Web Development"],
    image: "/images/project-landing-page.jpg",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle title="Projets" subtitle="Quelques projets significatifs que j'ai réalisés" inView={inView} />

        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

