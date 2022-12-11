import useSWR, { mutate } from "swr";
import { login } from "./authen.fetch";

const authenHost = `${process.env.NEXT_PUBLIC_HOST_ENDPOINT}${process.env.NEXT_PUBLIC_API_AUTHEN}`;

export default function useLogin(params?: any) {
  const { data, mutate, error } = useSWR([authenHost, params], login, {
    // revalidateOnMount: false,
    // revalidateOnFocus: false,
  });

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
    error,
  };
}
