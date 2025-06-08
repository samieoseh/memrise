import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div>
      <Header isAuthenticated={false} />
      <Outlet />
      <Footer isAuthenticated={false} />
    </div>
  );
}
