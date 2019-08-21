import React from 'react';
import "./layout.scss";
import classes from "../helpers/classes"

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={classes('gui-layout', className)} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;
