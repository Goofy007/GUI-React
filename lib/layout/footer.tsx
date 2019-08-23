import React from 'react';
import classes from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={classes('gui-layout-footer', className)} {...rest}>
           {props.children}
        </div>
    )
}

export default Footer;
