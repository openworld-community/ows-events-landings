# ows-events-landings

## Package manager

You can use any package of your choice but PNPM is preferred. Lock files from NPM or Yarn will be gitignored.

## Assets

### Images

Images should be used with `<NuxtImg/>` component and put into `public/` folder.

### SVG

SVG icons are supported through [Unplugin Icons](https://github.com/antfu/unplugin-icons).

To add custom icon collections modify `iconCollections` variable in `nuxt.config.ts` like this. All `.svg` files in that directory will be supported for auto-importing.

```ts
const iconCollections = {
   // will check for files like ./directory/*.svg, will not check for sub-directories
   collection: FileSystemIconLoader('./directory'),
};
// and then use like
import Icon from '~icons/collection/icon';
// or in templates with auto-imports
<ICollectionIcon />;
```

Icons are assumed to be square-shaped. If that's not the case then the most common solutions is to set `:width="undefined"`.

**When adding custom collections make sure SVG files have their `viewBox` attribute set, `width` & `height` removed and set fill/stroke etc to `currentColor` where aplicable - so that these icons can be easily customizable.**
