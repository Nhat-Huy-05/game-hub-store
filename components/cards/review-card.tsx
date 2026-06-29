import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ReviewCardProps {
  name: string
  game: string
  rating: number
  review: string
  avatar: string
}

export function ReviewCard({
  name,
  game,
  rating,
  review,
  avatar,
}: ReviewCardProps) {
  return (
    <Card className="h-full cursor-pointer border-2 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
      <CardContent className="space-y-4 pt-6">
        {/* Rating stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="leading-relaxed text-muted-foreground">"{review}"</p>

        {/* User info */}
        <div className="flex items-center gap-3 border-t pt-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white ${avatar}`}
          >
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <Badge variant="secondary" className="text-xs">
              Playing: {game}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
