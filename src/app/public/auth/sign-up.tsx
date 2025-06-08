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
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { signup } from '@/api/auth';
import { useState } from 'react';
import { MoonLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  displayName: z
    .string()
    .min(4, { message: 'Display name must be at least 4 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type SignupFormValues = z.infer<typeof schema>;

export default function Signup() {
  const navigate = useNavigate();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      displayName: 'Samuel',
      email: 'samieoseh@gmail.com',
      password: '12345678',
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setIsCreatingAccount(true);
      await signup(data);
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    } finally {
      setIsCreatingAccount(false);
    }
  };

  return (
    <div className="py-24">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your email below to create a new account
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-8">
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Display Name</Label>
                <Controller
                  name="displayName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="displayName"
                      autoFocus
                      required
                      placeholder="example"
                      {...field}
                    />
                  )}
                />
                {errors.displayName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.displayName.message}
                  </p>
                )}
              </div>
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
              className="w-full"
              onClick={handleSubmit(onSubmit)}
              disabled={isCreatingAccount}
            >
              <MoonLoader
                color={'#ffffff'}
                loading={isCreatingAccount}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

              {isCreatingAccount ? 'Please wait' : 'Sign up'}
            </Button>
            {/* <Button variant="outline" className="w-full">
            Sign up with Google
          </Button> */}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
