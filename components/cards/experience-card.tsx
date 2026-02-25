"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function ExperienceCard({ title, company, period, description, responsibilities, index }) {
  return (
    <div className="flex">
      <div className="hidden md:flex flex-col items-center mr-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10">
          <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <div className="w-0.5 bg-border flex-grow mt-4"></div>
      </div>

      <Card className="flex-1 overflow-hidden border-none shadow-md bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30">{period}</Badge>
          </div>
          <CardDescription className="text-base">{company}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{description}</p>
          <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

