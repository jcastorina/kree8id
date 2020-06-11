import Api from './Api'

export default {
    register(credentials){
        return Api().post('register', credentials, {withCredentials: true});
    },
    login(credentials){
        return Api().post('login', credentials, {withCredentials: true});
    },
    logout(){
        return Api().get('logout', {withCredentials: true});
    },
    forgot(credentials){
        return Api().post('forgot', credentials, {withCredentials: true});
    },
    reset(credentials){
        return Api().post('/reset', credentials, {withCredentials: true});
    },
    getReset(id){
        return Api().get('/reset/' + id, {withCredentials: true});
    },
    getRegister(){
        return Api().get('/register')
    }
}
