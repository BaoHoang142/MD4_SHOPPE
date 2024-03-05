import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './reducer/counterSlice'
import  playerSlide  from './reducer/addPlayer'


export const store = configureStore({
  reducer: 
  {
    counter: counterSlice, 
    player: playerSlide
  
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch