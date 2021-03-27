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

// Sum the items' price
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

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
            
            // we cloned the basket
            let newBasket = [...state.basket];

            
            // This part will always be copied to another projects, therefore please do not memorize it, just copy/paste it.
            // we check to see if product exists,
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                );

            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket`
                );
            }
            


            return { 
                ...state, 
                basket: newBasket,
            };
        default:
            return state;
    }
}

export default reducer;