export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    
    //token: 'BQCRjUB-lVU4shfsm0iGs1tMH2PEKjBl4j8-9pqcOFQdcSTN_ijF_lPytwvmFH-OEV1qlUJRTX0lffiAA_qfbSncdFjf8SR4Exl1OVht31YbPAqyzy35ErmCu73z4j2J5iMcFvJdI11M7dLjomdk5lHw9MSjTETVTQgqAfhJbO6wDAje'
    // // empty initial data
};

const reducer = (state, action) => {

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
        
        // case 'SET_BODY_PLAYLISTS':
        //     return {
        //         ...state,
        //         body_playlists: action.body_playlists,
                
        //     }

        default: 
            return state;
    }
}

export default reducer;