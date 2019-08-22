import React from 'react';
import classes from "../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={classes('gui-layout-header', className)} {...rest}>
            Header
        </div>
    )
}

export default Header;
