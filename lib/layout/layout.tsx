import React, { ReactNodeArray, ReactElement } from 'react';
import "./layout.scss";
import classes from "../helpers/classes";
import Aside from "./aside";

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;
    // let hasAside = false;
    // if ((props.children as ReactNodeArray).length) {
    //     (props.children as ReactNodeArray).map(node => {
    //         console.log(node)
    //         if ((node as ReactElement).type === Aside) {
    //             console.log("true")
    //             hasAside = true
    //         }
    //     })
    // }

    const hasAside =
        (props.children as ReactNodeArray).length &&
        (props.children as Array<ReactElement>).reduce(
            (result, node) => result || node.type === Aside,
            false
        )


    return (
        <div className={!hasAside ? classes('gui-layout', className) : classes('gui-layout', className, 'hasAside')} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;
