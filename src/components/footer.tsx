import { Book, Github, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 text-gray-400 absolute bottom-0 right-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Book className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">VerseVibe</span>
          </div>

          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => navigate('/about')}
              className="hover:text-white transition"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-white transition"
            >
              Contact
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-white transition"
            >
              Terms
            </button>
            {isAuthenticated && (
              <button
                onClick={() => navigate('/dashboard')}
                className="hover:text-white transition"
              >
                Dashboard
              </button>
            )}
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/your-project"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a href="mailto:support@versevibe.com" className="hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} VerseVibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
