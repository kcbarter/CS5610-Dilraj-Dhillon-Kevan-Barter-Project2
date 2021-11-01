import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import gameReducer from "./gameReducer";
import playerTurnReducer from './playerTurnReducer';

export default combineReducers({
    game: gameReducer,
    counter: counterReducer,
    playerTurn: playerTurnReducer,
})