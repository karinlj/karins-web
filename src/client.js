import * as contentful from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.VITE_APP_SPACE_ID,
  accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
  // environment: import.meta.env.VITE_PUBLIC_APP_ENVIRONMENT,
});
