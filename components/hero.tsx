import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container pt-20 pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              New Season Available
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Discover Your Next
                <span className="block text-primary">Gaming Adventure</span>
              </h1>

              <p className="max-w-lg text-lg text-muted-foreground">
                Explore thousands of games, join a thriving community, and
                experience gaming like never before.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#games">
                  Browse Games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Right content - Featured game card */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-4 p-8 text-center">
                  <div className="text-6xl font-bold text-white/90">
                    FEATURED
                  </div>
                  <div className="text-2xl font-semibold text-white/80">
                    Game Title
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -bottom-4 rounded-lg border border-border bg-background p-4 shadow-lg">
              <div className="text-sm font-medium">Top Rated</div>
              <div className="text-2xl font-bold text-primary">4.9★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
