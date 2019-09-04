import React from 'react';
import IconExample from "./icon.example";
import { Demo } from "../demo";


const code = require('!!raw-loader!./icon.example.tsx');


export const IconDemo =  () => {
    return (
        <Demo code={code.default}>
            <IconExample />
        </Demo>
    )
}