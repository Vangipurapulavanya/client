import "./AboutMe.scss";
import Me from "../../Assests/Images/Me.jpg";

export default function AboutMe() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="Me" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">Lavanya Vangipurapu here, hailing from Hyderabad.A full stack developer who is enthusiastic about creating distinctive and useful web applications.
I have a masters degree in HR and a bachelor's degree in IT.I have good foundation in Mongodb, HTML, CSS, and Node.js. 
Possessing effective communication and problem-solving skills as well as the ability to work effectively</p>
<button className="a-btn">Hire Me</button>
<button className="a-btn">Let's Talk</button>
      </div>
    </div>
  );
}
