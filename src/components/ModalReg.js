import React, {useState} from 'react';
import '../sass/main.css'

const ModalReg = () => {
    const [input, setInput]= useState({
        email: '',
        passd: '',
        fName: '',
        lName: '',
    })
    
    const handleInput = (event) => {
        const name = event.target.name;
        setInput({
            ...input,
            [name]: event.target.value
        })
    }

  return (
    <>
        <main>
            <section className="sectionmodal">
                <h4 className="sectionmodal__h4-modalHeader">Create an account</h4>
                <p className="sectionmodal__p-modalP">Register free and start streaming.</p>
                <form action="/" className="modalForm" method='post' onSubmit={(e) => {e.preventDefault()}}>
                    <input
                        className='nameInput nameInput1'
                        type="text" 
                        name='fName'
                        placeholder='First Name'
                        onChange={handleInput} 
                        value={input.fName}              
                    />
                    <input
                        className='nameInput nameInput2'
                        type="text" 
                        name='lName'
                        placeholder='Last Name'
                        onChange={handleInput} 
                        value={input.lName}              
                    />
                    <input 
                        type="text" 
                        name='email'
                        placeholder='Email'
                        onChange={handleInput} 
                        value={input.email}              
                    />
                    <input 
                        type="password"  
                        name='passd' 
                        placeholder='Password' 
                        onChange={handleInput} 
                        value={input.passd}              
                    />

                    <button type="submit" className='modalForm__button'>Register</button>
                    <div className="divor">
                        <div className="divor__hr divor__hr1"></div>
                        <span className="divor__span-or">or</span>
                        <div className="divor__hr divor__hr2"></div>
                    </div>

                    <div className="reg">
                        <span className="reg__span-cmn reg__span-first">Already have an account? </span>
                        <span className="reg__span-cmn reg__span-second">Login</span>
                    </div>

                </form>
            </section>
        </main>
    </>
  )
}

export default ModalReg