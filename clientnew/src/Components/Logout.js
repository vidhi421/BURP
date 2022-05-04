import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//import { useEffect } from 'react';

const Logout=()=>{

    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method: "GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            navigate("/LoginPage",{replace: true});
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            console.log(err);
        });
        
    });
return(
    <>
        <h1>Logout</h1>
    </>
)
}

export default Logout