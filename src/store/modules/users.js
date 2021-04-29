import axios from 'axios'


const state = {
    users:[]
}

const getters = {
    allUsers : state => state.users
}

const actions = {
    async getUsers({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers',res.data)
    }
}

const mutations = {
    setUsers: (state,users) => state.users = users
}

export default {
    state,getters,actions, mutations
}