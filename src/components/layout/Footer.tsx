import WeaveLogo from '@/components/ui/WeaveLogo';
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <WeaveLogo className="h-8" />
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Weave. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/how" className="hover:text-white transition-colors">How It Works</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
