import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Delivery from "@/components/Delivery";
import Features from "@/components/Features";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MenuPreview />
          <Delivery />
          <Features />
          <Branches />
          <Footer />
        </main>
      </div>
      <WhatsAppButton />
    </>
  );
}