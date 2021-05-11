import React from 'react';

function Parts({props}) {
  return <h1>Computer has {props}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>wow!</h1>
      <Parts props="CPU" />
      <Parts props="GPU" />
      <Parts props="SSD" />
    </div>
    
  );
}

export default App;
