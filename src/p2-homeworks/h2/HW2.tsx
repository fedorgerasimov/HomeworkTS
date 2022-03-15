import React, {useState} from 'react'
import Affairs from './Affairs'


// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // need to fix any - тип приоритетов
export type AffairType = {  //any // need to fix any
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType  // у фильтра все типы Affair приоритета + all

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions чистые функции
export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => { // need to fix any фильтрация массива
    if (filter === 'all') {     // need to fix
        return affairs
    } else if (filter === 'low') {
        return affairs.filter((element) => element.priority === 'low')
    } else if (filter === 'middle') {
        return affairs.filter((element) => element.priority === 'middle')
    } else {
        return affairs.filter((element) => element.priority === 'high')
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter((element) => element._id !== _id)    // Возвращаем массив дел, но без нужного. Если пришла 1, возвращаем массив дел без _id: 1
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any - указываем тип массива. Храним defaultAffairs array
    const [filter, setFilter] = useState<FilterType>('all')   // храним фильтр, вначале all. Когда кликаем по кнопке, меняем на 'low' | 'middle' | 'high'

    const filteredAffairs = filterAffairs(affairs, filter)  //Создали временную переменную. Нужна для хранения отфильтрованного массива (фильтр был выбран). Затем передаём в следующую компоненту
    //пропускаем affairs через чистую функцию filterAffairs, чтобы она отфильтровала не все элементы, а только нужные. Не сетаем, так как потеряем весь массив
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any  default array меняем когда нам нужно что-либо удалить

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2