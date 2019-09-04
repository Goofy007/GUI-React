import React from 'react';
import LayoutExample1 from "./layout.example1";
import LayoutExample2 from "./layout.example2";
import LayoutExample3 from "./layout.example3";
import { Demo } from "../../demo";


const code1 = require('!!raw-loader!./layout.example1.tsx');
const code2 = require('!!raw-loader!./layout.example2.tsx');
const code3 = require('!!raw-loader!./layout.example3.tsx');


export const LayoutDemo =  () => {
    return (
        <div>
            <Demo code={code1.default}>
                <LayoutExample1 />
            </Demo>
            <Demo code={code2.default}>
                <LayoutExample2 />
            </Demo>
            <Demo code={code3.default}>
                <LayoutExample3 />
            </Demo>
        </div>
        
    )
}