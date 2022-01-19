// signInRecord相关
import dayjs from 'dayjs'

const signInRecords = {
    namespaced: true,
    actions: {
        signin: function(context) {
            context.commit('SIGNIN', dayjs())
        }
    },
    mutations: {
        SIGNIN: function(state, value) {
            state.signInRecords.push({ time: value })
            window.localStorage.setItem('signInRecords', JSON.stringify(state.signInRecords))
        }
    },
    getters: {
        isSignIn(state) {
            return state.signInRecords.some(obj => {
                return dayjs(obj.time).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
            })
        }
    },
    state: {
        signInRecords: JSON.parse(window.localStorage.getItem('signInRecords')) || []
    }
}

export default signInRecords
