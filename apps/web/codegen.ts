import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config();

const wpAuthToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN ?? "";

export default <CodegenConfig>{
  schema: {
    ["https://dcs-headless.com/graphql"]: {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Authorization: `Bearer ${wpAuthToken}`
      }
    }
  },
  documents: ["src/ui/**/*.tsx", "src/graphql/**/*.graphql"],
  verbose: true,
  debug: true,
  generates: {
    "src/gql/": {
      preset: "client"
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"]
    }
  }
};
