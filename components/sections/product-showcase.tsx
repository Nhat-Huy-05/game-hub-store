"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Gaming Headset Pro",
    price: 129.99,
    image: "/images/test3.png",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 199.99,
    image: "/images/test2.png",
  },
  {
    id: 3,
    name: "Gaming Mouse Elite",
    price: 89.99,
    image: "/images/test.png",
  },
]

export function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section id="gaming-gear" className="bg-muted/20 py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-bold">
                Crafted with
                <br />
                <span className="text-primary">excellent</span>
                <br />
                gaming gear.
              </h2>

              <p className="max-w-md leading-relaxed text-muted-foreground">
                Enhance your gaming experience with our premium collection of
                gaming accessories. Built for performance and designed for
                comfort.
              </p>
            </div>

            <Button size="lg" className="cursor-pointer rounded-full px-8">
              Explore
            </Button>
          </div>

          {/* Right Content - Product Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Card wrapper */}
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* Nền xanh trượt từ dưới lên */}
                  <div className="absolute inset-0 translate-y-full rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:translate-y-[40%]" />

                  {/* Ảnh */}
                  <div className="relative flex h-96 items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="relative object-contain p-6 transition-transform duration-300 group-hover:-translate-y-4"
                    />
                  </div>

                  {/* Nút + xuất hiện khi hover */}
                  <button
                    className={`absolute bottom-4 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-primary hover:text-white ${
                      hoveredProduct === product.id
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0"
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-1 p-6 text-center">
                  <h3 className="text-base font-semibold transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
