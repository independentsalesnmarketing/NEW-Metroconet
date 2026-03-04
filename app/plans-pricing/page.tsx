import PlansAndPricingClient from "./PlansAndPricingClient"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Metronet Internet Plans & Pricing | First Month FREE + $100 Gift Card",
  description:
    "Discover Metronet's affordable fiber internet plans starting at $60. Get first month FREE + $100 Visa Gift Card on select plans. Enjoy symmetrical speeds up to 5 Gig, no data caps, and free installation. Find your perfect plan today!",
}

export default function PlansAndPricing() {
  return (
    <>
      <GoogleAnalytics />
      <PlansAndPricingClient />
    </>
  )
}
