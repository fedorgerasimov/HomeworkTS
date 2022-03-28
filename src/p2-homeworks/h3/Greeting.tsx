import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: ()=> void // need to fix any
    error: string // need to fix any
    totalUsers: number
    addUserOnKeyPress: (event:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,addUserOnKeyPress } // деструктуризация пропсов
) => {
   /* const inputClass = error ? // need to fix with (?:)*/

    return (
        <div className={s.wrapper}>
            <div>
                <input value={name}
                      onChange={setNameCallback}
                      onKeyPress={addUserOnKeyPress}/>
                <div className={s.error}>{error}</div>
            </div>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>

        </div>

    )
}


