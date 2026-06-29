import { ReviewCard } from "@/components/cards/review-card"

const reviews = [
  {
    name: "Alex Chen",
    game: "CyberPunk 2077",
    rating: 5,
    review:
      "Best gaming platform I've ever used. The cloud saves feature is a game-changer, and the community is amazing. Highly recommend!",
    avatar: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    name: "Sarah Miller",
    game: "Elden Ring",
    rating: 5,
    review:
      "Love how smooth everything runs. Cross-platform play works flawlessly, and I can switch between my PC and phone without any issues.",
    avatar: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    name: "James Rodriguez",
    game: "Astro Bot",
    rating: 4,
    review:
      "Great selection of games and excellent customer support. The refund process was super easy when I needed it. Will definitely keep using GameHub!",
    avatar: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    name: "Mike Johnson",
    game: "Dark Souls Remastered",
    rating: 5,
    review:
      "This game is hard but super fun! I died like 100 times but kept coming back. The boss fights are awesome and the graphics look great.",
    avatar: "bg-gradient-to-br from-slate-500 to-gray-600",
  },
  {
    name: "Emma Wilson",
    game: "Stardew Valley",
    rating: 5,
    review:
      "So relaxing and addictive! I started playing and forgot to eat dinner. The farming and fishing are really fun. Perfect game after a long day at work.",
    avatar: "bg-gradient-to-br from-green-500 to-emerald-600",
  },
  {
    name: "David Park",
    game: "Elden Ring",
    rating: 4,
    review:
      "Amazing open world and combat system. A bit too difficult at times and some bosses feel unfair, but overall it's one of the best RPGs I've played.",
    avatar: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    name: "Lisa Anderson",
    game: "It Take Two",
    rating: 5,
    review:
      "Best co-op game ever! My boyfriend and I played through the whole thing in one weekend. The puzzles are creative and the story made us laugh.",
    avatar: "bg-gradient-to-br from-rose-500 to-pink-600",
  },
  {
    name: "Tom Baker",
    game: "CyberPunk 2077",
    rating: 4,
    review:
      "The story and graphics are incredible. Had a few bugs here and there but nothing game-breaking. The city feels alive and there's so much to explore.",
    avatar: "bg-gradient-to-br from-cyan-500 to-blue-600",
  },
  {
    name: "Nina Patel",
    game: "Astro Bot",
    rating: 5,
    review:
      "Super fun platformer! The levels are creative and it's not too hard. My kids love watching me play. Reminds me of old Mario games but better.",
    avatar: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
]

export function PlayerReviews() {
  return (
    <section id="reviews" className="bg-muted/30 py-24">
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Player Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            See what our community has to say about their gaming experience on
            GameHub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
