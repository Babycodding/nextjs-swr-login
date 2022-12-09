const authenHost =
  "https://api-internal-sit.dohome.technology/authen-gm/oauth2/login";

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
        localStorage.setItem("userModule", JSON.stringify(r));
        return r;
      });
  } catch (err: any) {
    return err;
  }
};
