import * as dotenv from "dotenv";
import { QueryChildPageBySlug } from "@/queries/page-by-uri";

dotenv.config({ quiet: true });

(async () => await QueryChildPageBySlug("About_Us", "our-organization"))()
  .then(s => {
    console.log(s.page);
  })
  .catch(t => console.error(t));
