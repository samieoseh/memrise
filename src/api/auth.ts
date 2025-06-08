import supabase from '@/lib/supabase';
import type {
  ForgotPasswordPayload,
  SigninPayload,
  SignupPayload,
} from '@/typings/auth';

export const signup = async (payload: SignupPayload) => {
  const updatedPayload = {
    email: payload.email,
    password: payload.password,
    options: {
      data: {
        displayName: payload.displayName,
      },
    },
  };
  const { data, error } = await supabase.auth.signUp(updatedPayload);

  if (error) {
    throw new Error(error.message ?? 'Sign up failed');
  }

  return data;
};

export const signin = async (payload: SigninPayload) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) {
    throw new Error(error.message ?? 'Sign in failed');
  }

  return data;
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const { error } = await supabase.auth.resetPasswordForEmail(payload.email, {
    redirectTo: 'http://localhost:5173/auth/reset-password',
  });

  if (error) {
    throw new Error(error.message ?? 'Sign in failed');
  }
};

export const resetPassword = async (payload: { password: string }) => {
  const { error } = await supabase.auth.updateUser({
    password: payload.password,
  });
  if (error) {
    throw new Error(error.message ?? 'Sign in failed');
  }
};
