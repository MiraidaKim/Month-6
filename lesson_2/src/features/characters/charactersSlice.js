import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
        info: { pages: 0, count: 0 },
        filters: {
            page: 1,
            name: '',
            status: 'all', // alive | dead | unknown | all
            species: ''
        },
        current: null 
    },
    reducers: {
        setPage(state, action) {
            state.filters.page = action.payload
        },
        setName(state, action) {
            state.filters.name = action.payload,
            state.filters.page = 1;
        },
        setStatus(state, action) {
            state.filters.page = 1;
            state.filters.status = action.payload
        },
        setSpecies(state, action) {
            state.filters.page = 1;
            state.filters.species = action.payload
        },
        clearCurrent(state) {
            state.current = null
        }
    },
     
})

export const { setPage, setName, setStatus, setSpecies, clearCurrent } = charactersSlice.actions

export default charactersSlice.reducer