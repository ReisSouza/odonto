export const BREAKPOINT_SMALL_PHONE = 320

export const BREAKPOINT_PHONE = 420

export const BREAKPOINT_TABLET = 768

export const BREAKPOINT_LAPTOP = 1023

export const BREAKPOINT_SMALL_DESKTOP = 1281

export const BREAKPOINT_MEDIUM_DESKTOP = 1440

export const BREAKPOINT_LARGE_DESKTOP = 1920

export const media = {
  smallPhone: `(min-width:${BREAKPOINT_SMALL_PHONE}px)`,
  phone: `(min-width:${BREAKPOINT_PHONE}px)`,
  table: `(min-width:${BREAKPOINT_TABLET}px)`,
  laptop: `(min-width:${BREAKPOINT_LAPTOP}px)`,
  smallDesktop: `(min-width:${BREAKPOINT_SMALL_DESKTOP}px)`,
  mediumDesktop: `(min-width:${BREAKPOINT_MEDIUM_DESKTOP}px)`,
  largeDesktop: `(min-width:${BREAKPOINT_LARGE_DESKTOP}px)`,
  'custom-1': '(prefers-color-scheme: custom-1)',
  'custom-2': '(prefers-color-scheme: custom-2)',
  'custom-3': '(prefers-color-scheme: custom-3)',
  'custom-4': '(prefers-color-scheme: custom-4)',
  'custom-5': '(prefers-color-scheme: custom-5)',
}
