<script setup lang="ts">
import LogoURL from '@/assets/parsing/logo.svg?url';

import ArrowRightSVG from '@/assets/icons/arrow-right.svg?component';
import CheckmarkSVG from '@/assets/icons/checkmark.svg?component';
import LogoSVG from '@/assets/parsing/logo.svg?component';
import TelegramSVG from '@/assets/parsing/telegram.svg?component';

definePageMeta({ name: ROUTE.PARSING });
useHead({ link: [{ rel: 'icon', href: LogoURL }] });
useServerSeoMeta({
   title: 'EventsAPI',
   description:
      'API для поиска мероприятий в вашем городе. Мы предоставляем подробную информацию о каждом мероприятии, включая дату, время, место проведения, цену и многое другое.',
});

const navigation = {
   functionality: { label: 'Функции', id: 'functionality' },
   advantage: { label: 'Преимущества', id: 'advantage' },
   benefits: { label: 'Польза для бизнеса', id: 'benefits' },
   example: { label: 'Пример использования', id: 'example' },
   howTo: { label: 'Как подключить', id: 'how-to' },
} satisfies Record<string, { label: string; id: Lowercase<string> }>;

const functionalityCard: {
   title: string;
   description: string;
   logo: string;
}[] = [
   {
      title: 'Фильтровать по категориям',
      description:
         'Спорт, искусство, музыка, конференции — находите мероприятия, которые подходят запросам ваших пользователей.',
      logo: 'parsing/options.png',
   },
   {
      title: 'Предоставлять подробную информацию',
      description:
         'Спорт, искусство, музыка, конференции — находите мероприятия, которые подходят запросам ваших пользователей.',
      logo: 'parsing/info.png',
   },
   {
      title: 'Бесшовно интегрироваться',
      description:
         'Легкое внедрение API в ваши приложения и сервисы, обеспечивающее плавное взаимодействие и безопасность данных.',
      logo: 'parsing/settings.png',
   },
];
</script>
<template>
   <div class="m-auto max-w-[1440px] px-20 text-neutral-dark">
      <header
         class="relative flex items-center justify-around gap-3 py-3 text-neutral-main after:absolute after:bottom-0 after:w-screen after:border-b-2 after:border-neutral-pale"
      >
         <LogoSVG class="mr-6 shrink-0 text-neutral-black" />
         <nav class="flex grow gap-8 px-4 py-2">
            <NuxtLink
               v-for="navItem in navigation"
               :key="navItem.id"
               :to="{ hash: `#${navItem.id}` }"
            >
               {{ navItem.label }}
            </NuxtLink>
         </nav>
         <NuxtLink
            to="/"
            class="flex gap-3"
         >
            <TelegramSVG class="text-blue-dark" />
            Написать в Telegram
         </NuxtLink>
      </header>
      <main>
         <section class="grid grid-cols-2 font-medium">
            <div class="flex flex-col justify-center gap-8">
               <h2 class="text-3xl leading-relaxed">
                  Новый способ быстрого поиска мероприятий по всему миру
               </h2>
               <h1 class="text-8xl font-bold leading-snug">Events API</h1>
               <button
                  class="flex w-fit items-center gap-3 rounded-xl bg-gradient-to-b from-blue-light to-blue-dark px-5 py-3 text-neutral-white"
               >
                  Отправить запрос на подключение <ArrowRightSVG />
               </button>
               <ul class="mt-16 flex flex-col gap-3">
                  <li
                     v-for="text in ['Для разработчиков ПО', 'Для организаторов мероприятий']"
                     :key="text"
                     class="flex items-center gap-4 text-2xl"
                  >
                     <div
                        class="flex aspect-square h-9 items-center justify-center rounded-full bg-gradient-to-b from-neutral-light to-neutral-dark"
                     >
                        <CheckmarkSVG class="text-neutral-white" />
                     </div>
                     <span>
                        {{ text }}
                     </span>
                  </li>
               </ul>
            </div>
            <NuxtImg src="parsing/funnel.png" />
         </section>
         <section :id="navigation.functionality.id">
            <h1 class="py-10 text-5xl font-bold">Что умеет Events API</h1>
            <div class="grid grid-cols-3 gap-5 text-neutral-black">
               <div
                  v-for="{ description, logo, title } in functionalityCard"
                  :key="title"
                  class="grid grid-cols-4 grid-rows-2 items-center gap-y-4 rounded-2xl bg-gradient-to-r from-blue-pale-light to-blue-pale-main p-8"
               >
                  <NuxtImg
                     :src="logo"
                     class="transition-transform hover:[transform:rotate3d(1,1,1,45deg)]"
                  />
                  <h3 class="col-span-3 text-xl font-semibold">{{ title }}</h3>
                  <p class="col-span-full">
                     {{ description }}
                  </p>
               </div>
            </div>
         </section>
         <section :id="navigation.advantage.id">
            <h1 class="py-10 text-5xl font-bold">Преимущества Events API</h1>
         </section>
         <section :id="navigation.benefits.id">
            <h1 class="py-10 text-5xl font-bold">{{ navigation.benefits.label }}</h1>
         </section>
         <section :id="navigation.example.id">
            <h1 class="py-10 text-5xl font-bold">{{ navigation.example.label }}</h1>
         </section>
         <section :id="navigation.howTo.id">
            <h1 class="py-10 text-5xl font-bold">{{ navigation.howTo.label }}</h1>
         </section>
      </main>
   </div>
</template>
