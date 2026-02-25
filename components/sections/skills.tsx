"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Network, Server, Shield, Zap, Database, Cloud, HardDrive, Lock, FileText } from "lucide-react"
import SectionTitle from "@/components/ui-custom/section-title"
import SkillCard from "@/components/cards/skill-card"

// Données des compétences
const skillsData = {
  network: [
    {
      title: "Infrastructure Réseau",
      description: "Configuration et maintenance des équipements réseau (routeurs, switches, firewalls)",
      icon: <Network className="h-10 w-10" />,
      skills: ["Cisco", "Juniper", "Fortinet", "Palo Alto", "VLANs", "Routing & Switching"],
    },
    {
      title: "Protocoles Réseau",
      description: "Maîtrise des protocoles réseau et de leur implémentation",
      icon: <Zap className="h-10 w-10" />,
      skills: ["TCP/IP", "DNS", "DHCP", "VPN", "BGP", "OSPF"],
    },
    {
      title: "Monitoring & Troubleshooting",
      description: "Surveillance et résolution des problèmes réseau",
      icon: <Database className="h-10 w-10" />,
      skills: ["Wireshark", "Nagios", "PRTG", "Zabbix", "Netflow", "Syslog"],
    },
  ],
  system: [
    {
      title: "Administration Système",
      description: "Gestion et maintenance des systèmes d'exploitation",
      icon: <Server className="h-10 w-10" />,
      skills: ["Windows Server", "Linux (Debian/Ubuntu/RHEL)", "Active Directory", "PowerShell", "Bash"],
    },
    {
      title: "Virtualisation & Cloud",
      description: "Déploiement et gestion d'environnements virtualisés et cloud",
      icon: <Cloud className="h-10 w-10" />,
      skills: ["VMware", "Hyper-V", "AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      title: "Stockage & Sauvegarde",
      description: "Solutions de stockage et stratégies de sauvegarde",
      icon: <HardDrive className="h-10 w-10" />,
      skills: ["SAN/NAS", "Veeam", "Backup Exec", "DFS", "RAID", "Disaster Recovery"],
    },
  ],
  security: [
    {
      title: "Sécurité Réseau",
      description: "Protection de l'infrastructure réseau contre les menaces",
      icon: <Shield className="h-10 w-10" />,
      skills: ["Firewalls", "IDS/IPS", "WAF", "Zero Trust", "Segmentation", "DMZ"],
    },
    {
      title: "Sécurité des Systèmes",
      description: "Sécurisation des systèmes d'exploitation et applications",
      icon: <Lock className="h-10 w-10" />,
      skills: ["Hardening", "Patch Management", "Antivirus", "EDR", "Privilege Management"],
    },
    {
      title: "Gouvernance & Conformité",
      description: "Mise en place de politiques de sécurité et conformité",
      icon: <FileText className="h-10 w-10" />,
      skills: ["ISO 27001", "GDPR", "PCI DSS", "Audit de sécurité", "Gestion des risques"],
    },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("network")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Compétences"
          subtitle="Mes domaines d'expertise en administration réseau, système et sécurité"
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Tabs defaultValue="network" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="network"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Network className="h-4 w-4" />
                <span>Réseau</span>
              </TabsTrigger>
              <TabsTrigger
                value="system"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Server className="h-4 w-4" />
                <span>Système</span>
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Shield className="h-4 w-4" />
                <span>Sécurité</span>
              </TabsTrigger>
            </TabsList>

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-70 blur-sm"></div>

              <TabsContent value="network" className="mt-0 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skillsData.network.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      skills={skill.skills}
                      index={index}
                      isActive={activeTab === "network"}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="system" className="mt-0 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skillsData.system.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      skills={skill.skills}
                      index={index}
                      isActive={activeTab === "system"}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-0 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skillsData.security.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      skills={skill.skills}
                      index={index}
                      isActive={activeTab === "security"}
                    />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

