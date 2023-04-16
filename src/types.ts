import {
  FlipProp,
  IconProp,
  PullProp,
  RotateProp,
  SizeProp,
  Transform
} from "@fortawesome/fontawesome-svg-core"

export type FaLayersProps = {
  fixedWidth?: boolean
}

export type FaLayersTextProps = {
  value: string | number
  transform?: Transform
  counter?: boolean
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
}

export type FaIconProps = FaLayersProps & {
  icon: IconProp
  mask?: IconProp
  size?: SizeProp
  transform?: Transform | string
  symbol?: boolean | string
  title?: string
  spin?: boolean
  pulse?: boolean
  border?: boolean
  listItem?: boolean
  inverse?: boolean
  flip?: FlipProp | boolean
  swapOpacity?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  flash?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
  rotation?: RotateProp
  pull?: PullProp
}
