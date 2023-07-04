import React, { useEffect, useState } from "react"
import clsx from "clsx"

/* SIZES */
export const SIZES_CHECKBOX = ['sm', 'base', 'lg'] as const
type SizeCheckBoxType = typeof SIZES_CHECKBOX[number]

const SIZE_BOX : Readonly<Record<SizeCheckBoxType, string>> = {
  'sm' : 'w-4 h-4',
  'base' : 'w-5 h-5',
  'lg' : 'w-6 h-6'
}

const SIZE_SVG : Readonly<Record<SizeCheckBoxType, string>> = {
  'sm' : 'w-2 h-2',
  'base' : 'w-3 h-3',
  'lg': 'w-4 h-4'
}

/* COLORS */
export const COLORS_CHECKBOX = [
  'cyan',
  'red',
  'gray',
] as const

type ColorCheckBoxType = typeof COLORS_CHECKBOX[number]

const COLORS_BOX : Readonly<Record<ColorCheckBoxType, string>> = {
  'cyan' : 'border-cyan-400',
  'red' : 'border-red-400',
  'gray' : 'border-gray-400'
}

const COLORS_SVG : Readonly<Record<ColorCheckBoxType, string>> = {
  'cyan' : 'fill-cyan-400',
  'red' : 'fill-red-400',
  'gray' : 'fill-gray-400'
}

/* PROPS */
type CheckboxProps = Partial<Pick<HTMLInputElement, 'disabled' | 'checked' >> & {
  label?: string
  color?: ColorCheckBoxType
  size?: SizeCheckBoxType
  onChange?: (checked: boolean) => void
  className?: string
}

export const Checkbox = ({ checked = false, size = 'base', color = 'cyan', label, onChange, className, disabled, ...other }: CheckboxProps) => {
  const [myChecked, setMyChecked] = useState<boolean>(checked)

  useEffect( () => setMyChecked(checked), [checked] )
  useEffect( () => onChange && onChange(myChecked), [myChecked, onChange])

  return (
    <div className={clsx(className, 'flex items-center')}>
        <input {...other}
                 disabled={disabled}
                 type="checkbox"
                 onChange={() => setMyChecked(!myChecked)}
                 checked={myChecked}
                 className={clsx(SIZE_BOX[size],"opacity-0 absolute")} />
          <div className={clsx( disabled ? 'border-gray-200' :  COLORS_BOX[color], SIZE_BOX[size],"bg-white border-2 rounded flex flex-shrink-0 justify-center items-center")}>
            <svg className={clsx(SIZE_SVG[size] , "fill-current hidden  pointer-events-none")} version="1.1"
                 viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" className={clsx(disabled ? 'fill-gray-200' : COLORS_SVG[color])} fill-rule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label className={clsx(disabled ? 'text-gray-200' : 'text-gray-900' ,"ml-2 text-sm font-medium")}>{label}</label>
    </div>
  )
}

