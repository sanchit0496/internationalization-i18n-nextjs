import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n.
    use(LanguageDetector)
    .use(initReactI18next)
    .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello"
        }
      },
      fr: {
        translation: {
          greeting: "Hola"
        }
      },
      hi: {
        translation: {
          greeting: "Nmste"
        }
      }
    }
  });


  export default i18n