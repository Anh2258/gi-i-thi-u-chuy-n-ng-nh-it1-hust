import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ProgramDetails from "@/components/home/ProgramDetails";
import OpportunitiesChallenges from "@/components/home/OpportunitiesChallenges";
import LeadMagnet from "@/components/home/LeadMagnet";
import Blog from "@/components/home/Blog";
import Chatbot from "@/components/home/Chatbot";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <Navbar />
      <main>
        <Hero />
        <ProgramDetails />
        <OpportunitiesChallenges />
        <LeadMagnet />
        <Blog />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}


