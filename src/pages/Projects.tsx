import '../pages/style.css'

import card2 from '../images/Card 2.svg'
import card1 from '../images/Card 1.svg'
import card3 from '../images/Card 3.svg'

function Project() {
    return (
      <div className='Card'>
        <ul >
            <li className='cards'><img src={card2} ></img></li> 
            <li className='cards'><img src={card1} ></img></li>
            <li className='cards'><img src={card3} ></img></li>
        </ul>
      </div>
    );
  }
  
  export default Project;