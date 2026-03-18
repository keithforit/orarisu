import { RouterProvider } from 'react-router';
import { router } from './routes';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex items-center justify-center min-h-screen bg-[#E8E8E8]">
        <div className="w-[390px] h-[844px] bg-background overflow-hidden shadow-2xl">
          <RouterProvider router={router} />
        </div>
      </div>
    </LanguageProvider>
  );
}