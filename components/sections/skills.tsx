"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Network, Server, Shield, Zap, Database, Cloud, Search, Lock, FileText, Eye, Bug, AlertTriangle, Monitor, HardDrive, Terminal } from "lucide-react"
import SectionTitle from "@/components/ui-custom/section-title"
import SkillCard from "@/components/cards/skill-card"

// Données des compétences
const skillsData = {
  dfir: [
    {
      title: "Digital Forensics",
      description: "Analyse forensique numérique et collecte de preuves",
      icon: <Search className="h-10 w-10" />,
      skills: ["Autopsy", "Volatility", "FTK Imager", "KAPE", "Disk Forensics", "Memory Forensics"],
    },
    {
      title: "Incident Response",
      description: "Détection, confinement et remédiation des incidents de sécurité",
      icon: <AlertTriangle className="h-10 w-10" />,
      skills: ["TheHive", "MITRE ATT&CK", "Playbooks", "Containment", "Eradication", "Recovery"],
    },
    {
      title: "Threat Detection & Monitoring",
      description: "Surveillance proactive et détection des menaces avancées",
      icon: <Eye className="h-10 w-10" />,
      skills: ["Wazuh", "OpenSearch", "SIEM", "EDR", "Log Analysis", "Threat Hunting"],
    },
  ],
  network: [
    {
      title: "Sécurité Réseau",
      description: "Protection et sécurisation des infrastructures réseau",
      icon: <Shield className="h-10 w-10" />,
      skills: ["Firewalls", "IDS/IPS", "VPN", "OPNSense", "Segmentation", "DMZ"],
    },
    {
      title: "Infrastructure Réseau",
      description: "Conception et administration des réseaux d'entreprise",
      icon: <Network className="h-10 w-10" />,
      skills: ["OSPF", "AAA", "DNS", "DHCP", "SSH", "VLANs"],
    },
    {
      title: "Protocoles & Monitoring",
      description: "Analyse réseau et surveillance du trafic",
      icon: <Zap className="h-10 w-10" />,
      skills: ["TCP/IP", "Wireshark", "Netflow", "Syslog", "Suricata", "Zeek"],
    },
  ],
  security: [
    {
      title: "Blue Team Operations",
      description: "Défense proactive et opérations de sécurité SOC",
      icon: <Lock className="h-10 w-10" />,
      skills: ["SOC Analysis", "Alert Triage", "Malware Analysis", "Threat Intelligence", "YARA Rules"],
    },
    {
      title: "Penetration Testing",
      description: "Tests de pénétration et évaluation des vulnérabilités",
      icon: <Bug className="h-10 w-10" />,
      skills: ["Nmap", "Burp Suite", "Metasploit", "OWASP Top 10", "Vulnerability Assessment"],
    },
    {
      title: "Outils & Frameworks",
      description: "Cadres de référence et standards en cybersécurité",
      icon: <Database className="h-10 w-10" />,
      skills: ["NIST", "MITRE ATT&CK", "CyberKillChain", "ISO 27001", "Incident Handling"],
    },
  ],
  sysadmin: [
    {
      title: "Administration Système",
      description: "Gestion et maintenance des systèmes d'exploitation serveur",
      icon: <Server className="h-10 w-10" />,
      skills: ["Linux (Debian/Ubuntu)", "Windows Server", "Active Directory", "GPO", "PowerShell", "Bash"],
    },
    {
      title: "Virtualisation & Services",
      description: "Déploiement et gestion d'environnements virtualisés et services IT",
      icon: <Monitor className="h-10 w-10" />,
      skills: ["VMware", "VirtualBox", "Docker", "Proxmox", "File Sharing", "Domain Controller"],
    },
    {
      title: "Automatisation & Scripting",
      description: "Automatisation des tâches d'administration et scripting",
      icon: <Terminal className="h-10 w-10" />,
      skills: ["Python", "Bash Scripting", "PowerShell", "Ansible", "Cron Jobs", "Git"],
    },
  ],
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("dfir")
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
          subtitle="Mes domaines d'expertise en cybersécurité, DFIR et sécurité réseau"
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Tabs defaultValue="dfir" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger
                value="dfir"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Search className="h-4 w-4" />
                <span>DFIR</span>
              </TabsTrigger>
              <TabsTrigger
                value="network"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Network className="h-4 w-4" />
                <span>Network Security</span>
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Shield className="h-4 w-4" />
                <span>Blue Team</span>
              </TabsTrigger>
              <TabsTrigger
                value="sysadmin"
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Server className="h-4 w-4" />
                <span>SysAdmin</span>
              </TabsTrigger>
            </TabsList>

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 opacity-70 blur-sm"></div>

              <TabsContent value="dfir" className="mt-0 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skillsData.dfir.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      skills={skill.skills}
                      index={index}
                      isActive={activeTab === "dfir"}
                    />
                  ))}
                </div>
              </TabsContent>

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

              <TabsContent value="sysadmin" className="mt-0 relative">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skillsData.sysadmin.map((skill, index) => (
                    <SkillCard
                      key={index}
                      title={skill.title}
                      description={skill.description}
                      icon={skill.icon}
                      skills={skill.skills}
                      index={index}
                      isActive={activeTab === "sysadmin"}
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

