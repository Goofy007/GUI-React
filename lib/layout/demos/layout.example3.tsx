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
            <h2>第三个例子</h2>
            <Layout style={{ height: 300, width: 500 }} className="hi">
                <Aside className="z">aside</Aside>
                <Layout>
                    <Header className="x">Head</Header>
                    <Content className="y">Content</Content>
                    <Footer className="x">Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
