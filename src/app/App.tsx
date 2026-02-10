import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreePillars } from './components/ThreePillars';
import { GlobalRoles } from './components/GlobalRoles';
import { Statistics } from './components/Statistics';
import { Strategy } from './components/Strategy';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Add padding top to account for fixed header */}
      <main className="pt-20">
        <Hero />
        <ThreePillars />
        <Statistics />
        <GlobalRoles />
        <Strategy />
      </main>
      
      <Footer />
    </div>
  );
}
