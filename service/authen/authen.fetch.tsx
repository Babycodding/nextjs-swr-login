export const login = (url: string) => fetch(url).then((r) => r.json());
