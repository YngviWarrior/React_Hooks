import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    //setCount como parametro, faz com que o componente filho não sejá recriado, já que a função é sempre a mesma.
    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta) // Para isso, faça a função dentro do setCount, sendo possível ler e alterar o valor count.
    }, [setCount])

    // function inc (delta) {
    //     setCount(count + delta)
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
