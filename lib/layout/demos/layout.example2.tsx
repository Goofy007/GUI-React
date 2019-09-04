import React from 'react';
import Layout from "../layout";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import Aside from "../aside";
import "../layout.example.scss";

export default function () {
    return (
        <div>
             <div>
                <h2>第二个例子</h2>
                <Layout style={{ height: 300, width: 500 }} className="hi">
                    <Header className="x">header</Header>
                    <Layout>
                        <Aside className="z">aside</Aside>
                        <Content>Content</Content>
                    </Layout>
                    <Footer className="x">Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
