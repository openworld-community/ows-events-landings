declare module '*.svg?componentext' {
   import type { FunctionalComponent, SVGAttributes } from 'nuxt/dist/app/compat/capi';
   const component: FunctionalComponent<
      SVGAttributes & {
         /** Use icon original fill color instead of `currentColor`.*/
         filled?: boolean;
         /** Set to `true` to disable default behavior of scaling icon size to `1em` */
         fontControlled?: boolean;
         /** Component to render as is */
         icon?: any;
      },
      {},
      any
   >;
   export default component;
}
declare module '../assets/icons/*' {
   import SVG from '*.svg?componentext';
   const component: typeof SVG;
   export default component;
}
declare module '@/*.svg' {
   import SVG from '*.svg?componentext';
   const component: typeof SVG;
   export default component;
}
