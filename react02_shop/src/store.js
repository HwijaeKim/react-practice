import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: '여울', count: 2},
        {id: 2, name: '링크', count: 1}
    ],
    reducers: {
        plusCount(state, productId) {
            console.log('productId: ' + productId.payload);
            let find = state.find(item => item.id === productId.payload);
            find.count++;
        },
        addCart(state, productInfo) {
            console.log(productInfo.payload.id)
            const alreadyItem = state.find(item => item.id === productInfo.payload.id);
            console.log('이미 있는? ' + alreadyItem);

            if(alreadyItem) {
                alreadyItem.count++;
            } else {
                const newItem = {
                    id: productInfo.payload.id,
                    name: productInfo.payload.title,
                    count: 1
                }
                console.log(newItem);
                state.push(newItem);
            }
        },
        deleteCart(state, productId) {
            return state.filter(state => state.id !== productId.payload);
        }
    }
})
export let { plusCount, addCart, deleteCart } = cart.actions


export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
}) 