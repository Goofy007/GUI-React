import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function() {
    return (
       <div>
           <div>第一个例子</div>
           <Layout style={{height: 500}} className="hi">
               <Header>Head</Header>
               <Content>Content</Content>
               <Footer>Footer</Footer>
           </Layout>
       </div>
    )
}
