import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    const result = [1,3,4,5,2,0].
    filter((el, i) => el === newState[i]._id)
    //Проверяем: если элемент массива result совпадает с id у которого index в массиве
    // такой же как и в result. Если какой-либо элемент не совпадёт,
    // итоговый массив будет меньше
    expect(result.length).toBe(newState.length)
    expect(newState[4].name).toBe('Коля')
    expect(newState[0].age).toBe(66)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState[1].name).toBe('Коля')
    expect(newState[5].age).toBe(66)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState.length).toBe(4)

})
