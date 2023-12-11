
document.getElementById("btn1").addEventListener("click", function(){

    console.log(Redux);

const action={
    type: "split",
    payload: "Ahmed Mohammed Mahmoud Mostafa Yousef "
}

const reducer = (state = [], action)=>{
    if(action.type== "split"){
        return action.payload.split(" ")
    }

    return state;

}

const store = Redux.createStore(reducer)

// document.getElementById('tx1').value = (store.getState());
store.dispatch(action)

document.getElementById('tx1').value = (store.getState());


})

/////////////////////////////////////////////////////////////////////////////////////////




document.getElementById("btn2").addEventListener("click", function(){

    console.log(Redux);

const action={
    type: "add",
    payload: [4, 5]
}

const reducer = (state = [1, 2, 3], action)=>{
    if(action.type== "add"){
        state.push(action.payload)
        return state;
    }

    return state;

}

const store = Redux.createStore(reducer)

// document.getElementById('tx1').value = (store.getState());
store.dispatch(action)

document.getElementById('tx2').value = (state = [] + store.getState());


})