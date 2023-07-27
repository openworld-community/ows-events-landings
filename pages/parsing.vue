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

type Card = { title: string; description: string };
type LogoCard = Card & { logo: string };

const functionalityCards: LogoCard[] = [
   {
      title: 'Фильтровать по категориям',
      description:
         'Спорт, искусство, музыка, конференции — находите мероприятия, которые подходят запросам ваших пользователей.',
      logo: 'parsing/options.png',
   },
   {
      title: 'Предоставлять подробную информацию',
      description:
         'Дата, время, место проведения, цена и все, что может быть полезно для вас и ваших пользователей. ',
      logo: 'parsing/info.png',
   },
   {
      title: 'Бесшовно интегрироваться',
      description:
         'Легкое внедрение API в ваши приложения и сервисы, обеспечивающее плавное взаимодействие и безопасность данных.',
      logo: 'parsing/settings.png',
   },
];
const advantageCards: Card[] = [
   {
      title: 'Простота использования',
      description:
         'Удобный и интуитивно понятный интерфейс — вы легко и быстро найдете релевантные мероприятия.',
   },
   {
      title: 'Быстрота и надежность',
      description:
         'Сервис работает бесперебойно, а результаты поиска можно получить в пару кликов.',
   },
   {
      title: 'Гибкость и масштабируемость',
      description:
         'API, который легко настраивается под ваши потребности и может быть расширен с ростом вашего проекта.',
   },
   {
      title: 'Глобальная доступность',
      description:
         'Наш API позволяет переводить мероприятия на множество языков — они доступны людям со всего мира, независимо от языковых предпочтений и культурных особенностей.',
   },
];
const benefitCards: LogoCard[] = [
   {
      title: 'Станьте организатором мероприятий',
      description:
         'И получайте комиссию за продажи продажи билетов или привлечение участников через ваши площадки. Events API предоставляет информацию о мероприятиях, а ваш сайт или приложение может стать платформой для их продвижения.',
      logo: 'parsing/calendar.png',
   },
   {
      title: 'Забудьте о поиске вручную',
      description:
         'Вкладывать время и деньги лучше в развитие бизнеса, а не в рутинные задачи. Events API предоставит быстрый доступ к актуальной мероприятиям и избавит вас от необходимости искать события вручную.',
      logo: 'parsing/processing.png',
   },
   {
      title: 'Улучшите конверсию и пользовательский опыт',
      description:
         'Используйте собранную информацию о предпочтениях пользователей и персонализируйте рекомендации. Это сократит путь до целевого действия, увеличит конверсию в покупку или регистрацию и сделает ваш сервис более привлекательным для рекламодателей и партнеров.',
      logo: 'parsing/doc.png',
   },
   {
      title: 'Собирайте аналитику и монетизируйте ее',
      description:
         'Проводите аналитические исследования, опираясь на данные Events API, и расширьте спектр услуг для организаторов: от продажи отчетов по оптимизации процессов до разработки data-driven маркетинговых стратегий. ',
      logo: 'parsing/chart.png',
   },
   {
      title: 'Разрабатывайте собственные решения',
      description:
         'Events API можно использовать для создания дополнительных инструментов и функций: системы управления билетами, платформы для продажи онлайн или управления мероприятиями.',
      logo: 'parsing/crowdfunding.png',
   },
];
</script>
<template>
   <div class="m-auto max-w-[1440px] px-20 text-neutral-dark">
      <header
         class="relative flex items-center justify-around gap-3 py-3 text-neutral-main after:absolute after:bottom-0 after:w-screen after:border-b-2 after:border-neutral-pale"
      >
         <LogoSVG
            class="mr-6 h-4 shrink-0 text-black"
            :height="16"
         />
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
            class="flex items-center gap-3"
         >
            <TelegramSVG
               class="h-6 text-blue-dark"
               :height="24"
            />
            Написать в Telegram
         </NuxtLink>
      </header>
      <main>
         <section class="grid grid-cols-2 font-medium">
            <div class="flex flex-col items-start justify-center gap-8">
               <h2 class="text-3xl leading-relaxed">
                  Новый способ быстрого поиска мероприятий по всему миру
               </h2>
               <h1 class="whitespace-nowrap text-8xl font-bold leading-snug">Events API</h1>
               <button
                  class="flex items-center gap-3 rounded-xl bg-gradient-to-b from-blue-light to-blue-dark px-5 py-3 text-white"
               >
                  Отправить запрос на подключение<ArrowRightSVG
                     class="h-5"
                     :height="20"
                  />
               </button>
               <ul class="mt-16 flex flex-col gap-3">
                  <li
                     v-for="text in ['Для разработчиков ПО', 'Для организаторов мероприятий']"
                     :key="text"
                     class="flex items-center gap-4 text-2xl"
                  >
                     <CheckmarkSVG
                        class="h-9 rounded-full bg-gradient-to-b from-neutral-light to-neutral-dark p-1.5 text-white"
                        :height="24"
                     />
                     <span>
                        {{ text }}
                     </span>
                  </li>
               </ul>
            </div>
            <NuxtImg
               src="parsing/funnel.png"
               :height="729"
            />
         </section>
         <section :id="navigation.functionality.id">
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
                     />
                     <h2 class="col-span-3 text-xl font-semibold">{{ title }}</h2>
                  </div>
                  <p class="col-span-full">
                     {{ description }}
                  </p>
               </li>
            </ul>
         </section>
         <section :id="navigation.advantage.id">
            <div class="mt-32 flex items-end justify-between py-10">
               <h1 class="text-5xl font-bold">Преимущества Events API</h1>
               <NuxtLink
                  class="flex gap-3"
                  to="/"
               >
                  Узнать подробнее
                  <ArrowRightSVG
                     class="h-5"
                     :height="20"
                  />
               </NuxtLink>
            </div>
            <div class="grid grid-cols-2 items-center">
               <NuxtImg
                  src="parsing/lightbulb.png"
                  :height="518"
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
         <section :id="navigation.benefits.id">
            <h1 class="mt-32 py-10 text-5xl font-bold">В чем выгода для бизнеса?</h1>
            <ul class="grid grid-cols-2 gap-5">
               <li
                  v-for="({ description, logo, title }, i) in benefitCards"
                  :key="title"
                  class="rounded-2xl bg-gradient-to-r from-indigo-50 to-slate-100 px-8 py-7 text-neutral-main"
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
                     />
                     <h2 class="col-span-3 basis-2/3 text-3xl font-semibold leading-normal">
                        {{ title }}
                     </h2>
                  </div>
                  <p class="">
                     {{ description }}
                  </p>
               </li>
            </ul>
         </section>
         <section
            v-if="false"
            :id="navigation.example.id"
         >
            <h1 class="py-10 text-5xl font-bold">{{ `` }}</h1>
         </section>
         <section :id="navigation.howTo.id">
            <div class="mt-32 flex gap-9 py-10">
               <h1 class="basis-[120%] text-5xl font-bold leading-tight">
                  Как начать использовать Events API?
               </h1>
               <p class="pt-3">
                  Пока что доступ к нашему API предоставляется только по заявкам от первых
                  пользователей. В будущем планируем расширить эту возможность для всех желающих.
                  Готовы начать?
               </p>
            </div>
            <div class="mx-auto flex w-1/2 flex-col items-stretch gap-6">
               <ul
                  class="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-stone-100 to-neutral-100 px-9 py-8"
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
                     v-for="{ placeholder } in [
                        { placeholder: 'Ник в Telegram*' },
                        { placeholder: 'E-mail*' },
                     ]"
                     :key="placeholder"
                     :placeholder="placeholder"
                     class="rounded-lg border border-neutral-pale px-5 py-3"
                  />
                  <button
                     class="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-blue-light to-blue-dark px-5 py-3 text-white"
                  >
                     Отправить запрос на подключение
                     <ArrowRightSVG
                        class="h-5"
                        :height="20"
                     />
                  </button>
               </form>
            </div>
         </section>
      </main>
      <footer>1</footer>
   </div>
</template>
