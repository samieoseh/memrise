import supabase from '../../lib/supabase';
import { SigninPayload } from '../../typings/auth';

export const signup = async (payload: SigninPayload) => {
  const { data, error } = await supabase.auth.signUp(payload);

  if (error) {
    return;
  }
  return data;
};
