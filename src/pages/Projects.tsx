import '../pages/style.css'

import card2 from '../images/Thumbnail.svg'
import card1 from '../images/Thumbnail3.svg'
import card3 from '../images/Thumbnail2.svg'

function Project() {
    return (
      <div className='Card'>
        <ul >
            <li className='cards'><img src={card1} ></img></li> 
            <p className='descrip'> This project called "Awesome Todos," is a website using React for the front-end, which provides a dynamic and responsive user interface, and MongoDB for the back-end, which serves as the database to store and manage user tasks efficiently.  </p>
            <li className='cards'><img src={card2} ></img></li>
            <p className='descrip'>  This project is a furniture selling website built using HTML, CSS, and JavaScript, designed to provide a visually appealing and interactive platform for users to browse and purchase furniture products.</p>
            <li className='cards'><img src={card3} ></img></li>
            <p className='descrip'> This project "Nexcent" is a sophisticated and dynamic website UI designed specifically for agencies. It utilizes vanilla HTML for structure, Tailwind CSS for styling, and JavaScript for interactivity, ensuring a seamless and visually appealing user experience. The combination of these technologies allows for a responsive and modern design that can effectively showcase agency services and engage users. </p>
        </ul>
      </div>
    );
  }
  
  export default Project;