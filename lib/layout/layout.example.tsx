import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

export default function () {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300 }} className="hi">
                    <Header>Head</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h2>第二个例子</h2>
                <Layout style={{ height: 300 }} className="hi">
                    <Header>header</Header>
                    <Layout>
                        <Aside>aside</Aside>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h2>第三个例子</h2>
                <Layout style={{ height: 300 }} className="hi">
                    <Aside>aside</Aside>
                    <Layout>
                        <Header>Head</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}
