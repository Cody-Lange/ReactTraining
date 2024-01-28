import React from 'react';
import ContactButtons from './ContactButtons'; 

const CardBody = () => {
  return (
    <div className="card-body">
      <h1>Cody Lange</h1>
      <h2>Full Stack Data Scientist</h2>
      <h3>[Insert Super Awesome Website Here]</h3>
      <ContactButtons />
      <div className="about-and-interests">
        <h4>About</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.</p>
        <h4>Interests</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a.</p>
      </div>
    </div>
  );
};

export default CardBody;


