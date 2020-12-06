export default function videoReducer (state = {mainCategories:"",brands:[],categories:[],videos:[]},action) {
    switch (action.type) {
        case 'LOAD_DATA':
        //     const vidArr=action.payload.map(mc=>mc.videos)
        //     const allVideos = [];
        //     vidArr.map(vid=>vid.map(videoItem=>allVideos.push(videoItem)))

        //     const catArr=action.payload.map(mc=>mc.categories)
        //     const allCategories = [];
        //     catArr.map(cat=>cat.map(categoryItem=>allCategories.push(categoryItem)))

        //     const brandArr=action.payload.map(mc=>mc.brands);
        //     const dupBrands = [];
        //     brandArr.map(brand=>brand.map(brandItem=>dupBrands.push(brandItem)))
        //     const allBrands=dupBrands.filter((obj, pos, arr) => {
        //       return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
        //   });
            return {...state,
                mainCategories: action.payload.main_categories,
                categories: action.payload.categories.sort((a, b) => a.name.localeCompare(b.name)),
                brands: action.payload.brands.sort((a, b) => a.name.localeCompare(b.name)),
                videos: action.payload.videos.sort((a, b) => a.name.localeCompare(b.name))
              }
        case 'ADD_VIDEO':
            state.videos.push(action.payload)
            const newArr = state.videos
            return {...state,
                videos: newArr,
                newVideo: action.payload
            }
        case 'EDIT_VIDEO':
            state.videos.push(action.payload)
            const updatedArr = state.videos.map(video=>{
                if (video.slug !== action.payload.slug) {
                    return video
                } else {
                    return action.payload
                }
            })
            return {...state,
                videos: updatedArr,
                editedVideo: action.payload
            }
        default:
            return state;
    }
}