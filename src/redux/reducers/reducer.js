const initialState = {
    notes: []
};

function rootReducer(state = initialState, action) {
    if (action.type === 'ADD_NOTE') {
        return {
            notes: [
                ...state.notes,
                {
                    title: action.title,
                    content: action.content

                }
            ]
        }
    } else if (action.type === 'REMOVE_NOTE') {
        return {
            notes: state.notes.filter((note, index) => {
                return action.id !== index
            })
        }
    } else if (action.type === 'UPDATE_NOTE') {
        state.notes[action.id] = {
            title: action.title,
            content: action.content
        }
        return {
            notes: state.notes
        }
    } else {
        return state;
    }
}

export default rootReducer;