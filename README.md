# ows-events-landings

## Package manager

You can use any package of your choice but PNPM is preferred. Lock files from NPM or Yarn will be gitignored

## Assets

### Images

Images should be used with `<NuxtImg/>` component and put into `public/` folder

### SVG

SVG images should be used with `vite-svg-loader` plugin - check [docs](https://github.com/jpkleemans/vite-svg-loader#import-params) for usage.

**Make sure SVG images have `viewBox` attribute set and `width` & `height` removed - otherwise the plugin will strip `viewBox` attribute for compression which will make image size fixed.**
