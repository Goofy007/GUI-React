import React, { ReactElement } from "react"
import "./dialog.scss"
import Icon from "../icon"

interface Props {
    visible: boolean;
    buttons: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnClickMask?: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    };

    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    return (
        props.visible ?
            <React.Fragment>
                <div className="gui-dialog-mask" onClick={onClickMask}></div>
                <div className="gui-dialog">
                    <div className="gui-dialog-close" onClick={onClickClose}>
                        <Icon name="close" />
                    </div>
                    <header className="gui-dialog-header">tishi</header>
                    <main
                        className="gui-dialog-main"
                    >{props.children}</main>
                    <footer className="gui-dialog-footer">
                        {props.buttons.map((button, index) => {
                            React.cloneElement(button, { key: index })
                        })}
                    </footer>
                </div>
            </React.Fragment>
            : null
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}


export default Dialog