import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'

export default function () {
    const [x, setX] = useState(false)
    const openModal = () => {
        const close = modal(
            <h1>Hello
                 <button onClick={() => {close()}}>close</button>
            </h1>
        )
    }
    return (
        <div>
            <div>
                <h1>example1</h1>
                <button onClick={() => setX(!x)}>click</button>
                <Dialog
                    visible={x}
                    buttons={
                        [
                            <button onClick={() => { setX(false) }}>1</button>,
                            <button>2</button>
                        ]
                    }
                    onClose={() => { setX(false) }}
                >
                    <div>content</div>
                </Dialog>
            </div>
            <div>
                <h1>example2</h1>
                <button onClick={() => alert("hello")}>alert</button>
                <button onClick={
                    () => {
                        confirm('confirm 1',
                            () => { console.log("yes") },
                            () => { console.log("no") })
                    }
                }
                >
                    confirm
                </button>
            </div>
            <div>
                <h1>example 3</h1>
                <button onClick={openModal}>modal</button>
            </div>

        </div>
    )
}