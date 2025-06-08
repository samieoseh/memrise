import { Button } from '@/components/ui/button';
import { LucideSend } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function EmailSent() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  console.log(email);
  return (
    <div className="py-24 flex flex-col justify-center items-center px-4">
      <div className="max-w-md text-center">
        <div className="flex justify-center items-center mb-6">
          <LucideSend className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-500 mb-4">
          Email Sent Successfully
        </h1>
        <p className="text-gray-600 mb-6">
          We've sent a confirmation link to your email. Please check your inbox
          (and spam folder) to continue.
        </p>
        <Button>Resend Email</Button>
      </div>
    </div>
  );
}
