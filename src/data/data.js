import whatsapp from '/public/whatsapp.svg';
import telegram from '/public/telegram.svg';
import emailIcon from '/public/email.svg';
import brand from "../Assets/Images/brand.webp";
import art from "../Assets/Images/art.webp";
import media from "../Assets/Images/media.webp";
import web from "../Assets/Images/web.webp";


export const contacts = [
  {
    title: "Telegram",
    icon: telegram,
    link: "https://t.me/pictdesignru",
  },
  {
    title: "WhatsApp",
    icon: whatsapp,

    link: "https://wa.me/79302244143",
  },
  {
    title: "E-mail",
    icon: emailIcon,
    link: "mailto:ask@pictdesign.ru",
  },
];

export const inputs = [
  {
    id: "client",
    name: "client",
    type: "text",
    placeholder: 'Имя',
    required: true,
    minLength: 2,
    mask: "[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]",
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    placeholder: "+7 (912) 345-67-89",
    mask: "+{7}(000)000-00-00",
    minLength: 11,
    required: true,
  }
];

export const facts = [
  {
    number: "100+",
    fact: {
      ru: "реализованных проектов",
      en: "completed projects",
    },
  },
  {
    number: "20",
    fact: {
      ru: "лет в сфере графического дизайна",
      en: "years in graphic design",
    },
  },
  {
    number: "50+",
    fact: {
      ru: "довольных заказчиков",
      en: "satisfied customers",
    },
  },
];

export const works = [
  {
    title: {
      ru: "Фирменный стиль",
      en: "Branding",
    },
    link: "/branding",
    image: brand,
    color: "#000",
    text: [
      {
        ru: "Фирменный стиль компании — важная составляющая её успеха. Это не просто набор визуальных элементов, это отражение миссии, ценностей и идентичности бренда.  Есть несколько составляющих визуального стиля, которые мы можем предложить для создания целостного образа вашей компании",
      },
    ],
    services: [
      'Логотип',
      'Фирменный стиль',
      'Брендбук',
      'Кейвижуал мероприятия',
      'Мерч',
      'Упаковка'
    ]
  },
  {
    title: {
      ru: "Полиграфия",
      en: "Polygraphy",
    },
    link: "/polygraphy",
    color: "#000",
    image: art,
    text: [
      {
        ru: "Несмотря на диджитализацию современного мира необходимость в полиграфической продукции остается до сих пор. Наши дизайнеры имеют профильное полиграфическое образование и обладают редкими для современных реалий плюсами — любят бумагу, буквы, внимательны в верстке многостраничных изданий, могут подготовить макет для печати",
      }
    ],
    services: [
      'Буклет',
      'Каталог',
      'Годовой отчет',
      'Лифлет',
      'Листовка',
      'Широкоформатная продукция'
    ]
  },
  {
    title: {
      ru: "Презентация",
      en: "Presentation",
    },
    link: "/presentation",
    image: media,
    color: "#fff",
    text: [
      {
        ru: "Основное предназначение презентации — структурировать информацию, дополнить рассказ визуальными образами, статистикой и тезисами. Это продающий материал, расскажет о компании, покажет ее конкурентные преимущества, объяснит суть бизнеса. Для таких документов разрабатывается профессиональный дизайн, каждый элемент которого работает на создание у клиента или партнера положительного образа фирмы.",
      },
    ],
    services: [
      'Электронная презентация',
      'Презентация с возможностью редактирования',
      'Печатная версия презентации',
    ]
  },
  {
    title: {
      ru: "Веб дизайн",
      en: "Web design",
    },
    link: "/web",
    image: web,
    color: "#000",
    text: [
      {
        ru: "Качественный дизайн, понятный интерфейс, удобство пользования, корректное отображение на каждом устройстве – все это слагаемые успеха любой компании, факторы, от которых напрямую зависит посещаемость сайта. Мы можем сделать как дизайн сайта так и сверстать его ",
      },
    ],
    services: [
      'Сайт-визитка',
      'Лендинг',
      'Многостраничный сайт',
      'Интернет-магазин',
      'Прототипирование',
      'Верстка'
    ]
  },
];

