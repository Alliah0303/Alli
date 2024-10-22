import Icons1 from '../images/HTML5.svg'
import Icons2 from '../images/CSS3.svg'
import Icons3 from '../images/Figma.svg'
import Icons4 from '../images/React.svg'
import Icons5 from '../images/Nodejs.svg'
import Icons6 from '../images/Visual Studio Code.svg'
import '../pages/style.css'



function AboutMe  ()  {
  return (
    <div id= "bio"className="About">
      <h2 className="Me">About me</h2>
      <p className="p1">
        Hello! I'm Jude Alliah S. Salapantan, a 20-year-old student currently in my
        3rd year of college, pursuing a Bachelor of Science in Information
        Technology (BSIT). I previously graduated from the Western Institute of
        Technology with high honors, where I studied the TVL-ICT strand. My passion
        for technology drives me to continuously expand my knowledge and skills in
        the field of IT.
      </p>

      <h3 className="Background">My Background</h3>
      <p className="p2">
        Growing up in Suarez St., San Miguel, Iloilo, I have always been surrounded
        by a supportive community that values education and hard work. From a
        young age, I was fascinated by how technology could change the way we live
        and work, which inspired me to pursue the TVL-ICT strand at the Western
        Institute of Technology, where I graduated.
      </p>
      <p className="p3">
        Driven by my passion for technology and its potential to solve real-world
        problems, I continued my education in a Bachelor of Science in
        Information Technology (BSIT) program, where I am currently in my 3rd
        year. During this time, I have been developing my skills and gaining a
        strong foundation in both the theoretical and practical aspects of IT.
      </p>
      <p className="p4">
        I am now seeking an opportunity to apply my skills and experiences in a
        professional environment where I can contribute to meaningful projects
        while continuing to learn and grow. My background in IT, combined with my
        dedication to perseverance, adaptability, and continuous learning, makes
        me eager to bring value to a team in the tech industry.
      </p>
      <h3 className="MySkills"> My Skills </h3>
      <div className="Skills">
        <ul>
            
            <li><img src={Icons1}></img>HTML </li> 
            <li><img src={Icons2}></img>CSS </li>
            <li><img src={Icons3}></img>FIGMA </li>
            <li><img src={Icons4}></img>REACTJS</li>
            <li><img src={Icons5}></img>NODEJS</li>
            <li><img src={Icons6}></img>VSCODE</li>

        </ul>
      </div>
    </div>
  );
};


export default AboutMe;