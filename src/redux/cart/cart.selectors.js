import {createSelector} from 'reselect';
const selectCart = state => state.cart;

const SelectUser = state => state.user;

export const selectCartItems = createSelector (
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        accumuluatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0
    )
)