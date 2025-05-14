import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Photographer" 
            className="profile-image"
          />
        </div>
        
        <div className="about-text">
          <h2>John Doe</h2>
          <h3>Fine Art Photographer</h3>
          
          <p>
            With over a decade of experience capturing the essence of urban landscapes and human emotion, 
            I specialize in black and white photography that tells compelling stories through contrast and composition.
          </p>
          
          <p>
            My work has been featured in galleries across Europe and North America, with publications 
            in leading photography magazines including Aperture and Black+White Photography.
          </p>
          
          <div className="about-details">
            <div className="detail-item">
              <h4>Education</h4>
              <p>MFA Photography, School of Visual Arts, New York</p>
              <p>BA Fine Arts, Central Saint Martins, London</p>
            </div>
            
            <div className="detail-item">
              <h4>Exhibitions</h4>
              <p>Solo Exhibition, "Shadows & Light", New York, 2023</p>
              <p>Group Show, "Urban Perspectives", London, 2022</p>
              <p>Feature Exhibition, Paris Photo, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;