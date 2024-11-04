import * as enJSON from './locale/en.json';
import * as frJSON from './locale/fr.json';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {...enJSON},
    fr: {...frJSON},
  },
});
