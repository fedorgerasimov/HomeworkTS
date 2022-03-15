import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void   // ругается filter: string
    deleteAffairCallback: (_id: number) => void

}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((element: AffairType) => (
        <Affair // should work
            key={element._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={element}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')  // передал callback события
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    /*  const setLow = () => {        // заменил на общую функцию callback для button
          props.setFilter('low')
      }*/
    const filterHandler = (filter: FilterType) => {   //общая функция callback для button (3 TodoList)
        props.setFilter(filter)
    }
    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} >All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={()=>filterHandler('low') }>Low</button>
        </div>
    )
}

export default Affairs