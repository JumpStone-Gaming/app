export type AnalyticsEvent = string

export const initAnalytics = () => {}

export const debugAnalytics = () => {}

export const optOutAnalytics = () => {}

export const optInAnalytics = () => {}

export const trackEvent = (_eventName: AnalyticsEvent, ..._args: unknown[]) => {}
