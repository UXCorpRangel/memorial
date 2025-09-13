/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.astro" {
  const Component: (props: any) => any;
  export default Component;
}
