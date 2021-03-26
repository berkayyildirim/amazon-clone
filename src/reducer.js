export const initialState= {
    basket: [{
        id: "4903850",
        title: "iTouch Air 3 Smartwatch Fitness Tracker Heart Rate Step Counter Sleep Monitor Message IP68",
        price: 59.99,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/615KcdDo9OL._AC_UY436_FMwebp_QL65_.jpg"
    }],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "REMOVE_FROM_BASKET":
            // Logic for Removing item from basket
            return { state };
        default:
            return state;
    }
}

export default reducer;