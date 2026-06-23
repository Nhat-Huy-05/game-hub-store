import { Hero } from "@/components/hero"
import { FeaturedGames } from "@/components/featured-games"
import { Features } from "@/components/features"
import { PlayerReviews } from "@/components/player-reviews"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedGames />
        <Features />
        <PlayerReviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
