import React from "react"
// import ReactDOM from 'react-dom'
import "./sheet.scss"

// interface Props { }


interface Row {
    row: number;
    col: number;
    text: string;
}


interface Items {
    title: string;
    header: Array<Row>;
    rows: Array<Array<Row>>;
    selectedRowIndex: number;
    selectedColIndex: number;
}



interface Props {
    data: Items;
    onChangeData: any;
}

const Sheet: React.FunctionComponent<Props> = (props) => {
    

    const onChangeTd: React.FocusEventHandler = (e) => {
        console.log("ee", e.target.innerHTML)
        let RowIndex = Number(e.currentTarget.getAttribute('data-row'));
        let ColIndex = Number(e.currentTarget.getAttribute('data-col'));
        let newData = props.data;
        newData.rows[RowIndex - 1][ColIndex].text = e.target.innerHTML;
        props.onChangeData(newData)
    }

    const onfocus: React.FocusEventHandler = (e) => {
        console.log("props",props.data)
        console.log("pos", e.currentTarget.getAttribute('data-row'))
        let selectedRowIndex = e.currentTarget.getAttribute('data-row');
        let selectedColIndex = e.currentTarget.getAttribute('data-col');
        let newData = props.data;
        newData.selectedColIndex = Number(selectedColIndex);
        newData.selectedRowIndex = Number(selectedRowIndex);
        props.onChangeData(
            newData
        )
    }

    return (
        <div>
            <table id="sheet">
                <thead>
                    <tr>
                        {
                            props.data.header.map((cell, index) => {
                                return (
                                    <th key={index}>
                                        {cell.text}
                                    </th>
                                )
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.rows.map((tr, index) => {
                            return (
                                <tr key={'2' + index}>
                                    {
                                        tr.map((cell) => {
                                            return (
                                                <td
                                                    key={cell.text}
                                                    contentEditable={true}
                                                    onBlur={onChangeTd}
                                                    onFocus={onfocus}
                                                    data-row={cell.row}
                                                    data-col={cell.col}
                                                >{cell.text}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Sheet


