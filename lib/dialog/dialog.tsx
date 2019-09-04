import React, { ReactElement, ReactFragment, ReactNode } from "react"
import ReactDOM from 'react-dom'
import "./dialog.scss"
import Icon from "../icons/icon"

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
                {
                    props.buttons && props.buttons.length > 0&& 
                    <footer className="gui-dialog-footer">
                        {props.buttons && props.buttons.map((button, index) => {
                            return React.cloneElement(button, { key: index })
                        })}
                    </footer>
                }

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
    document.body.appendChild(div);
    ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        yes && yes()
    };
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        no && no()
    };
    const component =
        <Dialog
            visible={true}
            onClose={() => { onNo }}
            buttons={
                [
                    <button onClick={onYes}>yes</button>,
                    <button onClick={onNo}>no</button>
                ]
            }
        >
            {content}
        </Dialog>
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
}

const modal = (content: ReactNode | ReactFragment) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component =
        <Dialog
            visible={true}
            onClose={onClose}
        >

            {content}
        </Dialog>
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return onClose;
}

export { alert, confirm, modal }


export default Dialog