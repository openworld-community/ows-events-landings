<script setup lang="ts" generic="T extends string, S extends string">
import seedrandom from 'seedrandom';

const props = defineProps<{
   /** Name of an AB test to uniquely identify it.
    *  Name needs to be unique and consistent, not ranodmly generated.
    *  Because of this a type has to be a string literal, not just a string.
    */
   name: string extends T ? never : T;
   /**
    * A list of names for variants tested - must have at least 2 elements
    */
   variants: [S, S, ...S[]];
}>();

const userId = useTrackUser();
const seeder = computed(() => seedrandom(`${userId}${props.name}`));
const choice = computed(() => Math.floor(seeder.value() * props.variants.length));
</script>
<template>
   <slot :name="variants[choice]"> Something went wrong </slot>
</template>

<style scoped></style>
