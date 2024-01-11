import { useState } from 'react'


function App() {

  return (
    <>
      <aside className="side-bar"></aside>
      <div className="back-card"></div>
      <div className="front-card"></div>
      <div className="form">
        <p>CARDHOLDER NAME</p>
        <input type="text" name="" id="" placeholder='e.g.Jane Appleseed'/>
        <p>CARD NUMBER</p>
        <input type="number" name="" id="" placeholder='e.g. 1234 5678 9123 0000'/>
        <div className="exp_cvc_holder">
          <div className="exp">
            <p>EXP.DATE(MM/YY)</p>
            <input type="number" name="" id="" maxLength={2} placeholder='MM'/>
            <input type="number" name="" id="" maxLength={2} placeholder='YY'/>
          </div>
          <div className="cvc">
            <p>CVC</p>
            <input type="number" name="" id="" maxLength={3} placeholder='e.g. 123'/>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </>
  );
}

export default App
