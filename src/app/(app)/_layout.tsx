import Header from '@/components/header';
import supabase from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

export default function MainLayout() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Failed to get session:', error.message);
      }
      setSession(data.session);
    };

    fetchSession().then(() => {
      setIsLoadingSession(false);
    });

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      },
    );

    // Cleanup
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

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
  if (!isLoadingSession && !session) {
    navigate('/auth/sign-in');
  }

  return (
    <div>
      <Header isAuthenticated={true} />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
