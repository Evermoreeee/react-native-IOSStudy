/*------count 的发布订阅者实践------*/
let state = { count: 1 };
let listeners = [];
/*订阅*/
function subscribe(listener) {
    listeners.push(listener);
}
function changeCount(count) {
    state.count = count;
    /*当 count 改变的时候，我们要去通知所有的订阅者*/
    for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
    }
}

/*来订阅一下，当 count 改变的时候，我要实时输出新的值*/
subscribe(() => {
    console.log(state.count + '----->');
});
/*我们来修改下 state，当然我们不能直接去改 state 了，我们要通过 changeCount 来修改*/
changeCount(2);
changeCount(3);
changeCount(4);

let state = {
    counter: { count: 0 },
    info: { name: '前端九部', description: '我们都是前端爱好者！' }
}

/*counterReducer, 一个子reducer*//*注意：counterReducer 接收的 state 是 state.counter*/
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + 1 }
        case 'DECREMENT': return { ...state, count: state.count - 1 }
        default: return state;
    }
}
/*InfoReducer，一个子reducer*//*注意：InfoReducer 接收的 state 是 state.info*/
function InfoReducer(state, action) {
    switch (action.type) {
        case 'SET_NAME': return { ...state, name: action.name }
        case 'SET_DESCRIPTION': return { ...state, description: action.description }
        default: return state;
    }
}

const reducer = combineReducers({
    counter: counterReducer, info: InfoReducer
});
// 我们尝试实现下 combineReducers 函数function 
function combineReducers(reducers){
    /* reducerKeys = ['counter', 'info']*/
    const reducerKeys = Object.keys(reducers)
    /*返回合并后的新的reducer函数*/
    return function combination(state = {}, action) {
        /*生成的新的state*/    const nextState = {}
        /*遍历执行所有的reducers，整合成为一个新的state*/
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            const reducer = reducers[key]
            /*之前的 key 的 state*/
            const previousStateForKey = state[key]
            /*执行 分 reducer，获得新的state*/
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
        }
        return nextState;
    }
}