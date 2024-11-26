import createMiddleware from 'next-intl/middleware';

import { appConfig } from '@/config/appConfig';

export default createMiddleware({
    locales: appConfig.i18n.locales,
    defaultLocale: appConfig.i18n.defaultLocale,
    localeDetection: true,
    localePrefix: 'always',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)', '/(ar|en)/:path*'],
};
