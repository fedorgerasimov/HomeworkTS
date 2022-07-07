import {UserType} from "../HW8";

type SortUpAT = { type: 'sort', payload: 'up' }
type SortDownAT = { type: 'sort', payload: 'down' }
type CheckAT = { type: 'check', payload: number }
type ActionType = SortUpAT | SortDownAT | CheckAT
/*type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}*/

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) =>
                    a.name < b.name ? -1 : 1
                /* { if (a.name > b.name) return 1
                 else if(a.name < b.name) return -1
                 else return 0}*/ // лучше использовать этот вариант с проверкой на 0, когда имена могут совпадать
            )
            return action.payload === 'up' ? newState : newState.reverse()
            //уже приходит отсортированный массив и проверяем
            // если в функции передаём up возвращаем массив, если другое - reverse()
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}