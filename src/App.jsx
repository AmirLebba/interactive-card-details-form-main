import { useState } from 'react'


function App() {
  const [cardHolder,setCardHolder] = useState("")
  const [cardNumb, setCardNumb] = useState("");
  const [expDay, setExpDay] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardHolderChange =(e) =>{
    setCardHolder(e.target.value);
    
  }
  const handleCardNumbChange = (e) => {
    
    setCardNumb(e.target.value);
    
  };
  const handleExpDayChange = (e) => {
   
    setExpDay(e.target.value);
   
  };
  const handleExpMonthChange = (e) => {
    
    setExpMonth(e.target.value);
    
  };
  const handleCvcChange = (e) => {
    
    setCvc(e.target.value);
  };
  return (
    <>
      <aside className="side-bar"></aside>
      <div className="back-card">
        <p>{cvc}</p>
      </div>
      <div className="front-card">
        <svg
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
        <h1>{cardNumb}</h1>
        <p id="name">{cardHolder}</p>
        <p id="date">
          {expDay}/{expMonth}
        </p>
      </div>
      <div className="form">
        <p>CARDHOLDER NAME</p>
        <input
          type="text"
          value={cardHolder}
          onChange={handleCardHolderChange}
          name=""
          id=""
          placeholder="e.g.Jane Appleseed"
        />
        <p>CARD NUMBER</p>
        <input
          type="number"
          value={cardNumb}
          id="CardHolder"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={16}
          onChange={handleCardNumbChange}
        />
        <div className="exp_cvc_holder">
          <div className="exp">
            <p>EXP.DATE(MM/YY)</p>
            <input
              type="number"
              name=""
              id=""
              maxLength={2}
              placeholder="MM"
              onChange={handleExpDayChange}
              value={expDay}
            />
            <input
              type="number"
              name=""
              id=""
              maxLength={2}
              placeholder="YY"
              onChange={handleExpMonthChange}
              value={expMonth}
            />
          </div>
          <div className="cvc">
            <p>CVC</p>
            <input
              type="number"
              name=""
              id=""
              maxLength={3}
              placeholder="e.g. 123"
              onChange={handleCvcChange}
              value={cvc}
            />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </>
  );
}

export default App
