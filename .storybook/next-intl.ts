import en from '../src/locales/ar.json';
import ar from '../src/locales/en.json';

const messagesByLocale: Record<string, any> = { en, ar };

const nextIntl = {
    defaultLocale: 'en',
    messagesByLocale,
};

export default nextIntl;
