/*export type InitialStateType = {
    isLoading: boolean
}*/
export type InitialStateType = typeof initState // автоматическая типизация

const initState = {  // показывать isLoading
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_IS_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}
export type ActionType = ReturnType<typeof loadingAC> // автоматическая типизация
export const loadingAC = (isLoading: boolean) => ({type: "TOGGLE_IS_LOADING", isLoading} as const) // fix any