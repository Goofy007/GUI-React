import React, { useState } from 'react'
import Dialog, { alert } from './dialog'

export default function () {
    const [x, setX] = useState(false)
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
                <button onClick={() => alert("hello")}>click</button>
            </div>

        </div>
    )
}