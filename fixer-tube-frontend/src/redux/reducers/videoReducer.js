export default function videoReducer (state = {mainCategories:[],categories:[],brands:[],videos:[]},action) {
    switch (action.type) {
        case 'LOAD_MAIN_CATEGORIES':
            console.log(action.payload);
            return {...state,
                mainCategories: action.payload}
        default:
            return state;
    }
}