/* SIZES */
export const SIZES_CHECKBOX = ['sm', 'base', 'lg'] as const
export type SizeCheckBoxType = (typeof SIZES_CHECKBOX)[number]

export const SIZE_BOX: Readonly<Record<SizeCheckBoxType, string>> = {
  sm: 'w-4 h-4',
  base: 'w-5 h-5',
  lg: 'w-6 h-6',
}

export const SIZE_SVG: Readonly<Record<SizeCheckBoxType, string>> = {
  sm: 'w-2 h-2',
  base: 'w-3 h-3',
  lg: 'w-4 h-4',
}

/* COLORS */
export const COLORS_CHECKBOX = ['cyan', 'red', 'gray'] as const

export type ColorCheckBoxType = (typeof COLORS_CHECKBOX)[number]

export const COLORS_BOX: Readonly<Record<ColorCheckBoxType, string>> = {
  cyan: 'border-cyan-400',
  red: 'border-red-400',
  gray: 'border-gray-400',
}

export const COLORS_SVG: Readonly<Record<ColorCheckBoxType, string>> = {
  cyan: 'fill-cyan-400',
  red: 'fill-red-400',
  gray: 'fill-gray-400',
}
