
/* SIZES */
export const SIZES_ICON = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl'] as const
export type SizeIconType = typeof SIZES_ICON[number]
export const SIZES : Readonly<Record<SizeIconType, string>> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'base': 'w-5 h-5',
  'lg' : 'w-6 h-6',
  'xl': 'w-7 h-7',
  '2xl': 'w-8 h-8',
  '3xl': 'w-9 h-9',
  '4xl': 'w-10 h-10',
  '5xl': 'w-11 h-11',
  '6xl': 'w-12 h-12',
  '7xl': 'w-14 h-14',
  '8xl': 'w-16 h-16'
}

/* ICONS */
// to be able to change the size of the Icon, add  viewBox="0 0 25 25" to svg component
export const ICONS = [
  'star',
  'search',
  'search-bold',
  'star-full',
  'user',
  'loader',
  'calendar',
  'chevron-down',
  'check',
  'check-bold',
  'check-circle',
  'check-square',
] as const
export type IconType = typeof ICONS[number]

/* COLORS */
export const COLORS_ICON = [
  'fill-gray-200',
  'fill-gray-300',
  'fill-gray-400',
  'fill-cyan-400',
  'fill-red-500',
  'fill-amber-500',
  'fill-blue-500',
  'fill-black',
  'fill-white'
] as const
export type ColorIconType = typeof COLORS_ICON[number]
