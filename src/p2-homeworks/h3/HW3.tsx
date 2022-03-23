import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any // массив имён

    const addUserCallback = (name: string) => { // need to fix any (id: number)?
        let newUser = {id: v1(), name: name}
        let newUsers =[newUser, ...users]
        setUsers(newUsers)                  // need to fix создал объект и добавил в этот массив ещё одно имя. Будут храниться имена в виде объекта UserType
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
