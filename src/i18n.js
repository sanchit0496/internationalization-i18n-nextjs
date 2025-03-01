import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n.
    use(LanguageDetector)
    .use(initReactI18next)
    .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello",
          description:{
            line1: 'eng',
            line2: 'desc {{test}}'
          } 
        }
      },
      fr: {
        translation: {
          greeting: "Hola",
          description:{
            line1: 'fr',
            line2: 'desc {{test}}'
          } 
        }
      },
      hi: {
        translation: {
          greeting: "Nmste",
          description:{
            line1: 'hi',
            line2: 'desc {{test}}'
          } ,
        }
      }
    }
  });


  export default i18n