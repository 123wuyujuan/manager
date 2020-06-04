import store from 'store'
const USER_LOGIN='USER_LOGIN'
export default {
    saveUser (user){
        store.set(USER_LOGIN,user);
    },
    getUser(){
        return store.get(USER_LOGIN)||{};
    },
    removeUser(){
        store.remove(USER_LOGIN);

    },

}