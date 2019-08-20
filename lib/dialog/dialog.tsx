import React, { ReactElement } from "react"
import ReactDOM from 'react-dom'
import "./dialog.scss"
import Icon from "../icon"

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>,
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

    const x = props.visible ?
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
                    {props.buttons && props.buttons.map((button, index) => {
                        return React.cloneElement(button, { key: index })
                    })}
                </footer>
            </div>
        </React.Fragment>
        : null
    return (
        ReactDOM.createPortal(x, document.body)
    )
}

Dialog.defaultProps = {
    closeOnClickMask: false
}

const alert = (content: string) => {
    const component =
        <Dialog
            visible={true}
            onClose={() => {
                ReactDOM.render(React.cloneElement(component, { visible: false }), div)
                ReactDOM.unmountComponentAtNode(div)
                div.remove()
            }}>
            {content}
        </Dialog>
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div)
}

export { alert }


export default Dialog