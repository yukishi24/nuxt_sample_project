import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: function(){
            return{
                count: 0,
            }
        },
        mutations:{
            countup: function(state){
                state.count++
            },
        }
    })
}

export default createStore