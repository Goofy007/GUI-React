import React from 'react';
import Icon from './icon';


const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}

const IconExample: React.FunctionComponent = () => {
    return (
        <Icon name="wechat" onClick={fn} />
    )
}

export default IconExample;
