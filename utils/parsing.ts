import InstagramLogoSVG from '@/assets/icons/instagram.svg?componentext';
import TwitterLogoSVG from '@/assets/icons/twitter.svg?componentext';
import LinkedInLogoSVG from '@/assets/icons/linked-in.svg?componentext';
import FacebookLogoSVG from '@/assets/icons/facebook.svg?componentext';
import TelegramLogoSVG from '@/assets/icons/telegram.svg?componentext';

export const headerNavigation = {
   functionality: { label: 'Функции', id: 'functionality' },
   advantage: { label: 'Преимущества', id: 'advantage' },
   benefits: { label: 'Польза для бизнеса', id: 'benefits' },
   howTo: { label: 'Как подключить', id: 'how-to' },
} satisfies Record<string, { label: string; id: Lowercase<string> }>;

type Card = { title: string; description: string };
type LogoCard = Card & { logo: string };
export const functionalityCards: LogoCard[] = [
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

export const advantageCards: Card[] = [
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

export const benefitCards: LogoCard[] = [
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

export const footerNavigation = [
   {
      label: 'Об Афише',
      href: '/',
   },
   {
      label: 'Поддержать проект',
      href: '/',
   },
   {
      label: 'Поддержка',
      href: '/',
   },
   {
      label: 'Политика конфиденциальности',
      href: '/',
   },
] satisfies { label: string; href: string }[];

export const socials = [
   { icon: InstagramLogoSVG, href: '/#ig', label: 'Instagram' },
   { icon: TwitterLogoSVG, href: '/#tw', label: 'Twitter' },
   { icon: LinkedInLogoSVG, href: '/#li', label: 'LinkedIn' },
   { icon: FacebookLogoSVG, href: '/#fb', label: 'Facebook' },
   { icon: TelegramLogoSVG, href: '/#tg', label: 'Instagram' },
] satisfies { icon: any; href: string; label: string }[];
