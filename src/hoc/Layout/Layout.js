import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <header>
                    <h1>Фискальный регистратор</h1>
                    <div className={classes.NavigationItems}>
                        <ul>
                            <li className={classes.NavigationItem}>
                                <NavLink to="/checks" activeClassName={classes.active}>Чеки</NavLink>
                            </li>
                            <li className={classes.NavigationItem}>
                                <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
                <div className={classes.Content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;