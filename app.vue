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

useTrackUser();
onMounted(() => {
   useTrackInteraction('initial_page_load');
});
</script>
<template>
   <Html class="scroll-smooth" />
   <NuxtPage />
</template>
<style>
svg.nuxt-icon {
   margin-bottom: 0;
   width: unset;
}
</style>
