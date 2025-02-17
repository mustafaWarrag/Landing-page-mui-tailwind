import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json"
import ar from "./locales/ar/translation.json"

i18n
    .use(Backend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
            en:{namespace:en},
            ar:{namespace:ar}
        },
        lng:"en",
        fallbackLng:"en",
        debug:true,
        interpolation:{
            esacpeValue:false
        },
        react:{
            useSuspense:false
        }
    })

export default i18n;