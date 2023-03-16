import React, { createContext } from 'react';

export const contentLanguages = {
  navList: {
    navAbout: {
      en: 'About',
      ua: 'Про мене'
    },
    navSkills: {
      en: 'Skills',
      ua: 'Навички'
    },
    navPortfolio: {
      en: 'Portfolio',
      ua: 'Портфоліо'
    }
  },
  topUnit: {
    welcome: {
      en: 'Welcome!',
      ua: 'Вітаю!',
    },
    name: {
      en: 'My name is Dmytro Voronov',
      ua: 'Мене звати Дмитро Воронов',
    },
    occupation: {
      en: 'I`m a Frontend React Developer',
      ua: 'Я Frontend React розробник',
    },
    resume: {
      en: 'DOWNLOAD RESUME',
      ua: 'ЗАВАНТАЖИТИ РЕЗЮМЕ',
    },
  },
  mediumUnit: {
    title: {
      en: 'My skills',
      ua: 'Мої навички',
    },
    programmingLanguages: {
      en: 'Programming languages',
      ua: 'Мови програмування',
    },
    stack: {
      en: 'Stack',
      ua: 'Стек технологій',
    },
    librariesUI: {
      en: 'UI libraries',
      ua: 'UI бібліотеки',
    },
    languages: {
      en: 'Language',
      ua: 'Мови',
    },
  },
  lowerUnit: {
    title: {
      en: 'Portfolio',
      ua: 'Портфоліо',
    },
    onlineStore: {
      title: {
        en: 'Online store',
        ua: 'Онлайн магазин',
      },
      repository: {
        en: 'Repository',
        ua: 'Репозиторій',
      },
      visit: {
        en: 'Visit website',
        ua: 'Вебсайт',
      },
      description: {
        en: 'Online store with authorization on Firebase, work with LocalStorage and dynamic product pages.',
        ua: 'Онлайн магазин із авторизацією на Firebase, що працює із LocalStorage та динамічними сторінками',
      },
    },
    wordle: {
      title: {
        en: 'Game "Wordle Ukrainian"',
        ua: 'Гра "Wordle Українською"',
      },
      repository: {
        en: 'Repository',
        ua: 'Репозиторій',
      },
      visit: {
        en: 'Visit website',
        ua: 'Вебсайт',
      },
      description: {
        en: 'Wordle game - you need to solve the hidden word in six attempts',
        ua: 'Гра "Wordle", в якій необхідно вгадати слово за шість спроб. Вгадані літери підсвічуються відповідним кольором.',
      },
    },
    signUp: {
      title: {
        en: 'Sign Up App',
        ua: 'Додаток - меню реєстрації',
      },
      repository: {
        en: 'Repository',
        ua: 'Репозиторій',
      },
      visit: {
        en: 'Visit website',
        ua: 'Вебсайт',
      },
      description: {
        en: 'Application that implements the stages of authorization through Shopify and Google',
        ua: 'Застосунок, що включає в себе етапи авторизації через Shopify та Google та вибір інших способів авторизації',
      },
    },
    jobs: {
      title: {
        en: 'Job search website',
        ua: 'Сайт з пошуку роботи',
      },
      repository: {
        en: 'Repository',
        ua: 'Репозиторій',
      },
      visit: {
        en: 'Visit website',
        ua: 'Вебсайт',
      },
      description: {
        en: 'Job search site with dynamic pagination and location display customization with Geoapify API',
        ua: 'Сайт з пошуку роботи із динамічною пагінацією та кастомізованим відображенням локації через Geoapify API',
      },
    },
  }

};

export const LanguageContext = createContext(contentLanguages);
