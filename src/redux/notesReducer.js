import { dateToText, generateId, getDatesFromText } from "../helpers/helpers"
import { initialState } from "./initialState"

const ADD_NOTE = "ADD_NOTE"
const DELETE_NOTE = "DELETE_NOTE"
const ARCHIVE_NOTE = "ARCHIVE_NOTE"
const EDIT_NOTE = "EDIT_NOTE"

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            const id = generateId()
            const dates = getDatesFromText(action.content)
            const created = dateToText(new Date())
            const note = {
                ...action.payload,
                dates,
                created,
                isActive: true,
                id
            }
            return {
                ...state,
                notes: [...state.notes, note]
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            }
        case ARCHIVE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload ? {...note, isActive: !note.isActive } : note)
            }
        case EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === action.payload.id ? {...note, ...action.payload, } : note)
            }
        default:
            return state

    }
}

export const addNote = (name, category, content) => ({
    type: ADD_NOTE,
    payload: { name, category, content }
})

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: id
})
export const archiveNote = (id) => ({
    type: ARCHIVE_NOTE,
    payload: id
})

export const editNote = (name, category, content, id) => ({
    type: EDIT_NOTE,
    payload: { name, category, content, id }
})