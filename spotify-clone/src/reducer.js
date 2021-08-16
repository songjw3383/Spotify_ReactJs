export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    current_playlists: [],
    newReleases: [],
    searchTracks: [],

    recommendations: []
    // token: 'BQCRjUB-lVU4shfsm0iGs1tMH2PEKjBl4j8-9pqcOFQdcSTN_ijF_lPytwvmFH-OEV1qlUJRTX0lffiAA_qfbSncdFjf8SR4Exl1OVht31YbPAqyzy35ErmCu73z4j2J5iMcFvJdI11M7dLjomdk5lHw9MSjTETVTQgqAfhJbO6wDAje'
    // empty initial data
};

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case 'CURRENT_PLAYLISTS' :
            return {
                ...state,
                currentPlaylists: action.currentPlaylists
            }
        
        case 'NEWRELEASES' : 
            return {
                ...state,
                newReleases: action.newReleases
            }
        case 'FEATURED_PLAYLISTS' : 
            return {
                ...state,
                featuredPlaylists: action.featuredPlaylists
            }
        
        case 'TOP_ARTISTS' : 
            return {
                ...state,
                topArtists: action.topArtists
        }

        case 'TOP_TRACKS' :
            return {
                ...state,
                topTracks: action.topTracks
            }

        case 'SAVED_TRACKS' :
            return {
                ...state,
                savedTracks: action.savedTracks
            }

        case 'SEARCH_TRACKS' :
            return {
                ...state,
                searchTracks: action.searchTracks
            }
        // * Search Part
        // case 'SEARCH_PLAYLISTS' :
        //     return {
        //         ...state,
        //         searchPlaylists: action.searchPlaylists
        //     }

        default: 
            return state;
    }
}

export default reducer;