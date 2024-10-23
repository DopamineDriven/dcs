import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config();

const wpAuthToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? "";
const wpUrl = process.env.WORDPRESS_API_URL ?? "";
const Authorization = `Bearer ${wpAuthToken}` as const;

export default {
  schema: [
    {
      [wpUrl]: {
        headers: {
          Authorization
        }
      }
    }
  ],
  documents: ["src/ui/**/*.tsx", "src/graphql/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client"
    }
  }
} as const satisfies CodegenConfig;
