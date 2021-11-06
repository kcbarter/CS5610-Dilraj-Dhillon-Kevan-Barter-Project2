import { combineReducers } from 'redux';
import enemyBoardReducer from './enemyBoardReducer';
import friendlyBoardReducer from './friendlyBoardReducer';
import playerTurnReducer from './playerTurnReducer';

export default combineReducers({
    friendlyBoard: friendlyBoardReducer,
    enemyBoard: enemyBoardReducer,
    playerTurn: playerTurnReducer,
})