import { Hero } from "@/components/sections/hero"
import { FeaturedGames } from "@/components/sections/featured-games"
import { Features } from "@/components/sections/features"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { PlayerReviews } from "@/components/sections/player-reviews"
import { Community } from "@/components/sections/community"

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedGames />
      <Features />
      <ProductShowcase />
      <PlayerReviews />
      <Community />
    </>
  )
}
