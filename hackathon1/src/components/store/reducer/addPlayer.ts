import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerState {
    id: number,
    name: string,
    point: number,
    check: boolean
}
interface State {
  players: PlayerState[]
}
export const playerSlide = createSlice({
  name: 'player',
  initialState: {
    players:JSON.parse(localStorage.getItem('players') || '[]')
  },
  reducers: {
    addPlayer: (state: State, action: PayloadAction<PlayerState>) => {
      state.players.push(action.payload)
      localStorage.setItem('players', JSON.stringify(state.players))

    },
    drecrementPoint: (state: State, action: PayloadAction<PlayerState>) => {
        let index = state.players.findIndex((player) => player.id === action.payload.id)
        if (state.players[index].point==1) {
            if (confirm("Are you sure?")) {
                state.players.splice(index, 1)
            }
        } else {
            state.players[index].point = state.players[index].point - 1
            localStorage.setItem('players', JSON.stringify(state.players))
        }
    },
    incrementPoint: (state: State, action: PayloadAction<PlayerState>) => {
        let index = state.players.findIndex((player) => player.id === action.payload.id)
        state.players[index].point  = state.players[index].point+1
        localStorage.setItem('players', JSON.stringify(state.players))

    },
    deletePlayer: (state: State, action: PayloadAction<PlayerState>) => {
        let index = state.players.findIndex((player) => player.id === action.payload.id)
        if (confirm("Are you sure?")) {
            state.players.splice(index, 1)
            localStorage.setItem('players', JSON.stringify(state.players))
        }
    }
   
    
  },
})

// Action creators are generated for each case reducer function
export const { addPlayer,drecrementPoint,incrementPoint,deletePlayer } = playerSlide.actions
export default playerSlide.reducer
