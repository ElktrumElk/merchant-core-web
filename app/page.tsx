import About from "./components/about/About";
import Downloads from "./components/downloads/Downloads";
import Feature from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Solution from "./components/solution/Solution";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Solution />
      <Feature />
      <Downloads />
      <Footer />
    </main>
  );
}
