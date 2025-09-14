import { event } from '@/lib/gtag';

// Custom event tracking functions for Duke Cycling specific events
export const trackRideSubmission = (rideType: string) => {
  event('ride_submission', {
    event_category: 'engagement',
    event_label: rideType,
  });
};

export const trackRouteDownload = (routeName: string) => {
  event('route_download', {
    event_category: 'engagement',
    event_label: routeName,
  });
};

export const trackContactForm = (formType: string) => {
  event('contact_form_submit', {
    event_category: 'engagement',
    event_label: formType,
  });
};

export const trackNavigationClick = (destination: string) => {
  event('navigation_click', {
    event_category: 'navigation',
    event_label: destination,
  });
};
