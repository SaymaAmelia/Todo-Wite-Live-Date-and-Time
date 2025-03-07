import React, { useState } from 'react'
import '../components/ShortCircuit.css'

const ShortCircuit = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("")
  
  return (
    <main className='h-[400px] shadow-md mx-[300px] flex justify-center '>

   
    <section >

        <h1 className='h-2/12 text-2xl mt-5'>Welcome to the ShortCircuit Evaluation!</h1>

        {isLoggedIn &&<p>You are Logged in</p>}
        {user? `hello ${user}`: "please  Logged in!"}
           

        <div className='  grid-three-cols flex gap-6'>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)} >Toggle Login State</button>
            <button onClick={()=>setUser("sayma Akter")}>Set User</button>
            <button onClick={()=>setUser("")}>clear User</button>
        </div>
    </section>
    </main>
  )
}

export default ShortCircuit