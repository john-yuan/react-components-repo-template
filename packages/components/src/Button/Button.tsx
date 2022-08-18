import React from 'react'
import { withClassNamePrefix } from '../utils/withClassNamePrefix';

const ns = withClassNamePrefix('btn')

export interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.memo<Props>(({
  children,
  onClick
}) => {
  return (
    <button className={ns()} onClick={onClick}>{children}</button>
  )
})

export default Button
