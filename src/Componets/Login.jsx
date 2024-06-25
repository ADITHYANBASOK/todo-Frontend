import React, { useState } from 'react'

function Login() {
    const [input,setInput] = useState({})
    const [data,setData]=useState({})

    const inputchange=(e)=>{
      const  name=e.target.name
      const  value=e.target.value
      setInput({...input,[name]:value})
    }
    console.log(input);

    const datachange=(e)=>{
        const  name=e.target.name
        const  value=e.target.value
        setData({...data,[name]:value})
      }

      const Login=()=>{

      }

      const Registration=()=>{

      }
  return (
    <>
      <div class="card text-center">
        <div className='row'>
        <form class="form-floating col-6">


  <div class="card-body " style={{ backgroundColor:"yellow"}}>
    <h5 class="card-title">Login</h5>
 
     <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" name='email' placeholder="name@example.com" onChange={inputchange}/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" name='password' placeholder="Password" onChange={inputchange}/>
  <label for="floatingPassword">Password</label>
</div>
<button type="button" class="btn btn-primary" onClick={Login}>Login</button>

  </div>
  </form>
  <form class="form-floating col-6">

  <div class="card-body  " style={{ backgroundColor:"red"}}>
    <h5 class="card-title">Registration</h5>
  
          <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name='name' onChange={datachange}/>
  <label for="floatingInput">Name</label>
</div>
     <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={datachange}/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password' onChange={datachange}/>
  <label for="floatingPassword">Password</label>
</div>
<div class="form-floating mb-3">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Comfirm Password</label>
</div>
<button type="button" class="btn btn-primary" onClick={Registration}>Sign up</button>

  </div>
  </form>
  </div>
  
</div>
    </>
  )
}

export default Login
