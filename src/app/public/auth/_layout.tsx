import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthenticated={false} />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer isAuthenticated={false} />
    </div>
  );
}
