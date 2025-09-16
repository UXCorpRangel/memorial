/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.astro" {
  const Component: (props: any) => any;
  export default Component;
}

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
