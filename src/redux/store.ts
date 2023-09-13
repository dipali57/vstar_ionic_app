import { configureStore, Action, AnyAction, Dispatch } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { homeReducer } from './home/home.reducer';
import { commonReducer } from './common/common.reducer';
import { postReducer } from './Post/post.reducer';
import { authReducer } from './auth/auth.reducer';
import { menuReducer } from './menu/menu.reducer';
import { profileReducer } from './profile/profile.reducer';
import { leaderBoardReducer } from './leaderBoard/leaderBoard.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    common: commonReducer,
    post: postReducer,
    menu: menuReducer,
    profile: profileReducer,
    leaderBoard: leaderBoardReducer,
  },
});
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction> &
  Dispatch<AnyAction>;

export type AppThunk = ThunkAction<void, AppState, undefined, Action<string>>;

export default store;
