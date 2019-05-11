import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
import Dialog from "./dialog/dialog.example"
import "./index.scss"

const fn: React.MouseEventHandler = (e) => {
    console.log(e)
}

ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={fn} />
        <Dialog />
    </div>
    , document.querySelector('#root'));

