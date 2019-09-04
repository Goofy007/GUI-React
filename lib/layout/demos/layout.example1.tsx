import React from 'react';
import Layout from "../layout";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import "../layout.example.scss";

export default function () {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300, width: 500 }} className="hi">
                    <Header className="x">Head</Header>
                    <Content className="y">Content</Content>
                    <Footer className="x">Footer</Footer>
                </Layout>
            </div>
        </div>
    )
}
