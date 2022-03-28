import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any хранить значение input (имя которое вводим) нужно в useState
    const [error, setError] = useState<string>('') // need to fix any сохраняется ошибка

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any если имя true, добавляем. Если false должна быть ошибка
        if (event.currentTarget.value.trim()) {
            setName(event.currentTarget.value.trim())   // Todolist 4
            setError('')   //  удаляется ошибка после ввода в input
        } else {
            setError('Name is required')
        }
    }

    const addUser = () => {   //  == button onClick
        if (name === '') {   // нельзя вызвать alert, если пустой input
            return
        } else {
            addUserCallback(name)
            setName('')
            alert(`Hello ${name}!`)
        }
    }

    const addUserOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            addUser()
        }
        /* addUserCallback(name)
         setName('')
         alert(`Hello ${name}!`)
     }*/
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserOnKeyPress={addUserOnKeyPress}
        />
    )
}

export default GreetingContainer
