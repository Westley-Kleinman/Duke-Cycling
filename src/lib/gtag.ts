export const GA_TRACKING_ID = 'G-9XCECK2SGS';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  {
    event_category,
    event_label,
    value,
  }: {
    event_category?: string;
    event_label?: string;
    value?: number;
  } = {}
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category,
      event_label,
      value,
    });
  }
};
