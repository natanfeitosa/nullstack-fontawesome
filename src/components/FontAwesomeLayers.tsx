import Nullstack, { NullstackFunctionalComponent, NullstackNode } from "nullstack";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FaLayersProps } from "../types";
import classNames from "classnames";

function FontAewsomeLayers({ fixedWidth, children, ...attrs }: FaLayersProps & JSX.AllElements['div'] & { children: NullstackNode }) {
  const { familyPrefix } = config
  let classes = `${familyPrefix}-layers`

  if(fixedWidth) {
    classes += ` ${familyPrefix}-fw`
  }

  if(attrs.class) {
    delete attrs.class
    classes = classNames(classes, attrs.class)
  }

  return <div class={classes} { ...attrs }>{ children }</div>
}

export default FontAewsomeLayers as NullstackFunctionalComponent<FaLayersProps>