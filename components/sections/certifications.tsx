"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
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
                  <CardTitle>Master en Sécurité des Systèmes d'Information</CardTitle>
                  <CardDescription>Université XYZ, 2015</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>Spécialisation en sécurité réseau et gestion des infrastructures IT</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Licence en Informatique</CardTitle>
                  <CardDescription>Université ABC, 2013</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>Option réseaux et télécommunications</p>
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
                  <CardTitle>Certifications Réseau</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Cisco CCNP</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Cisco CCNA</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Juniper JNCIA</Badge>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Certifications Sécurité</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CompTIA Security+</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CEH</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">CISSP</Badge>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-muted/30">
                  <CardTitle>Certifications Cloud & Système</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">AWS Solutions Architect</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Microsoft MCSA</Badge>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">VMware VCP</Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

