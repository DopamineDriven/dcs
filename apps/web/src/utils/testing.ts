import { QueryChildPageBySlug } from "@/queries/page-by-uri";
import * as dotenv from "dotenv";

dotenv.config();

(async () => await QueryChildPageBySlug("About_Us", "our-organization"))()
  .then((s) => {
    console.log(s.page);
  })
  .catch((t) => console.error(t));
