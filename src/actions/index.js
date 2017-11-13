export function selectBook(book) {
    //selectBook is an Action Creator, it needs to return an action, an object witha a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}