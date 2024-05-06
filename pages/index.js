import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import PromoOffer from "@/components/home/PromoOffer";
import OurServices from "@/components/home/OurServices";
import HomeHero from "@/components/home/HomeHero";
import OurFeatures from "@/components/home/OurFeatures";

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <HomeHero />
            <OurFeatures />
            <PromoOffer />
            <OurServices />
        </main>
    );
}
