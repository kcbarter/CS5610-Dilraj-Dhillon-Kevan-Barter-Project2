import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import gameReducer from "./gameReducer";

export default combineReducers({
    game: gameReducer,
    counter: counterReducer,
})