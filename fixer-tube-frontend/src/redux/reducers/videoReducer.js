export default (state = {mainCategories:[],categories:[],brands:[],videos:[]},action) => {
    switch (action.type) {
        case 'LOAD_DATA':
            return {state: action.payload}
        default:
            return state;
    }
}