import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import Sheet from "./sheet"

// interface Props { }


export default function () {
    const [data, setData] = useState(
        {
            title: 'New Sheet',
            header: [ // 对应首行 A, B, C...
                { row: 0, col: 0, text: '' },
                { row: 0, col: 1, text: 'A' },
                { row: 0, col: 2, text: 'B' },
                { row: 0, col: 3, text: 'C' },

            ],
            rows: [
                [
                    { row: 1, col: 0, text: '1' },
                    { row: 1, col: 1, text: '' },
                    { row: 1, col: 2, text: '' },
                    { row: 1, col: 3, text: '' },

                ],
                [
                    { row: 2, col: 0, text: '2' },
                    { row: 2, col: 1, text: '' },
                    { row: 2, col: 2, text: '' },
                    { row: 2, col: 3, text: '' },

                ]
            ],
            selectedRowIndex: 0, // 当前活动单元格的row
            selectedColIndex: 0 // 当前活动单元格的col
        }
    )

    return (
        <div>
            <div>
                <Sheet 
                    data = {data}
                    onChangeData = {setData}
                />
            </div>
        </div>
    )
}


