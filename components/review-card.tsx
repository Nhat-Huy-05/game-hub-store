import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReviewCardProps {
  name: string;
  game: string;
  rating: number;
  review: string;
  avatar: string;
}

export function ReviewCard({ name, game, rating, review, avatar }: ReviewCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 space-y-4">
        {/* Rating stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-muted-foreground leading-relaxed">
          "{review}"
        </p>

        {/* User info */}
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className={`w-10 h-10 rounded-full ${avatar} flex items-center justify-center text-white font-semibold`}>
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <Badge variant="secondary" className="text-xs">
              Playing: {game}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
