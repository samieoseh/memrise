import { signin } from '@/api/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type SigninFormValues = z.infer<typeof schema>;

export default function Signin() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'samieoseh@gmail.com',
      password: '123456789',
    },
  });

  const onSubmit = async (data: SigninFormValues) => {
    try {
      setIsSigningIn(true);
      await signin(data);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div className="py-24">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-8">
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      autoFocus
                      required
                      placeholder="you@example.com"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="text-xs ml-auto cursor-pointer inline-block underline-offset-4 hover:underline"
                    to={'/auth/forgot-password'}
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input id="password" type="password" {...field} />
                  )}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              role="submit"
              className="w-full"
              disabled={isSigningIn}
              onClick={handleSubmit(onSubmit)}
            >
              <MoonLoader
                color={'#ffffff'}
                loading={isSigningIn}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              {isSigningIn ? 'Please wait' : 'Sign in'}
            </Button>
            {/* <Button variant="outline" className="w-full">
            Sign in with Google
          </Button> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
