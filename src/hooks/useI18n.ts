import { useLocale, useTranslations } from 'next-intl';

import { appConfig } from '@/config/appConfig';

type UseI18nReturn = {
    t: (key: string, values?: Record<string, string | number | null | undefined>) => string;
    locale: string;
    locales: string[];
    isArabic: boolean;
    isRTL: boolean;
    direction: 'ltr' | 'rtl';
};

export default function useI18n(): UseI18nReturn {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const t = useTranslations();
    const locale = useLocale();
    const { locales } = appConfig.i18n;
    const isArabic = locale === 'ar';
    const isRTL = isArabic;
    const direction = isRTL ? 'rtl' : 'ltr';

    // ----------------------------------------------------------------------------------------------------
    // MARK: Return
    // ----------------------------------------------------------------------------------------------------
    return {
        t,
        locale,
        locales,
        isArabic,
        isRTL,
        direction,
    };
}
