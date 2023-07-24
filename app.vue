<script setup lang="ts">
useHead({
   htmlAttrs: { lang: 'ru' },
   script: [
      {
         src: 'https://afisha-metrics.orby-tech.space/js/script.js',
         defer: true,
         'data-domain': 'events-api.orby-tech.space',
      },
   ],
});
</script>
<template>
   <Html class="scroll-smooth" />
   <NuxtPage />
</template>
