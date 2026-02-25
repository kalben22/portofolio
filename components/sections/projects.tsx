"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import SectionTitle from "@/components/ui-custom/section-title"
import ProjectCard from "@/components/cards/project-card"

const projects = [
  {
    title: "Migration Infrastructure Cloud",
    description:
      "Migration de l'infrastructure on-premise vers AWS avec mise en place d'une architecture sécurisée et hautement disponible.",
    tags: ["AWS", "VPC", "Security Groups", "IAM", "Load Balancing"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Refonte Sécurité Réseau",
    description:
      "Implémentation d'une nouvelle architecture de sécurité réseau basée sur le principe de défense en profondeur.",
    tags: ["Palo Alto", "Segmentation", "IDS/IPS", "VPN", "Zero Trust"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Déploiement Active Directory",
    description:
      "Conception et déploiement d'une infrastructure Active Directory multi-sites avec réplication et haute disponibilité.",
    tags: ["Windows Server", "AD DS", "GPO", "FSMO", "Site Replication"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Mise en place SOC",
    description: "Implémentation d'un centre opérationnel de sécurité pour la détection et la réponse aux incidents.",
    tags: ["SIEM", "EDR", "Threat Intelligence", "Incident Response"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Virtualisation Infrastructure",
    description:
      "Virtualisation complète de l'infrastructure serveur avec mise en place d'une solution de reprise d'activité.",
    tags: ["VMware", "vSphere", "vSAN", "DRS", "HA", "Backup"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Automatisation IT",
    description: "Développement de scripts et outils pour automatiser les tâches d'administration système et réseau.",
    tags: ["PowerShell", "Python", "Ansible", "API", "CI/CD"],
    image: "/placeholder.svg?height=300&width=400",
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

