<script setup lang="ts">
const { $trpc } = useNuxtApp();
const { data } = $trpc.hello.useQuery({ text: 'Zhenya' });
</script>
<template>
   <div>
      <div class="bg-gross font-bold">
         {{ data.greeting }}
      </div>
      <button>PRESS ME</button>
   </div>
</template>
