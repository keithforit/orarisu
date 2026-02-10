import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
