const LOAD_DATA = 'LOAD_DATA';

export const loadData = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/main_categories')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}