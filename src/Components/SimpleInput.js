import useInput from "./useInput";
import "./SimpleInput.css";

const SimpleInput=()=>{
    const{
        value: newValue,
        hasError: newError,
        isValid: newFieldIsValid,
        valueChangeHandler: newChangeHandler,
        valueBlurHandler: newBlurHandler,
        reset: newReset
    }=useInput((value)=> value.trim()!=="")

    const {
        value: newEmail,
        hasError: newEmailError,
        isValid: newEmailFieldIsValid,
        valueChangeHandler: newEmailChangeHandler,
        valueBlurHandler: newEmailBlurHandler,
        reset: newEmailReset
    }=useInput((value)=>value.includes("@"))

    const{
        value: newValueAge,
        hasError: newAgeError,
        isValid: newAgeFieldIsValid,
        valueChangeHandler: newAgeChangeHandler,
        valueBlurHandler: newAgeBlurHandler,
        reset: newAgeReset
    }=useInput((value)=> value>0)

    const{
        value: newPhoneValue,
        hasError: newPhoneError,
        isValid: newPhoneFieldIsValid,
        valueChangeHandler: newPhoneChangeHandler,
        valueBlurHandler: newPhoneBlurHandler,
        reset: newPhoneReset
    }=useInput((value)=>value.length >= 10)

    let formValidity=false
    if(newFieldIsValid && newEmailFieldIsValid && newAgeFieldIsValid && newPhoneFieldIsValid){
        formValidity=true;
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(!newEmailFieldIsValid && !newEmailFieldIsValid && !newAgeFieldIsValid && !newPhoneFieldIsValid){
            return
        }
        newReset()
        newEmailReset()
        newAgeReset()
        newPhoneReset()
    };

    return (

     <form onSubmit={submitHandler}>
     <div className={`form ${newError ? "invalid":""}`}>
     <label>Name</label>
     <br />
     <input type="text"
     id="name"
     onChange={newChangeHandler}
     value={newValue}
     onBlur={newBlurHandler}
     className="form-container">
     </input>

     {newError && <p className="error-Message">Name cannot be blank</p>}
       </div>

     <div className={`form ${newEmailError ? "invalid":""}`}>
     <label>Email</label>
     <br />
     <input type="text"
     id="email"
     name="email"
     onChange={newEmailChangeHandler}
     value={newEmail}
     onBlur={newEmailBlurHandler}
     className="form-container">
     </input>

     {newEmailError && <p className="error-Message">Email should be in joe@mail.com</p>}
       </div>
    
     <div className={`form ${newAgeError ? "invalid":""}`}>
     <label>Age</label>
     <br />
     <input type="text"
     id="age"
     name="age"
     onChange={newAgeChangeHandler}
     value={newValueAge}
     onBlur={newAgeBlurHandler}
     className="form-container">    
     </input>

     {newAgeError && <p className="error-Message">Age should be greater than zero</p>}
    </div>

     <div className={`form ${newPhoneError ? "invalid":""}`}>
     <label>Phone number</label>
     <br />
     <input type="text"
     id="phoneno"
     name="phoneno"
     onChange={newPhoneChangeHandler}
     value={newPhoneValue}
     onBlur={newPhoneBlurHandler}
     className="form-container">    
     </input>

     {newPhoneError && <p className="error-Message">Phone number cannot be blank</p>}
    </div>

    <div className="button-action">
    <br />
    <button type="submit"disabled={formValidity}>Submit</button>
    </div> 
    </form>

    )
}

export default SimpleInput;


