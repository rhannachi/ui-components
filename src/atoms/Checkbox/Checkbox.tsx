import React, { AriaRole, useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  COLORS_SVG,
  COLORS_BOX,
  SIZE_BOX,
  SIZE_SVG,
  ColorCheckBoxType,
  SizeCheckBoxType,
} from './types'

type CheckboxProps = Partial<Pick<HTMLInputElement, 'disabled' | 'checked'>> & {
  label?: string
  color?: ColorCheckBoxType
  size?: SizeCheckBoxType
  onChange?: (checked: boolean) => void
  className?: string
  role?: AriaRole
}

export const Checkbox = ({
  checked = false,
  size = 'base',
  color = 'cyan',
  label,
  onChange,
  className,
  disabled,
  ...other
}: CheckboxProps) => {
  const [myChecked, setMyChecked] = useState<boolean>(checked)

  useEffect(() => {
    setMyChecked(checked)
  }, [checked])
  useEffect(() => {
    if (onChange) {
      onChange(myChecked)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myChecked])

  return (
    <div className={clsx(className, 'flex items-center')}>
      <input
        disabled={disabled}
        type='checkbox'
        onChange={() => setMyChecked(!myChecked)}
        checked={myChecked}
        className={clsx(SIZE_BOX[size], 'opacity-0 absolute')}
        {...other}
      />
      <div
        className={clsx(
          disabled ? 'border-gray-200' : COLORS_BOX[color],
          SIZE_BOX[size],
          'bg-white border-2 rounded flex flex-shrink-0 justify-center items-center',
        )}
      >
        <svg
          className={clsx(SIZE_SVG[size], 'fill-current hidden  pointer-events-none')}
          version='1.1'
          viewBox='0 0 17 12'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fill='none' fillRule='evenodd'>
            <g
              transform='translate(-9 -11)'
              className={clsx(disabled ? 'fill-gray-200' : COLORS_SVG[color])}
              fillRule='nonzero'
            >
              <path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
            </g>
          </g>
        </svg>
      </div>
      <label
        className={clsx(disabled ? 'text-gray-200' : 'text-gray-900', 'ml-2 text-sm font-medium')}
      >
        {label}
      </label>
    </div>
  )
}
