const initialState = {
    radioDetails: {},
};

const radio = ( state = initialState, action)=>{

    switch (action.type) {
        case 'UPDATE_RADIO_DETAILS':
            return {
                ...state,
                radioDetails: action.payload,
            };
        default:
            return state;
    }
};

export default radio;