import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './app/public/landing';
import AuthLayout from './app/public/auth/_layout';
import Signup from './app/public/auth/sign-up';
import Signin from './app/public/auth/sign-in';
import ForgotPassword from './app/public/auth/forgot-password';
import ResetPassword from './app/public/auth/reset-password';

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
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
