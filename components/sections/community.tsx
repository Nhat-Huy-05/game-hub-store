"use client"

import { Check, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Community() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section
      id="community"
      className="bg-linear-to-br from-primary/10 via-background to-accent/10 py-24"
    >
      <div className="container">
        <Card className="mx-auto max-w-2xl border-2">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight md:text-4xl">
              Join the Community
            </CardTitle>
            <CardDescription className="text-lg">
              Get exclusive deals, new game releases, and weekly updates
              delivered straight to your inbox.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isSubscribed}
              />
              <Button type="submit" size="lg" disabled={isSubscribed}>
                {isSubscribed ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Weekly game updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Exclusive discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Early access to sales</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
