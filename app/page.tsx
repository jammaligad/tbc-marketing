import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Marquee from "../components/sections/marquee/default";
import Menu from "../components/sections/menu/default";
import Navbar from "../components/sections/navbar/default";
import Newsletter from "../components/sections/newsletter/default";
import Process from "../components/sections/process/default";
import Story from "../components/sections/story/default";
import Testimonials from "../components/sections/testimonials/default";
import Visit from "../components/sections/visit/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full overflow-x-clip">
      <Navbar />
      <Hero />
      <Marquee />
      <Menu />
      <Story />
      <Process />
      <Testimonials />
      <Visit />
      <Newsletter />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
