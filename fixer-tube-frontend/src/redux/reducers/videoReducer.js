export default function videoReducer (state = {mainCategories:"",brands:[],categories:[],videos:[]},action) {
    switch (action.type) {
        case 'LOAD_DATA':
            const vidArr=action.payload.map(mc=>mc.videos)
            const allVideos = [];
            vidArr.map(vid=>vid.map(videoItem=>allVideos.push(videoItem)))

            const catArr=action.payload.map(mc=>mc.categories)
            const allCategories = [];
            catArr.map(cat=>cat.map(categoryItem=>allCategories.push(categoryItem)))

            const brandArr=action.payload.map(mc=>mc.brands)
            const allBrands = [];
            brandArr.map(brand=>brand.map(brandItem=>allBrands.push(brandItem)))

            function comprare(a, b) {
                const videoA = a.name.toUpperCase();
                const videoB = b.name.toUpperCase();
              
                let comparison = 0;
                if (videoA > videoB) {
                  comparison = 1;
                } else if (videoA < videoB) {
                  comparison = -1;
                }
                return comparison;
              }

            return {...state,
                mainCategories: action.payload,
                categories: allCategories.sort((a, b) => a.name.localeCompare(b.name)),
                brands: allBrands.sort((a, b) => a.name.localeCompare(b.name)),
                videos: allVideos.sort((a, b) => a.name.localeCompare(b.name))}
        default:
            return state;
    }
}