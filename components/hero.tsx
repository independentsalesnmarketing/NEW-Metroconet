"use client"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-8 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/family_enjoying_the_internet_in_the_living_room_during_the_day_sun_lit_and_happy_they_are_sitting_o_0bmee4g87d6h6lfz0kbe_1-SxzDmNxtZgbACdCEG7MLyJO0re8GnC.png"
          alt="Family enjoying high-speed Metronet fiber internet at home"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: isMobile ? "70% center" : "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-12 sm:pt-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 text-left">
            {/* Updated headline with improved typography */}
            <h1 className="text-6xl sm:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Metronet
              </span>{" "}
              <span className="font-light">Fiber</span>
            </h1>

            {/* Updated subheadline with smaller text on mobile */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-8 font-light leading-relaxed">
              Experience future-ready speeds with up to 5 Gigs of symmetrical fiber internet. Sign up online and get
              your <span className="text-yellow-300 font-semibold">first month FREE</span>
              <span className="text-white font-normal mx-1">+</span>
              <span className="text-yellow-300 font-semibold">NO deposit required</span>
            </p>

            {/* Pricing converted to a button with hover effect - now purple */}
            <Link href="/plans-pricing" className="block mb-10 w-full sm:w-auto">
              <Button
                className="group relative overflow-hidden bg-[#964DFF] hover:bg-[#7a3fd0]
                text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_24px_rgba(150,77,255,0.5)]
                hover:shadow-[0_0_36px_rgba(150,77,255,0.75)] transform transition-all duration-300
                hover:scale-105 border border-purple-300/20 w-full md:w-auto text-base tracking-wide"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <span>Claim Your FREE First Month</span>
                  <span className="text-yellow-300 font-extrabold">&#8594;</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-white/10 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </Link>

            {/* Benefits list */}
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                <span className="text-white/90">100% Fiber Network</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                <span className="text-white/90">No data caps</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                <span className="text-white/90">No contracts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                <span className="text-white/90">24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
