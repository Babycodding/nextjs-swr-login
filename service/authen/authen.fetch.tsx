import { parseJwt } from "../util/jwtDecode";
import { getCookie } from "../util/cookie";
interface IDecode {
  employeeLevel: string;
  exp: number;
  positionName: string;
  userId: string;
  userName: string;
  uuid: string;
}

const authenHost = `${process.env.NEXT_PUBLIC_HOST_ENDPOINT}${process.env.NEXT_PUBLIC_API_AUTHEN}`;

export const login = (url: any, params: any) =>
  fetch(url, { method: "POST", body: JSON.stringify(params) }).then((r) =>
    r.json()
  );

export const authen = (params: any) => {
  try {
    return fetch(authenHost, {
      method: "POST",
      body: JSON.stringify(params),
    })
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        const _parseJwt: IDecode = parseJwt(r.token);
        const expire: Date = new Date(_parseJwt.exp);
        document.cookie = `token=${
          r.token
        };expires=${expire.toISOString()};path=/`;
        return r;
      });
  } catch (err: any) {
    return err;
  }
};

export const getUser = (): IDecode => {
  const _token: string = getCookie("token");
  const _parseJwt: IDecode = parseJwt(_token);
  return _parseJwt;
};
