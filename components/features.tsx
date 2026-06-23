import { Cloud, Gamepad2, Users, RefreshCw } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    icon: Cloud,
    title: "Cloud Saves",
    description: "Never lose your progress. Access your games and saves from any device, anywhere.",
  },
  {
    icon: Gamepad2,
    title: "Cross-Platform",
    description: "Play on PC, console, or mobile. One account, all your games everywhere.",
  },
  {
    icon: Users,
    title: "Thriving Community",
    description: "Join millions of gamers worldwide. Chat, compete, and make lasting friendships.",
  },
  {
    icon: RefreshCw,
    title: "Easy Refunds",
    description: "Not satisfied? Get a full refund within 14 days, no questions asked.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose GameHub?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience gaming like never before with our cutting-edge platform designed for modern gamers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
