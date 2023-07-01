import React, { useEffect, useState } from "react"
import clsx from "clsx"

type CheckboxProps = Partial<Pick<HTMLInputElement, 'disabled' | 'checked' >> & {
  label?: string
  onChange?: (checked: boolean) => void
  className?: string
}

const Checkbox = ({ checked = false, label, onChange, className, ...other }: CheckboxProps) => {
  const [myChecked, setMyChecked] = useState<boolean>(checked)

  useEffect( () => setMyChecked(checked), [checked] )
  useEffect( () => onChange && onChange(myChecked), [myChecked, onChange])

  return (
    <div className={clsx(className, 'flex items-center')}>
        <input {...other}
                 type="checkbox"
                 id="A3-yes"
                 onChange={() => setMyChecked(!myChecked)}
                 checked={myChecked}
                 value="yes"
                 className="opacity-0 absolute h-4 w-4" />
          <div className="bg-white border rounded border-cyan-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-cyan-400">
            <svg className="fill-current hidden w-3 h-3 text-cyan-400 pointer-events-none" version="1.1"
                 viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(-9 -11)" fill="#22d3ee" fill-rule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label htmlFor="A3-yes" className="text-sm font-medium text-gray-900">{label}</label>
    </div>
  )
}

export default Checkbox