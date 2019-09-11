import React from 'react';
import SheetExample from "./sheet.example";
import { Demo } from "../demo";


const code = require('!!raw-loader!./sheet.example.tsx');


export const SheetDemo =  () => {
    return (
        <Demo code={code.default}>
            <SheetExample />
        </Demo>
    )
}