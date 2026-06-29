import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface GameCardProps {
  title: string
  price: number
  discount?: number
  genre: string
  tags?: string[]
  gradient: string
  image?: string
}

export function GameCard({
  title,
  price,
  discount,
  genre,
  tags = [],
  gradient,
  image,
}: GameCardProps) {
  const finalPrice = discount ? price - (price * discount) / 100 : price

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className={`aspect-[3/4] ${gradient} relative overflow-hidden`}>
          {image ? (
            <>
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="space-y-2 p-6 text-center">
                <div className="text-3xl font-bold text-white/90">{title}</div>
              </div>
            </div>
          )}
          {discount && (
            <Badge className="text-destructive-foreground absolute top-4 right-4 bg-destructive">
              -{discount}%
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">{genre}</Badge>
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="line-clamp-1 text-lg font-semibold">{title}</h3>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center gap-2">
          {discount && (
            <span className="text-sm text-muted-foreground line-through">
              ${price.toFixed(2)}
            </span>
          )}
          <span className="text-xl font-bold">${finalPrice.toFixed(2)}</span>
        </div>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
