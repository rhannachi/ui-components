import { AriaRole, useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import clsx from 'clsx'
import { SizeIconType, ColorIconType, IconType, SIZES } from './types'

/* PROPS */
type IconProps = {
  icon: IconType
  size?: SizeIconType
  color?: ColorIconType
  className?: string
  role?: AriaRole
}

const importIcon = async (icon: IconType): Promise<string | { src: string }> => {
  return (await import(`./svgs/${icon}.svg`)).default
}

export const Icon = ({
  icon,
  size = 'base',
  color = 'fill-black',
  className = '',
  role,
}: IconProps) => {
  const [iconSrc, setIconSrc] = useState<string>('')

  useEffect(() => {
    importIcon(icon)
      .then((iconResponse) => {
        if (typeof iconResponse === 'string') {
          setIconSrc(iconResponse)
        } else {
          setIconSrc(iconResponse.src)
        }
      })
      .catch(() => setIconSrc(''))
  }, [icon])

  return (
    <ReactSVG
      role={role}
      className={clsx(color, SIZES[size], className, 'inline')}
      wrapper='svg'
      // loading={() => <span>is loading ...</span>}
      src={iconSrc}
    />
  )
}
