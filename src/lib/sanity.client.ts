// ./src/lib/sanity.client.ts

import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2023-01-01"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:
    "skdeQfr5jAh7OKuKxDBggKXilD2SWJKAu1BGfcEMcL5TA47qLh3v70OMzt4PgGWD2kH01uoMuiHrmL5Sn",
});
