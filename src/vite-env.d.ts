/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key (public-by-design). Set in .env.local. */
  readonly VITE_WEB3FORMS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
