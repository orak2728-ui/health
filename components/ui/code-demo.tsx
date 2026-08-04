'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-gradient-to-br from-black via-neutral-950 to-black relative overflow-hidden border border-amber-500/20 shadow-[0_0_80px_-20px_rgba(212,175,55,0.35)]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#f5d485"
      />

      {/* subtle luxurious gold vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12),transparent_60%)]" />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(110deg,#fceabb_10%,#d4af37_35%,#fff6d5_50%,#d4af37_65%,#8a6d1f_90%)] bg-[length:200%_100%] animate-gold-shimmer drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
          >
            Interactive 3D
          </h1>
          <p className="mt-4 text-amber-100/60 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
