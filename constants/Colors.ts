/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Icons = () => {
  bookmark:  require('../assets/svg/icons/bookmark.png')
  eye:  require('../assets/svg/icons/eye.png')
  eye_hide:  require('../assets/svg/icons/eye-hide.png')
  home:  require('../assets/svg/icons/home.png')
  left_arrow:  require('@/assets/svg/icons/left-arrow.png')
  logout:  require('../assets/svg/icons/bookmark.png')
  menu:  require('../assets/svg/icons/menu.png')
  play:  require('../assets/svg/icons/plus.png')
  profile:  require('../assets/svg/icons/profile.png')
  right_arrow:  require('../assets/svg/icons/right-arrow.png')
  search:  require('../assets/svg/icons/search.png')
  upload:  require('../assets/svg/icons/upload.png')
}


export const images = {
  cards: require('../assets/svg/images/cards.png'),
  empty: require('../assets/svg/images/empty.png'),
  logo_small: require('../assets/svg/images/logo-small.png'),
  logo: require('../assets/svg/images/logo.png'),
  path: require('../assets/svg/images/path.png'),
  thumbnail: require('../assets/svg/images/thumbnail.png'), 
}
