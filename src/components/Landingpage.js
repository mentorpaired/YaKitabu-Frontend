import logo from '../images/yakitabu-logo.png';

function Landingpage() {
  return (
    <div>
      <div id='home-logo'>
      <img src={logo} alt='Logo' />
      </div>
       <h3>Yakitabu.io. Borrow and lend your favorite <br/>books from your peers!</h3>
      <div className= "wrapper">
        <button className="btn">Sign Up</button>
        <h4>Already have an account?</h4>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
}
export default Landingpage;

