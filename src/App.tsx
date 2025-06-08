import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './app/public/landing';
import AuthLayout from './app/public/auth/_layout';
import Signup from './app/public/auth/sign-up';
import Signin from './app/public/auth/sign-in';
import ForgotPassword from './app/public/auth/forgot-password';
import ResetPassword from './app/public/auth/reset-password';
import { Toaster } from 'react-hot-toast';
import MainLayout from './app/(app)/_layout';
import Dashboard from './app/(app)/dashboard';
import EmailSent from './app/public/auth/email-sent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <div>404</div>,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-up',
        element: <Signup />,
      },
      {
        path: 'sign-in',
        element: <Signin />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'email-sent',
        element: <EmailSent />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
          },
        }}
      />
    </>
  );
}
