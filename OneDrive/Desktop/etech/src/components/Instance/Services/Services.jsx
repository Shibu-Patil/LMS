import { AxiosApi } from "../AxiosInnstance"


export let services={
    createRegister:async(payload)=>{
        try {
            await AxiosApi.post('/auth/register',payload)
        } catch (error) {
            alert("Something Went Wrong")
        }
    },
    checkLogin:async (payload)=>{
        try {
            let {data} =  await AxiosApi.post('/auth/login',payload)
            // console.log(data);
            return data
        } catch (error) {
            alert("Something Went Wrong")
        }
      
    },
    createBootCamp:async(payload,obj)=>{
        try {
            console.log(obj);
            await AxiosApi.post('/bootcamps',payload,obj)
            
        } catch (error) {
            alert("Something Went Wrong")
        }
    }
}