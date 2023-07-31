# ows-events-landings

## Package manager

You can use any package of your choice but PNPM is preferred. Lock files from NPM or Yarn will be gitignored.

## Assets

### Images

Images should be used with `<NuxtImg/>` component and put into `public/` folder.

### SVG

SVG images should be used with `nuxt-svgo` module - check [docs](https://github.com/cpsoinos/nuxt-svgo) for usage.
Put them into `assets/icons` folder.

**Make sure SVG images have `viewBox` attribute set and `width` & `height` removed - otherwise the plugin will strip `viewBox` attribute for compression which will make image size fixed.**
