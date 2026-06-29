import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary/20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

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
                <Link href="#games">
                  Browse Games
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right content - Overlapping game images */}
          <div className="relative h-137.5 w-full">
            {/* Top row - 3 main cards */}
            <div className="absolute inset-x-0 top-0 flex h-80 items-center justify-center gap-4">
              {/* God of War - Left */}
              <div className="h-80 w-56 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/God_of_War_Picture.png"
                  alt="God of War"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Mario Bros - Center (slightly higher) */}
              <div className="relative -top-8 z-10 h-96 w-64 overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/Mario_Bros_Picture.png"
                  alt="Mario Bros"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Spider-Man - Right */}
              <div className="h-80 w-56 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/Spider_Man_Picture.png"
                  alt="Spider Man"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom row - Witcher 3 & Dying Light */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4">
              <div className="h-60 w-48 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/The_Witcher3_Picture.png"
                  alt="The Witcher 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-60 w-48 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src="/images/Dying_Light_Picture.png"
                  alt="Dying Light"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
