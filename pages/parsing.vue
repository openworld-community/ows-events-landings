<script setup lang="ts">
import logo from '@/assets/parsing/logo.svg';
definePageMeta({ name: ROUTE.PARSING });
useHead({ link: [{ rel: 'icon', href: logo }] });
useServerSeoMeta({
   title: 'EventsAPI',
   description:
      'API для поиска мероприятий в вашем городе. Мы предоставляем подробную информацию о каждом мероприятии, включая дату, время, место проведения, цену и многое другое.',
});
</script>
<template>
   <div>
      <header>
         <img :src="logo" />
         <nav>
            <button class="z-10 w-10 bg-blue-main text-text-main">goto</button>
         </nav>
      </header>
      <main>1</main>
   </div>
</template>
