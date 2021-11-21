/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../index.css';
// 
const Loginpage =() => {
        return (
        <div>
            <form>
                <div className="form-group">
                    <h3>Sign In</h3>

                    <input type="email" className="form-control" placeholder=" Enter Email" /><br/>
                
                    <input type="password" className="form-control" placeholder=" Enter Password" /><br/>

                    <div>
                        <input type="checkbox" id="terms" name="terms" />
                        <label for="terms">Remember Me</label> <br/>
                    </div>

                    <button type="submit" className="btn">Log In</button>
                    <p className="forgot-password text-right">
                        {/* <a>Forgot My Password?</a> */}
                        Forgot <a href="# ">password?</a>
                    </p>
                </div>
            </form>
        </div>
                 );
}

export default Loginpage;
