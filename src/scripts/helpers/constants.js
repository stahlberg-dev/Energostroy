export const BASE = import.meta.env.BASE_URL;

export const BREAKPOINTS_MAX = {
  TABLET: 1199.98,
  MOBILE: 767.98,
};

export const BREAKPOINTS_MIN = {
  TABLET: 768,
  DESKTOP: 1200,
};

export const getMediaQueries = () => ({
  desktop: window.matchMedia(`(min-width: ${BREAKPOINTS_MIN.DESKTOP}px)`),
  tablet: window.matchMedia(
    `(min-width: ${BREAKPOINTS_MIN.TABLET}px) and (max-width: ${BREAKPOINTS_MAX.TABLET}px)`
  ),
  mobile: window.matchMedia(`(max-width: ${BREAKPOINTS_MAX.MOBILE}px)`),
});
