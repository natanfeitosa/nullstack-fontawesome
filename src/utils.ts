import Nullstack, { NullstackNode } from 'nullstack'

import classnames from 'classnames'

import { FaIconProps } from './types'
import { AbstractElement } from '@fortawesome/fontawesome-svg-core'

function classToObject(classes: string) {
  return classes.split(/\s+/).reduce((output, className) => {
    output[className] = true
    return output
  }, {} as Record<string, boolean>)
}

function styleToObject(style: string) {
  if((typeof style) != 'string') return style
  return style
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s)
    .reduce((output, pair) => {
      const idx = pair.indexOf(':')

      output[pair.slice(0, idx)] = pair.slice(idx + 1).trim()
      return output
    }, {} as Record<string, string>)
}

function objectToStyle(style: Record<string, any>) {
  return Object.entries(style)
    .map(([prop, value]) => `${prop}:${value};`)
    .join('')
}

export function convert(abstractElement: AbstractElement, attrs?: Record<string, any>): NullstackNode {
  // If the abstract element is a string, we'll just return a string render function
  if (typeof abstractElement === 'string') {
    return abstractElement
  }

  // Converting abstract element children into Vue VNodes
  const children: NullstackNode[] | undefined = (abstractElement.children || []).map(child => convert(child))

  // Converting abstract element attributes into valid Vue format
  const mixins = Object.keys(abstractElement.attributes || {}).reduce(
    (acc, key) => {
      const value = abstractElement.attributes[key]

      switch (key) {
        case 'class':
          acc.class = classToObject(value)
          break
        case 'style':
          acc.style = styleToObject(value)
          break
        default:
          ;(acc.attrs as Record<string, any>)[key as string] = value
      }

      return acc
    },
    {
      attrs: {},
      class: {},
      style: {},
    },
  )

  return Nullstack.element(
    abstractElement.tag,
    Object.assign(
      {},
      attrs,
      mixins.attrs,
      {
        style: objectToStyle(Object.assign({}, mixins.style, styleToObject(attrs?.style ?? {}))),
        class: classnames(mixins.class, attrs?.class),
      }
    ),
    children,
  )
}

function getAndRemove(obj: Record<string, any>) {
  return (prop: string) => {
    if (prop in obj) {
      const val = obj[prop]
      delete obj[prop]
      return val
    }
  }
}

export function getIconClasses(props: Omit<FaIconProps, 'icon' | 'mask' | 'transform' | 'title' | 'symbol'>) {
  const propsHelper = getAndRemove(props)

  const flip = propsHelper('flip') as FaIconProps['flip']

  const classes = {
    'fa-spin': propsHelper('spin'),
    'fa-pulse': propsHelper('pulse'),
    'fa-fw': propsHelper('fixedWidth'),
    'fa-border': propsHelper('border'),
    'fa-li': propsHelper('listItem'),
    'fa-inverse': propsHelper('inverse'),
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both',
    'fa-swap-opacity': propsHelper('swapOpacity'),
    'fa-bounce': propsHelper('bounce'),
    'fa-shake': propsHelper('shake'),
    'fa-beat': propsHelper('beat'),
    'fa-fade': propsHelper('fade'),
    'fa-beat-fade': propsHelper('beatFade'),
    'fa-flash': propsHelper('flash'),
    'fa-spin-pulse': propsHelper('spinPulse'),
    'fa-spin-reverse': propsHelper('spinReverse'),
  }

  const str2obj = (...propsList: string[]) =>
    propsList.reduce((acc, cur) => {
      const _val = propsHelper(cur)
      if (_val) {
        switch (cur) {
          case 'rotation':
            return Object.assign(cur, { [`fa-rotate-${_val}`]: true })
          case 'pull':
            return Object.assign(cur, { [`fa-pull-${_val}`]: true })
          default:
            return Object.assign(cur, { [`fa-${_val}`]: true })
        }
      }
      return acc
    }, {})

  Object.assign(classes, str2obj('size', 'rotation', 'pull'))

  return Object.entries(classes)
    .filter(([, k]) => k)
    .map(([c]) => c)
}
