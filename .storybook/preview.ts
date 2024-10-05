import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import nextIntl from './next-intl';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../src/app/globals.css';

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            title: 'Locale',
            items: [
                { value: 'en', right: 'LTR', title: 'English' },
                { value: 'ar', right: 'RTL', title: 'Arabic' },
            ],
        },
    },
};

const preview: Preview = {
    initialGlobals: {
        locale: 'en',
        locales: {
            en: { icon: '🇺🇸', title: 'English', right: 'EN' },
            ar: { icon: '🇪🇬', title: 'العربية', right: 'AR' },
        },
    },
    parameters: {
        nextIntl,
        nextjs: {
            appDirectory: true,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        rtlDirection: {
            autoLocales: ['en', 'ar'],
            reload: true,
        },
    },
};

export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
    }),
];

export default preview;
