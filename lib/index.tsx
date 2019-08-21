import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Icon from './icon.example';
import Dialog from "./dialog/dialog.example";
import Layout from "./layout/layout.example"
import "./index.scss"

// const fn: React.MouseEventHandler = (e) => {
//     console.log(e)
// }

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div>GUI</div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={Icon}></Route>
                    <Route path="/dialog" component={Dialog}></Route>
                    <Route path="/layout" component={Layout}></Route>
                </main>
            </div>
        </div>
    </Router>
    , document.querySelector('#root'));

