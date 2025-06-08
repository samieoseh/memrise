import { forgotPassword } from '@/api/auth';
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
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type ForgotPasswordFormValues = z.infer<typeof schema>;

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'samieoseh@gmail.com',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      setIsSendingEmail(true);
      await forgotPassword(data);
      navigate(`/auth/email-sent?email=${data.email}`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="py-24">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Forgot your password</CardTitle>
          <CardDescription>
            Enter your email below to reset your password
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
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full"
              onClick={handleSubmit(onSubmit)}
            >
              <MoonLoader
                color={'#ffffff'}
                loading={isSendingEmail}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              {isSendingEmail ? 'Please wait' : 'Send Email'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
