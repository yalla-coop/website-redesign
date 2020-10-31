export const screenWidths = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '500px',
  mobileExtraLarge: '680px',
  tablet: '950px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px',
}

export const breakpoints = {
  mobileSmall: `@media (min-width: ${screenWidths.mobileSmall})`,
  mobileMedium: `@media (min-width: ${screenWidths.mobileMedium})`,
  mobileLarge: `@media (min-width: ${screenWidths.mobileLarge})`,
  mobileExtraLarge: `@media (min-width: ${screenWidths.mobileExtraLarge})`,
  tablet: `@media (min-width: ${screenWidths.tablet})`,
  laptop: `@media (min-width: ${screenWidths.laptop})`,
  laptopLarge: `@media (min-width: ${screenWidths.laptopLarge})`,
  desktop: `@media (min-width: ${screenWidths.desktop})`,
}
