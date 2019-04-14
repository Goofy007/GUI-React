import React from 'react'
import '../icons/wechat.svg'
import "./icon.scss"

interface IconProps {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="gui-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon;