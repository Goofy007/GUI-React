import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { IconDemo } from './icons/icon.demo';
import { LayoutDemo } from "./layout/demos/lauout.demo";
import Dialog from "./dialog/dialog.example";
// import LayoutExample from "./layout/layout.example"
import Layout from "./layout/layout";
import Header from "./layout/header";
import Content from "./layout/content";
import Footer from "./layout/footer";
import Aside from "./layout/aside";
import { SheetDemo } from "./sheet/sheet.demo";
import "./index.scss";
const logo = require("./logo.png");

// const fn: React.MouseEventHandler = (e) => {
//     console.log(e)
// }

ReactDOM.render(
    <Router>
        <Layout className="site-examples">
            <Header className="site-header">
                <div className="site-logo">
                    <img width="64" height="64" src={logo} alt="" />
                    <span>GUI</span>
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
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
                        <li>
                            <Link to="/sheet">电子表格</Link>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/dialog" component={Dialog}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                    <Route path="/sheet" component={SheetDemo}></Route>
                </Content>
            </Layout>
            <Footer className="site-footer">
                @copy: Goofy
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));

