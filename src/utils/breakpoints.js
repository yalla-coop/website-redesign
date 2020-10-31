export const screenWidths = {
  mobileSmall: '280px',
  mobileMedium: '375px',
  mobileLarge: '500px',
  tabletVertical: '680px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px',
}

export const breakpoints = {
  mobileSmall: `@media (min-width: ${screenWidths.mobileSmall})`,
  mobileMedium: `@media (min-width: ${screenWidths.mobileMedium})`,
  mobileLarge: `@media (min-width: ${screenWidths.mobileLarge})`,
  tabletVertical: `@media (min-width: ${screenWidths.tabletVertical})`,
  laptop: `@media (min-width: ${screenWidths.laptop})`,
  laptopLarge: `@media (min-width: ${screenWidths.laptopLarge})`,
  desktop: `@media (min-width: ${screenWidths.desktop})`,
}
