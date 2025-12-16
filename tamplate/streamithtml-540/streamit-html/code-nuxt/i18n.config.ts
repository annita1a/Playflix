
import en from './app/lang/en.json';
import de from './app/lang/de.json';
import fr from './app/lang/fr.json';
import gr from './app/lang/gr.json';
import ar from './app/lang/ar.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: en,
    de: de,
    fr: fr,
    gr: gr,
    ar: ar,
  }
}))
