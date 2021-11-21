import React from "react";
import '../index.css';

const SignUp =() => {
        return (
        <div>
            <form>

                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder=" Your Name" /><br/>
               
                    <input type="email" className="form-control" placeholder=" Your Email" /><br/>
                
                    <input type="password" className="form-control" placeholder=" Your Password" /><br/>

                    <div>
                        <input type="checkbox" id="terms" name="terms and conditions" />
                        <label for="terms">By checking this box you agree to the terms and conditions</label>
                    </div>

                    <div className="btns"> 
                    <button type="submit" className="btn">signUp</button>
                   </div> 
                </div>
            </form>
        </div>
                 );
}

export default SignUp;
