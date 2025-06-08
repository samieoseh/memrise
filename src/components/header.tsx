import { Book, Settings, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

export default function Header({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const navigate = useNavigate();
  return (
    <header className={'bg-gray-900 border-b transition-colors duration-200'}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link to={'/'}>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Book className="h-6 w-6 text-white" />
              </div>
              <h1 className={`text-xl font-bold  text-white`}>VerseVibe</h1>
            </div>
          </Link>

          <div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div
                    className={`flex items-center space-x-1 
                text-gray-300 
                `}
                  >
                    <Trophy className="h-4 w-4 text-yellow-500" />

                    <span>Level 5</span>
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-gray-300
                `}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>200 pts</span>
                  </div>
                  <div
                    className={`flex items-center space-x-1 text-gray-300 
                `}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>7 day streak</span>
                  </div>
                </div>

                <button
                  className={`p-2 rounded-full transition-colors 
                bg-gray-800 text-gray-400 hover:bg-gray-700
              `}
                >
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  className="text-sm cursor-pointer font-medium text-gray-300 hover:text-white transition"
                  onClick={() => {
                    navigate('/auth/sign-in');
                  }}
                >
                  Sign In
                </button>
                <Button
                  onClick={() => {
                    navigate('/auth/sign-up');
                  }}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
