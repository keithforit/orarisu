import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { SmartArticleCreator } from './components/SmartArticleCreator';

export default function App() {
  return (
    <div className="size-full flex bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 p-8">
          <SmartArticleCreator />
        </main>
      </div>
    </div>
  );
}