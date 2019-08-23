import React from 'react';
import Icon from './icon';

const code = require('!!raw-loader!./icon.example.tsx');



const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}

const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name="wechat" onClick={fn} />
            <pre>
                {code.default}
            </pre>
        </div>
    )
}

export default IconExample;
