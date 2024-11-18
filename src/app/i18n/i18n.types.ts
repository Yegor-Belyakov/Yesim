import type ru from './locales/ru.json';

export type AppLocale = 'ru' | 'en';
export type I18nNamespaces = keyof typeof ru;
