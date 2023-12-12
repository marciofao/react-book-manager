import './style.css';
import logo from '../../img/logo.svg';

function Logo(){
    
    return(
        <div className='logo'>
          <img src={logo} alt="logo" className='logo-img' />
          <p><strong>Book</strong>Manager</p>
        </div>    
    )
}

export default Logo;