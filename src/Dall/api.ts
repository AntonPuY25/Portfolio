import axios from "axios";

const API={
    sendMail(name: string,email: string,subject: string,message: string){
        return axios.post('https://smpt-server.herokuapp.com/sendMail',{
            name,
            email,
            subject,
            message
        })
    }
}
export default API;