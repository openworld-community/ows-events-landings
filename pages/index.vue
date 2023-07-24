<script setup lang="ts">
definePageMeta({
   middleware() {
      return navigateTo({ name: ROUTE.PARSING });
   },
});
</script>
