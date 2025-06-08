import Header from '@/components/header';
import useSession from '@/hooks/useSession';

import { Outlet, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

export default function MainLayout() {
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
