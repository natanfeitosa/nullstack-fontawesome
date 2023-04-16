import { NullstackFunctionalComponent, NullstackNode } from 'nullstack'

import { icon as faIcon, parse as faParse, IconLookup, IconName, IconProp } from '@fortawesome/fontawesome-svg-core'

import { FaIconProps } from '../types'
import { convert, getIconClasses } from '../utils'

function normalizeIconProp(icon: IconProp): IconName | IconLookup | void {
  if (!icon) {
    return
  }

  if (faParse.icon) {
    return faParse.icon(icon as unknown as string)
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (icon && typeof icon === 'object' && icon.prefix && icon.iconName) {
    return icon
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }
}

function FontAwesomeIcon({
  icon,
  mask,
  transform,
  symbol,
  title,
  ...props
}: FaIconProps & JSX.AllElements['svg']): NullstackNode {
  const normalizedIcon = normalizeIconProp(icon)
  const params: Record<string, any> = { classes: getIconClasses(props as FaIconProps) }

  if (mask) Object.assign(params, { mask: normalizeIconProp(mask) })
  if (transform) {
    Object.assign(params, {
      transform: typeof transform === 'string' ? faParse.transform(transform) : transform,
    })
  }
  if (symbol) Object.assign(params, { symbol })
  if (title) Object.assign(params, { title })

  const renderedIcon = faIcon(normalizedIcon!, params)

  if (renderedIcon) {
    return convert(renderedIcon.abstract[0], props)
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error('Could not find one or more icon(s)', normalizedIcon, params.mask)
  }

  return false
}

export default FontAwesomeIcon as NullstackFunctionalComponent<FaIconProps>
