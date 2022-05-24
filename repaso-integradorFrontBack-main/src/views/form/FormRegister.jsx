import React from 'react';


export default function(){


    return(
        <>
        <div className="container">
            <form className='login-register'>
                <label> {"Username "}
                    <input className='login-input' type="text" placeholder='nombre de usuario'/>
                </label>

                <label> {"Password "}
                    <input className='login-input' type="password" placeholder='contraseña'/>
                </label>

                <label> {"Email "}
                    <input className='login-input' type="email" placeholder='email'/>
                </label>
                <input className='submit' type="submit" value={"submit"}/>
            </form>
        </div>
        <hr />
        </>
    )
}