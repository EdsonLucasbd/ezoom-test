
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clxlnr9vk00f507uvf8zimn18/master",
  documents: "src/gql/queries.ts",
  generates: {
    "src/gql/generate/": {
      preset: "client",
    }
  }
};

export default config;
