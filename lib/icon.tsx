import React from 'react'
import '../icons/wechat.svg'
import "./icon.scss"
import classes from "./helpers/classes"

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, ...restProps} = props
    return (
        <svg className={classes('gui-icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon;