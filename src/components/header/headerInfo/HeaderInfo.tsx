import logoText from '../../../assets/logo-text-602fba7f314dd.png';
import logos from '../../../assets/logo-type-sm.png';
import { Outlet, Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <div>
      <img src={logos} alt='logo'></img>
      <div className='uk-flex-1'>
        <div className='logo-type-name'>
        <Link to={`/ppp`}><img src={logoText} alt='g'></img></Link>
          
        </div>
        <div className='drop-box uk-flex uk-flex-middle uk-margin-small-top'>
          <button
            rel='nofollow'
            type='button'
            className='uk-button uk-button-default uk-text-uppercase'
          >
            Днепр
          </button>
        </div>
        <div className='work-time uk-text-uppercase'>
          {' '}
          Без выходных. С 10:00 до 21:00
        </div>
      </div>
    </div>
  );
};
export default HeaderInfo;
