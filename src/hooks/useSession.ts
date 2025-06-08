import supabase from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function useSession() {
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

  return {
    session,
    isLoadingSession,
  };
}
