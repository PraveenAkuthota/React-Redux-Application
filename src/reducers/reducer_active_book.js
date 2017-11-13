// state argument in not application's state, only the state this reducer is responsible for
export default function (state = null, action) {  // when a action is undefined then default our state to null

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}