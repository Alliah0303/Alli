import '../pages/style.css'

import facebook from '../images/Facebook.svg'
import instagram from '../images/Instagram.svg'
import twitter from '../images/Twitter.svg'

function SocialMediaLinks () {
  return (
    <div id="contact"className="socialmedia">
       <h2 className="connect">CONNECT WITH ME</h2>
       <p className="social"> ON MY SOCIAL NETWORKS OR EMAIL </p>
       <ul className="social-icons"> 
        <li className='media'>
          <a href='https://www.facebook.com/profile.php?id=100020038524919&mibextid=ZbWKwL'> 
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li className='media'>
          <a href='https://www.instagram.com/jude_alliah/'> 
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li className='media'>
          <a href='https://x.com/Alliah0303'> 
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
      <div className='gmail'>
     <a href="mailto:salapantan.judealliahsit2011@gmail.com" target='-blank' className="email" ><p>salapantan.judealliahsit2011@gmail.com</p></a> 
     </div>
    </div>
  );
};

export default SocialMediaLinks;
