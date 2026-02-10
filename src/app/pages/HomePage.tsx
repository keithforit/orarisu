import { Hero } from '../components/Hero';
import { ThreePillars } from '../components/ThreePillars';
import { GlobalRoles } from '../components/GlobalRoles';
import { Statistics } from '../components/Statistics';
import { Strategy } from '../components/Strategy';

export function HomePage() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <Statistics />
      <GlobalRoles />
      <Strategy />
    </>
  );
}
