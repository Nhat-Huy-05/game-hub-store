import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group cursor-pointer border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg">
      <CardContent className="space-y-4 pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
