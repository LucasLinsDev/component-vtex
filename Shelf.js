
import React,{useEffect, useState} from 'react';

const Shelf=()=>{
 
  const [user,setUser]=useState();



  useEffect(()=>{

      fetch('/api/sessions?items=*')
      .then(response=>response.json())
      .then((data)=>{
            if(data.namespaces.profile.isAuthenticated.value=='false'){
              setUser('-');
            }else{
           //   setUser(data.namespaces.authentication.storeUserId.value);
              const options = {method: 'POST', 

              headers: {
            
                "Content-Type": "application/json",
                "Accept": "application/json"
            
              },
              body:JSON.stringify({"user":data.namespaces.authentication.storeUserId.value})
            };
        
              fetch('https://52.67.237.244/pontos',options)
              .then(response=>response.json())
              .then((data)=>{
                setUser(data)
                console.log(data);
              });
           
            }
         
        //  console.log(user.namespaces.authentication.storeUserId.value);
     
  
      });
      

   
      
     
 
 
  })
  //"ace8dafc-656e-4db1-9662-b276f95d1c41"



  return  <p>{user}</p>

}

export default Shelf;