const LOAD_DATA = 'LOAD_DATA';
const ADD_VIDEO = 'ADD_VIDEO';

export const loadData = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/main_categories')
        .then(resp => resp.json())
        .then(data => dispatch({type: LOAD_DATA, payload: data}))
    }
};

export const addVideo = (newVideo,history) => {
    
    return (dispatch) => {
        fetch('http://localhost:3001/videos',{
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Accepts':'application/json'
            },
            body: JSON.stringify(newVideo)
        })
        .then(resp => resp.json())
        .then(newVideoObj => {
            dispatch({type: ADD_VIDEO, payload: newVideoObj})
            history.push(`${newVideoObj.slug}`)
        })
    }
};
