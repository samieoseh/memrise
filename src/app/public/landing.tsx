import { useState } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Target,
  Users,
  Trophy,
  Star,
  Download,
  ArrowRight,
  Zap,
  Heart,
  Share2,
  Book,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import useSession from '@/hooks/useSession';
import { BeatLoader } from 'react-spinners';

const features = [
  {
    icon: Target,
    title: 'Smart Memory System',
    description:
      'AI-powered spaced repetition that adapts to your learning pace and helps verses stick in long-term memory.',
  },
  {
    icon: Trophy,
    title: 'Achievement Unlocks',
    description:
      "Level up with badges, streaks, and challenges. Turn memorization into an engaging game you'll want to play daily.",
  },
  {
    icon: Users,
    title: 'Community Challenges',
    description:
      'Join friends in group challenges, share progress, and encourage each other on your spiritual journey.',
  },
  {
    icon: Zap,
    title: 'Quick Review Mode',
    description:
      'Perfect for busy schedules. Review verses during commutes, breaks, or any spare moments throughout your day.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    age: 19,
    text: "This app actually made Bible memorization fun! I've memorized more verses in 3 months than I had in years.",
    rating: 5,
  },
  {
    name: 'Marcus J.',
    age: 22,
    text: 'The streak system is addictive in the best way. 47 days and counting!',
    rating: 5,
  },
  {
    name: 'Emma K.',
    age: 20,
    text: 'Love how it fits into my daily routine. The notifications are perfectly timed and not annoying.',
    rating: 5,
  },
];

export default function Index() {
  const navigate = useNavigate();

  const { session, isLoadingSession } = useSession();

  if (isLoadingSession) {
    return (
      <div className="h-screen w-full border gap-4 flex flex-1 flex-col items-center justify-center">
        <BeatLoader
          color={'#9333ea'}
          loading={isLoadingSession}
          size={40}
          aria-label="Loading"
          data-testid="loader"
        />
      </div>
    );
  }

  if (session) {
    navigate('/dashboard');
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-background backdrop-blur-md fixed w-full z-50 border-b ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Book className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">VerseVibe</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#community"
                className="hover:text-primary transition-colors"
              >
                Community
              </a>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <Button
                className="bg-primary text-white px-6 py-2 rounded-full transition-colors"
                onClick={() => {
                  navigate('/auth/sign-up');
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2  hover:text-primary"
              >
                Features
              </a>
              <a
                href="#community"
                className="block px-3 py-2  hover:text-primary"
              >
                Community
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2  hover:text-primary"
              >
                Reviews
              </a>
              <Button
                className="w-full text-left bg-primary text-white px-3 py-2 rounded-lg transition-colors"
                onClick={() => {
                  navigate('/auth/sign-up');
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Memorize Scripture.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {' '}
                Level Up Spiritually.
              </span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
              Transform your Bible study with gamified memorization, AI-powered
              learning, and a community that celebrates your spiritual growth
              journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="cursor-pointer bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Free</span>
              </button>
              <button className=" cursor-pointer border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center space-x-2">
                <span>Watch Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600">Verses Memorized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  12K+
                </div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  4.9★
                </div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Features That Actually Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed by young and old. Every feature is built to fit your
              lifestyle and learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-popover p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              You're Not Alone in This Journey
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Join thousands of young believers who are growing stronger in
              faith together through Scripture memorization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <Share2 className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Share Progress</h3>
                <p className="opacity-90">
                  Celebrate wins with friends and stay accountable together.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <Trophy className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Weekly Challenges
                </h3>
                <p className="opacity-90">
                  Compete in friendly challenges and earn exclusive badges.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <Heart className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prayer Support</h3>
                <p className="opacity-90">
                  Request prayer and support from your community when you need
                  it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Stories, Real Growth
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              See how VerseVibe is transforming spiritual lives across campuses
              and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-popover p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">{testimonial.name}</span>,{' '}
                  {testimonial.age}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Spiritual Life?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join thousands of young believers who are already growing stronger
            in faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 cursor-pointer rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download Now - It's Free</span>
            </button>
            <button
              className="border-2 border-white cursor-pointer text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              onClick={() => {
                navigate('/auth/sign-up');
              }}
            >
              Try Web Version
            </button>
          </div>
          <p className="text-sm text-white opacity-75 mt-4">
            Available on iOS, Android, and Web • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <span className="text-xl font-bold">VerseVibe</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming Bible memorization for the next generation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 VerseVibe. Made with ❤️ for the next generation of
              believers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
