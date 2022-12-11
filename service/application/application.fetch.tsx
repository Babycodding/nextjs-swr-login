export type Root = Root2[];

export interface Root2 {
  categories_code: string;
  categories_name: string;
  details: Detail[];
}

export interface Detail {
  programs_id: string;
  program_code: string;
  program_name: string;
  url_name: string;
}
const endpoint =
  `${process.env.NEXT_PUBLIC_HOST_ENDPOINT}/company/all-link-programs/dr-read`;

export const getApp = (url: string, params: any) => {
  try {
    return fetch(`${endpoint}?where=[["program_name","contains","${params}"]]`)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        return r;
      });
  } catch (err: any) {
    return err;
  }
};
