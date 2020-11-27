const LOAD_MAIN_CATEGORIES = 'LOAD_MAIN_CATEGORIES';

export const loadMainCategories = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/main_categories')
        .then(resp => resp.json())
        .then(data => dispatch({type: LOAD_MAIN_CATEGORIES, payload: data}))
    }
}