const inisitalState = {count:0};

export const counterReducer = (state=inisitalState, action) => {
    switch(action.type){
        case'increment' :
        return {count:state.count +1};
        case'decrement':
        return {count:state.count-1};
        default:
            return state;
    }
}