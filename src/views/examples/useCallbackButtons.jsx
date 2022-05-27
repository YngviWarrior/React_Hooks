import React from 'react'

const UseCallbackButtons = (props) => {
    console.log('render...')
    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

//React.memo() percebe que é a mesma função que foi passada para ele, retornando o componente cacheado.
export default React.memo(UseCallbackButtons)