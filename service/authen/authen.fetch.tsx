const authenHost =
  "https://api-internal-sit.dohome.technology/authen-gm/oauth2/login";

export const login = (url: any, params: any) => fetch(url, { method: "POST",body:JSON.stringify(params) }).then((r) => r.json());

export const authen = (params: any) => {
  fetch(authenHost, { method: "POST", body: JSON.stringify(params) }).then(
    (r) => r.json()
  );
};
