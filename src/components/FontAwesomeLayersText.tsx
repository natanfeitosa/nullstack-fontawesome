import { NullstackFunctionalComponent } from "nullstack";
import { config, parse as faParse, text } from "@fortawesome/fontawesome-svg-core";
import { FaLayersTextProps } from "../types";
import { convert } from "../utils";

function FontAwesomeLayersText({ counter, position, transform, value, ...attrs }: FaLayersTextProps & JSX.AllElements['div']) {
  const { familyPrefix } = config
  const params = { classes: [''] }

  if(counter) params.classes.push(`${familyPrefix}-layers-counter`)
  if(position) params.classes.push(`${familyPrefix}-layers-${position}`)
  if(transform) {
    //@ts-ignore
    params['transform'] = typeof transform === 'string' ? faParse.transform(transform) : transform
  }

  const abstractElement = text(value.toString(), params).abstract[0]

  if(counter) {
    abstractElement.attributes.class = abstractElement.attributes.class.replace('fa-layers-text', '')
  }

  return convert(abstractElement, attrs)
}

export default FontAwesomeLayersText as NullstackFunctionalComponent<FaLayersTextProps>