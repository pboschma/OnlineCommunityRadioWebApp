const initialState = {
    currentPage: "rooster"
};

const nav = ( state = initialState, action)=>{

    switch (action.type) {
        case 'UPDATE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

export default nav;