import numberReducer from './number'
import userReducer from './user'

export default function allReducers(state, action) {
    let newstate = numberReducer(state, action)
    return userReducer(newstate, action)
}