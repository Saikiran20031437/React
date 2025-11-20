import {createStore} from 'redux';
//initialstate
const initialstate = {
    user: {
        username : "Sai",
        balance : 25000,
    },
}

//Action creators
export const addMoney = (amt) => ({
   type: "addMoney",
   payload: amt,
})


export const removeMoney = (amt) => ({
    type: "removeMoney",
   payload: amt,
})
//Reducer 
function reducer(state = initialstate, action){
    switch(action.type) {
        case "addMoney":
            return {
                user : {
                    username : state.user.username,
                    balance: state.user.balance + action.payload,
                },
            };

             case "removeMoney":
            return {
                user : {
                    username : state.user.username,
                    balance: state.user.balance - action.payload,
                },
            };
            default:
            return state;
    }
}


const store = createStore(reducer);
export default store;