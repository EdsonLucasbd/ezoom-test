/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URI: string
  readonly VITE_GRAPHQL_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}