import { combineReducers } from 'redux';
import gameReducer from "./gameReducer";
import playerTurnReducer from './playerTurnReducer';

export default combineReducers({
    game: gameReducer,
    playerTurn: playerTurnReducer,
})