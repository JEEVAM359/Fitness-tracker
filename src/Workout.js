import React from 'react';

const Workout = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Workout Resources</h1>
      <p>Follow these workout videos and guides to stay fit and healthy!</p>

      {/* Workout Images */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        <img src="chest.jpg" alt="Workout 1" width="400" height="250" style={{border:"4px solid blue"}} />
        <img src="abs.jpg" alt="Workout 2" width="400" height="250" style={{border:"4px solid blue"}}/>
        <img src="leg.jpg" alt="Workout 3" width="400" height="250" style={{border:"4px solid blue"}} />
      </div>

      {/* Workout Videos */}
      <h2>Workout Videos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <iframe 
          width="400" 
          height="250" 
          src="https://www.youtube.com/embed/DHQ2U5sWMC4?si=XDssxOzph26k-GM0"  
          title="Workout Video 1" 
          frameBorder="0" 
          allowFullScreen>
        </iframe>

        <iframe 
          width="400" 
          height="250" 
          src="https://www.youtube.com/embed/9p7-YC91Q74?si=U2jcOVrdRSgNDYrC" 
          title="Workout Video 2" 
          frameBorder="0" 
          allowFullScreen>
        </iframe>

        <iframe 
          width="400" 
          height="250" 
          src="https://www.youtube.com/embed/EsxpZcApZDs?si=-eckW4C_B-j-u0Fm" 
          title="Workout Video 3" 
          frameBorder="0" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default Workout;
