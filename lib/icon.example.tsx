import React from 'react';
import Icon from './icon';


const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}

const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name="wechat" onClick={fn} />
        </div>
    )
}

export default IconExample;
