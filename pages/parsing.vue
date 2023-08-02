<script setup lang="ts">
definePageMeta({ name: ROUTE.PARSING });
useHead({ link: [{ rel: 'icon', href: '/parsing/favicon.ico' }] });
useServerSeoMeta({
   title: 'EventsAPI',
   description:
      'API для поиска мероприятий в вашем городе. Мы предоставляем подробную информацию о каждом мероприятии, включая дату, время, место проведения, цену и многое другое.',
});
const { $trpc } = useNuxtApp();

const telegram = ref('');
const email = ref('');
const inputs = [
   { placeholder: 'Ник в Telegram*', model: telegram },
   { placeholder: 'E-mail*', type: 'email', model: email },
];
function sendContacts() {
   if (!email.value && !telegram.value) return;

   useTrackInteraction('Sent contacts');
   $trpc.contact
      .mutate({ email: email.value || undefined, telegram: telegram.value || undefined })
      .catch(e => console.error(e));
}
</script>
<template>
   <div class="min-w-fit text-neutral-dark">
      <header
         class="mx-auto flex max-w-[1440px] items-center justify-around gap-9 px-20 py-3 text-neutral-main"
      >
         <ParsingLogo class="text-xl text-black" />
         <nav class="flex grow gap-8 px-4 py-2">
            <NuxtLink
               v-for="navItem in headerNavigation"
               :key="navItem.id"
               :to="{ hash: `#${navItem.id}` }"
            >
               {{ navItem.label }}
            </NuxtLink>
         </nav>
         <NuxtLink
            to="/"
            class="flex items-center gap-3"
            @click="useTrackInteraction('Contact us on telegram')"
         >
            <SvgoParsingMessageUs
               class="text-2xl text-blue-dark"
               :height="24"
               :width="24"
            />
            Написать в Telegram
         </NuxtLink>
      </header>
      <div class="bottom-0 border-b-2 border-neutral-pale" />
      <main class="mx-auto max-w-[1440px] px-20 pb-20">
         <section class="grid grid-cols-2 font-medium">
            <div class="flex flex-col items-start justify-center gap-8">
               <h2 class="text-3xl leading-relaxed">
                  Новый способ быстрого поиска мероприятий по всему миру
               </h2>
               <h1 class="whitespace-nowrap text-8xl font-bold leading-snug">Events API</h1>
               <NuxtLink
                  :to="{ hash: `#${headerNavigation.howTo.id}` }"
                  class="flex items-center gap-3 rounded-xl bg-gradient-to-b from-blue-light to-blue-dark px-5 py-3 text-white"
                  @click="useTrackInteraction('Go to contacts form')"
               >
                  Отправить запрос на подключение
                  <SvgoArrowRight
                     class="text-xl"
                     :height="20"
                     :width="20"
                  />
               </NuxtLink>
               <ul class="mt-16 flex flex-col gap-3">
                  <li
                     v-for="text in ['Для разработчиков ПО', 'Для организаторов мероприятий']"
                     :key="text"
                     class="flex items-center gap-4 text-2xl"
                  >
                     <SvgoCheckmark
                        class="rounded-full bg-gradient-to-b from-neutral-light to-neutral-dark p-1 text-2xl text-white"
                        :height="24"
                        :width="24"
                     />
                     <span>
                        {{ text }}
                     </span>
                  </li>
               </ul>
            </div>
            <NuxtImg
               src="parsing/funnel.png"
               :height="640"
               :width="640"
               alt="Funnel with with images of different activities floating around"
               format="webp"
            />
         </section>
         <section :id="headerNavigation.functionality.id">
            <h1 class="py-10 text-5xl font-bold">Что умеет Events API</h1>
            <ul class="grid grid-cols-3 justify-center gap-5 text-black">
               <li
                  v-for="{ description, logo, title } in functionalityCards"
                  :key="title"
                  class="flex flex-col items-center gap-y-4 rounded-2xl bg-gradient-to-r from-blue-pale-light to-blue-pale-main p-8"
               >
                  <div class="flex items-center gap-6">
                     <NuxtImg
                        :src="logo"
                        :height="72"
                        :width="72"
                        alt=""
                        format="webp"
                     />
                     <h2 class="col-span-3 text-xl font-semibold">{{ title }}</h2>
                  </div>
                  <p class="col-span-full text-neutral-main">
                     {{ description }}
                  </p>
               </li>
            </ul>
         </section>
         <section :id="headerNavigation.advantage.id">
            <div class="mt-32 flex items-end justify-between py-10">
               <h1 class="text-5xl font-bold">Преимущества Events API</h1>
               <NuxtLink
                  class="flex items-center gap-3"
                  to="/"
                  @click="useTrackInteraction('Learn more')"
               >
                  Узнать подробнее
                  <SvgoArrowRight
                     class="text-xl"
                     :height="20"
                     :width="20"
                  />
               </NuxtLink>
            </div>
            <div class="grid grid-cols-2 items-center">
               <NuxtImg
                  src="parsing/lightbulb.png"
                  :height="518"
                  :width="518"
                  alt="Display with a lightbulb in front"
                  format="webp"
               />
               <ul class="grid gap-5 text-neutral-main">
                  <li
                     v-for="{ description, title } in advantageCards"
                     :key="title"
                     class="rounded-2xl bg-gradient-to-l from-stone-100 px-8 py-6"
                  >
                     <h2 class="mb-6 text-3xl font-semibold">{{ title }}</h2>
                     <p>{{ description }}</p>
                  </li>
               </ul>
            </div>
         </section>
         <section :id="headerNavigation.benefits.id">
            <h1 class="mt-32 py-10 text-5xl font-bold">В чем выгода для бизнеса?</h1>
            <ul class="grid grid-cols-2 gap-5 text-neutral-main">
               <li
                  v-for="({ description, logo, title }, i) in benefitCards"
                  :key="title"
                  class="rounded-2xl bg-gradient-to-r from-indigo-50 to-slate-100 px-8 py-7"
                  :class="[
                     i === benefitCards.length - 1 && !!(benefitCards.length % 2)
                        ? 'col-span-full grid grid-cols-2 grid-rows-1 items-center gap-20'
                        : 'flex flex-col gap-y-5',
                  ]"
               >
                  <div class="flex items-center gap-5">
                     <NuxtImg
                        :src="logo"
                        :height="72"
                        :width="72"
                        alt=""
                        format="webp"
                     />
                     <h2 class="col-span-3 basis-2/3 text-3xl font-semibold leading-normal">
                        {{ title }}
                     </h2>
                  </div>
                  <p>
                     {{ description }}
                  </p>
               </li>
            </ul>
         </section>
         <section :id="headerNavigation.howTo.id">
            <div class="mt-32 flex gap-9 py-10">
               <h1 class="basis-[120%] text-5xl font-bold leading-tight">
                  Как начать использовать Events API?
               </h1>
               <p class="pt-3 text-neutral-main">
                  Пока что доступ к нашему API предоставляется только по заявкам от первых
                  пользователей. В будущем планируем расширить эту возможность для всех желающих.
                  Готовы начать?
               </p>
            </div>
            <div class="mx-auto flex w-1/2 flex-col items-stretch gap-6">
               <ul
                  class="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-stone-100 to-neutral-100 px-9 py-8 text-neutral-main"
               >
                  <li
                     v-for="(label, i) in [
                        'Нажмите на любую из кнопок на странице или заполните форму.',
                        'Отправьте заявку.',
                        'Ожидайте сообщения от нас на указанный вами Telegram и e‑mail.',
                        'Готово, вы прекрасны!',
                     ]"
                     :key="label"
                     class="flex items-center gap-6"
                  >
                     <div
                        class="flex aspect-square h-9 items-center justify-center rounded-full bg-gradient-to-b from-neutral-light to-neutral-dark font-bold text-white"
                     >
                        {{ i + 1 }}
                     </div>
                     <span>
                        {{ label }}
                     </span>
                  </li>
               </ul>
               <form class="grid grid-rows-3 gap-3">
                  <input
                     v-for="(input, i) in inputs"
                     :key="input.placeholder"
                     v-model="inputs[i].model.value"
                     :placeholder="input.placeholder"
                     :type="input.type"
                     class="rounded-lg border border-neutral-pale px-5 py-3"
                  />
                  <button
                     class="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-blue-light to-blue-dark px-5 py-3 text-white"
                     :disabled="!telegram && !email"
                     @click.prevent="sendContacts"
                  >
                     Отправить запрос на подключение
                     <SvgoArrowRight
                        class="text-xl"
                        :height="20"
                        :width="20"
                     />
                  </button>
               </form>
            </div>
         </section>
      </main>
      <div class="bottom-0 border-b-2 border-neutral-pale" />
      <footer
         class="mx-auto grid max-w-[1440px] grid-cols-[1fr_max-content_1fr] items-center px-20 py-8 text-neutral-main"
      >
         <div>
            <ParsingLogo class="text-xl" />
            <span class="flex items-center gap-1">
               Powered by
               <SvgoLogo
                  class="text-3xl"
                  :height="30"
                  :width="69"
                  filled
               />
            </span>
         </div>
         <nav class="min-w-fit">
            <ul
               class="grid grid-cols-[max-content_max-content] content-stretch items-stretch justify-stretch gap-x-32 gap-y-4"
            >
               <li
                  v-for="{ href, label } in footerNavigation"
                  :key="label"
               >
                  <NuxtLink :to="href">{{ label }}</NuxtLink>
               </li>
            </ul>
         </nav>
         <ul class="ml-auto grid h-6 w-fit grid-flow-col gap-5 text-neutral-dark">
            <li
               v-for="{ href, icon, label } in socials"
               :key="icon.name"
               class="text-2xl"
            >
               <NuxtLink
                  :to="href"
                  :aria-label="label"
               >
                  <component
                     :is="icon"
                     :height="24"
                     :width="24"
                  />
               </NuxtLink>
            </li>
         </ul>
      </footer>
   </div>
</template>
<style module lang="postcss"></style>
