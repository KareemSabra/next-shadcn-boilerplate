// import assetsPaths from '@/constants/assetsPaths';

type AppConfig = {
    appInfo: {
        name: string;
        title: string;
        description: string;
        // logoUrl: string;
    };
    i18n: {
        locales: string[];
        defaultLocale: string;
        localeTimeZone: string;
    };
};

export const appConfig: AppConfig = {
    appInfo: {
        name: 'next-shadcn-ui',
        title: 'next-shadcn-ui',
        description: 'next-shadcn-ui',
        // logoUrl: assetsPaths.logos.brand,
    },
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
        localeTimeZone: 'Africa/Egypt',
    },
};
