import React from 'react';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

const App = () => {
  return (
    <div className="App">
      <div className="business-card">
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
    </div>
  );
};

export default App;
