import '../pages/style.css';
import myPic from '../images/picko.png';

function LandingPage() {
    return (
        <div className="landing-page">
            
            <div className="top">
                <p>HEY, I'M</p>
            </div>
            <div className="bottom">
                
                
                    <h4>JUDE ALLIAH SALAPANTAN</h4>
                
                <div className="my-pic">
                    <img src={myPic} alt="pic ko" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
