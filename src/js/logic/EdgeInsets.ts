export type Inset = number

export interface EdgeInsets {
  left?: Inset
  top?: Inset
  right?: Inset
  bottom?: Inset
}

export function all(inset: Inset) {
  return {
    left: inset,
    top: inset,
    right: inset,
    bottom: inset,
  }
}

export function toCSSString(insets: EdgeInsets) {
  return (
    [insets.left, insets.top, insets.right, insets.bottom].join("px ") + "px"
  )
}
