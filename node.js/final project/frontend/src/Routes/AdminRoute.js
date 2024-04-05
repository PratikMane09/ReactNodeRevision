import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import Spinner from "../Spinner";

export default function AdminRoute(){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
        const authCheck=()=>{
            fetch("http://localhost:4000/api/admin-auth",{
            headers:{
                "Authorization":auth?.token
            }
        }).then((resp1)=>{
            resp1.json().then((resp2)=>{
                if(resp2.ok){
                    setOk(true)
                }
                else{
                    setOk(false)
                }
            })           
        })
        }
        if(auth?.token) authCheck()
    },[auth?.token])
    return ok?<Outlet/>:<Spinner/>
}