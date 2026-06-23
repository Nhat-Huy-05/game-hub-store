import { GameCard } from "@/components/game-card"

const games = [
  {
    title: "CyberPunk 2077",
    price: 59.99,
    discount: 40,
    genre: "Action RPG",
    tags: ["Open World", "Cyberpunk", "Sci-Fi", "Shooter"],
    gradient: "bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700",
    image: "/images/CyberPunk 2077 logo.png",
  },
  {
    title: "It Take Two",
    price: 49.99,
    discount: 70,
    genre: "Adventure",
    tags: ["Co-op", "Platformer", "Puzzle"],
    gradient: "bg-gradient-to-br from-amber-500 via-orange-600 to-red-700",
    image: "/images/it take two logo.jpg",
  },
  {
    title: "Astro Bot",
    price: 39.99,
    discount: 15,
    genre: "Platformer",
    tags: ["Action", "3D", "Singleplayer"],
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700",
    image: "/images/astro bot logo.jpg",
  },
  {
    title: "Elden Ring",
    price: 75.0,
    discount: 40,
    genre: "Action RPG",
    tags: ["Open World", "Souls-like", "Fantasy", "PvP", "Hentai"],
    gradient: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700",
    image: "/images/elden ring logo.jpg",
  },
  {
    title: "Stardew Valley",
    price: 29.99,
    discount: 30,
    genre: "Simulation",
    tags: ["Farming", "Relaxing", "Indie", "Multiplayer"],
    gradient: "bg-gradient-to-br from-pink-500 via-rose-600 to-red-700",
    image: "/images/Logo_of_Stardew_Valley.png",
  },
  {
    title: "Dark Souls Remastered",
    price: 54.99,
    discount: 50,
    genre: "Action",
    tags: ["Souls-like", "Dark Fantasy", "Difficult", "Boss Rush"],
    gradient: "bg-gradient-to-br from-slate-500 via-gray-700 to-zinc-900",
    image: "/images/Dark_Souls_Remastered_Logo.png",
  },
]

export function FeaturedGames() {
  return (
    <section id="games" className="bg-muted/30 py-24">
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Games
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our handpicked selection of the hottest games. From
            action-packed adventures to immersive RPGs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  )
}
