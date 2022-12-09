import useSWR, { mutate } from "swr";
import { login } from "./authen.fetch";

const authenHost =
  "https://api-internal-sit.dohome.technology/authen-gm/oauth2/login";

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
