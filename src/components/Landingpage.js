import logo from '../images/yakitabu-logo.png';

function Landingpage() {
  return (
    <div>
      <div id='home-logo'>
      <img src={logo} alt='Logo' />
      </div>
       <h3>Yakitabu.io. Borrow and lend your favorite <br/>books from your peers!</h3>
      <div className= "wrapper">
        <a href="/Siguppage" target="_blank">
        <button className="btn">Sign Up</button>
        </a>
        <h4>Already have an account?</h4>
        <a href="/Loginpage" target="_blank">
        <button className="btn">Sign In</button>
        </a>
      </div>
    </div>
  );
}
export default Landingpage;

