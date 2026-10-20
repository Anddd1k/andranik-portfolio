import type { Locale } from "@/lib/site";
import { releases } from "@/lib/releases";
type Localized = Record<Locale, string>;
export type Project = {
  slug: string;
  name: string;
  kind: "android" | "demo";
  category: Localized;
  description: Localized;
  stack: string[];
  status: Localized;
  images: { src: string; alt: Localized; width: number; height: number }[];
  demo?: string;
  github?: string;
  store?: string;
  summary: Localized;
  challenge: Localized;
  solution: Localized;
  features: Record<Locale, string[]>;
  limitations: Localized;
  source?: string;
};
export const projects: Project[] = [
  {
    slug: "smokereset",
    name: "SmokeReset",
    kind: "android",
    category: { ru: "Android-приложение", en: "Android application" },
    description: {
      ru: "Трекер привычки с таймером, персональной статистикой и планом постепенного сокращения курения.",
      en: "A habit tracker with a timer, personal statistics and a gradual reduction plan.",
    },
    stack: ["React", "Android", "Local storage"],
    status: {
      ru: "Опубликовано в Google Play",
      en: "Published on Google Play",
    },
    images: [
      {
        src: "/projects/smokereset/screen-3.png",
        alt: {
          ru: "Главный экран SmokeReset из публичной карточки Google Play",
          en: "SmokeReset home screen from its public Google Play listing",
        },
        width: 355,
        height: 745,
      },
      {
        src: "/projects/smokereset/screen-2.png",
        alt: {
          ru: "Экран знакомства с постепенным планом сокращения",
          en: "An introduction to the gradual reduction plan",
        },
        width: 346,
        height: 742,
      },
      {
        src: "/projects/smokereset/screen-1.png",
        alt: {
          ru: "Стартовый экран опубликованного приложения",
          en: "The published application’s welcome screen",
        },
        width: 351,
        height: 746,
      },
    ],
    store: releases.smokereset.play,
    summary: {
      ru: "Собственное Android-приложение, опубликованное разработчиком And1k. Помогает фиксировать привычку и отслеживать личный прогресс. Подтверждённые функции и статус основаны на данных владельца и публичной карточке Google Play.",
      en: "An independent Android application published by And1k. It records a habit and makes personal progress visible. The listed features and publication status are based on owner confirmation and the public Google Play listing.",
    },
    challenge: {
      ru: "Сделать учёт привычки понятным: собрать время, статистику, расчёт экономии и персональный план в одном приложении с офлайн-доступом.",
      en: "Make habit tracking clear by bringing time, statistics, estimated savings and a personal plan together in an offline-capable application.",
    },
    solution: {
      ru: "React-интерфейс в Android-приложении и локальное хранение данных в опубликованной версии. Публичные скриншоты ниже взяты из Google Play, без воспроизведения интерфейса по памяти.",
      en: "A React interface in an Android application, with local data storage in the published version. The screenshots below come directly from Google Play rather than recreated mockups.",
    },
    features: {
      ru: [
        "Таймер времени без курения.",
        "Персональная статистика прогресса.",
        "Расчёт сэкономленных денег и количества сигарет, от которых удалось отказаться.",
        "Персонализированный план постепенного сокращения.",
        "Локальное хранение данных и офлайн-работа.",
      ],
      en: [
        "Smoke-free timer.",
        "Personal progress statistics.",
        "Estimated money saved and cigarettes avoided.",
        "A personalised gradual reduction plan.",
        "Local data storage and offline use.",
      ],
    },
    limitations: {
      ru: "Приложение представлено как трекер привычки; медицинская эффективность не заявляется. Новые обновления могут проходить отдельную проверку Google Play. Точный Android-стек и дополнительные библиотеки не подтверждены; RU/EN, виджеты и дыхательные упражнения не заявлены как выпущенные функции.",
      en: "Presented as a habit tracker, without claims of medical effectiveness. New updates may undergo separate Google Play review. The precise Android stack and additional libraries remain unverified; RU/EN, widgets and breathing exercises are not presented as released features.",
    },
    source: "https://play.google.com/store/apps/details?id=com.smokereset.app",
  },
  {
    slug: "brew-co",
    name: "Brew & Co.",
    kind: "demo",
    category: { ru: "Сайт кофейни", en: "Coffee shop website" },
    description: {
      ru: "Тёплый редакционный дизайн, меню с фильтрами и работающая корзина с демонстрационным оформлением заказа.",
      en: "A warm editorial website with a filterable menu and a working bag with a demo checkout.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    status: { ru: "Концепт / демопроект", en: "Concept / Demo Project" },
    images: [
      {
        src: "/projects/brew-co-release.png",
        alt: {
          ru: "Реальный скриншот работающего сайта Brew & Co.",
          en: "A real screenshot of the working Brew & Co. website",
        },
        width: 1425,
        height: 990,
      },
    ],
    demo: releases.brew.demo,
    github: releases.brew.github,
    summary: {
      ru: "Полностью работающий сайт вымышленной кофейни. Самостоятельный демонстрационный проект: от визуальной системы и собственной графики до интерактивной корзины. Не является коммерческим заказом.",
      en: "A complete working website for a fictional café. An independent demo project, from the visual system and original graphics to the interactive bag. It is not a client commission.",
    },
    challenge: {
      ru: "Создать выразительный сайт, где посетитель может изучить меню, выбрать напитки и пройти понятный сценарий заказа без подключения оплаты.",
      en: "Create an expressive website where visitors can explore a menu, choose drinks and complete a clear order journey without payment integration.",
    },
    solution: {
      ru: "Компонентный Next.js-интерфейс с типизированным каталогом и расчётом суммы в целых центах. Собственные SVG-иллюстрации, фильтры по категориям и доступная модальная корзина с управлением количеством.",
      en: "A component-based Next.js interface with a typed catalogue and integer-cent price calculations. Original SVG illustrations, category filters and an accessible modal bag with quantity controls.",
    },
    features: {
      ru: [
        "Шесть позиций меню и фильтрация по категориям.",
        "Добавление, удаление и изменение количества товаров.",
        "Мгновенный расчёт итоговой суммы.",
        "Демонстрационное оформление без платежей и отправки данных.",
        "Адаптивная навигация и поддержка reduced motion.",
      ],
      en: [
        "Six menu items with category filtering.",
        "Add, remove and adjust item quantities.",
        "Immediate total calculations.",
        "A demo checkout without payments or data transmission.",
        "Responsive navigation and reduced-motion support.",
      ],
    },
    limitations: {
      ru: "Все товары, цены и контакты иллюстративные. Заказы не отправляются, платежи не выполняются. Корзина хранится в памяти текущей вкладки и очищается после перезагрузки. Публичные демо и репозиторий появятся после согласованной публикации.",
      en: "All products, prices and contacts are illustrative. No orders are sent and no payments occur. The bag lives in tab memory and resets on reload. Public demo and repository links will appear after approved publication.",
    },
  },
  {
    slug: "flowdesk",
    name: "FlowDesk",
    kind: "demo",
    category: { ru: "Бизнес-платформа", en: "Business dashboard" },
    description: {
      ru: "Рабочее пространство с Kanban, задачами, демонстрационными клиентами, графиками и локальным сохранением данных.",
      en: "A workspace with Kanban, task management, fictional clients, charts and local persistence.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Lucide"],
    status: { ru: "Концепт / демопроект", en: "Concept / Demo Project" },
    images: [
      {
        src: "/projects/flowdesk-release.png",
        alt: {
          ru: "Реальный скриншот работающего dashboard FlowDesk",
          en: "A real screenshot of the working FlowDesk dashboard",
        },
        width: 1425,
        height: 990,
      },
    ],
    demo: releases.flowdesk.demo,
    github: releases.flowdesk.github,
    summary: {
      ru: "Интерактивная платформа для демонстрации управления задачами и клиентами. Проект разработан самостоятельно, с функциональными сценариями и отдельной светлой/тёмной визуальной системой. Это демопроект, не реальная CRM компании.",
      en: "An interactive platform demonstrating task and client management. Independently developed with working user journeys and a distinct light/dark visual system. This is a demo, not a company’s real CRM.",
    },
    challenge: {
      ru: "Дать пользователю целостный рабочий процесс: увидеть сводку, создать задачу, изменить её статус, найти клиента и сохранить изменения между посещениями.",
      en: "Provide a complete workflow: inspect an overview, create a task, change its status, find a client and preserve changes between visits.",
    },
    solution: {
      ru: "Типизированная модель задач, Kanban с перетаскиванием и альтернативным выбором статуса, формы редактирования и localStorage с валидацией сохранённых данных. Recharts загружается отдельно от основного интерфейса.",
      en: "A typed task model, Kanban with drag-and-drop and an alternative status selector, editing forms and validated localStorage persistence. Recharts loads separately from the main interface.",
    },
    features: {
      ru: [
        "Создание, редактирование и подтверждаемое удаление задач.",
        "Четыре статуса Kanban, поиск и фильтр приоритетов.",
        "Демонстрационный каталог клиентов и задачи по клиенту.",
        "Графики с явно обозначенными вымышленными данными.",
        "Светлая и тёмная темы, сохранение задач и темы в браузере.",
      ],
      en: [
        "Create, edit and confirm task deletion.",
        "Four Kanban statuses, search and priority filters.",
        "A fictional client directory with per-client tasks.",
        "Charts with explicitly labelled fictional data.",
        "Light and dark themes, with browser-persisted tasks and theme.",
      ],
    },
    limitations: {
      ru: "Выручка, тренды и клиенты вымышлены; показатели задач вычисляются из текущей локальной доски. Данные не синхронизируются с сервером. При недоступном localStorage интерфейс сообщает об ограничении сохранения. Внешние аккаунты и CRM не подключены.",
      en: "Revenue, trends and clients are fictional; task metrics are calculated from the current local board. Data does not sync to a server. If localStorage is unavailable, the interface reports the persistence limitation. No external accounts or CRMs are connected.",
    },
  },
];
