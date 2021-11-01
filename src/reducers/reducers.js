import { combineReducers } from 'redux';
import enemyBoardReducer from './enemyBoardReducer';
import friendlyBoardReducer from './friendlyBoardReducer';
import gameReducer from "./gameReducer";
import playerTurnReducer from './playerTurnReducer';

export default combineReducers({
    game: gameReducer,
    friendlyBoard: friendlyBoardReducer,
    enemyBoard: enemyBoardReducer,
    playerTurn: playerTurnReducer,
})