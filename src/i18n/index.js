// import { I18n } from '../navigators/Drawer';
import I18n from "i18n-js";
import {getLocales} from '../__mocks__/react-native-localize'

import en from './locales/en';
import vn from './locales/vi';
import th from './locales/th';
 const locales = getLocales();

if (Array.isArray(locales) && locales[0]) {
  I18n.locale = locales[0].languageCode;
}
I18n.fallbacks = true;

I18n.translations = {
  en,
  th,
  vn
};
I18n.defaultLocale = "vn";
I18n.locale = 'vn'
export const switchLanguage = (lang, component) => {
  I18n.locale = lang;
  
};
export const transalateText = (text) => {
 return I18n.t(text)
  
};



export default I18n;
