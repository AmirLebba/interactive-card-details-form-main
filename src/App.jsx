import { useState } from 'react'
import tick from './Assets/icon-complete.svg'


function App() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumb, setCardNumb] = useState("");
  const [expDay, setExpDay] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [cvc, setCvc] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
  };
  const handleCardNumb = (e) => {
    setCardNumb(e.target.value);
  };
  const handleExpDay = (e) => {
    setExpDay(e.target.value);
  };
  const handleExpMonth = (e) => {
    setExpMonth(e.target.value);
  };
  const handleCvc = (e) => {
    setCvc(e.target.value);
  };
  const hadleClick = (e) => {
    setConfirm(!confirm);
  };
  
  /**
   * Renders the credit card form with inputs for
   * cardholder name, card number, expiration date,
   * and CVC code. Uses React state to store values.
   * Displays preview of card details. Handles input
   * changes to update state.
   */
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
      {!confirm && (
        <form  className="form">
          <label htmlFor='cardHolder'>CARDHOLDER NAME</label>
          <input
            type="text"
            value={cardHolder}
            onChange={handleCardHolder}
            name="cardHolder"
            id=""
            placeholder="e.g.Jane Appleseed"
            required
          />
          <label htmlFor='cardNumb'>CARD NUMBER</label>
          <input
            type="text"
            value={cardNumb
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            name='cardNumb'
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            onChange={handleCardNumb}
            required
          />
          
          <div className="exp_cvc_holder">
            <div className="exp">
              <label htmlFor='MM'>EXP.DATE(MM/YY)</label>
              <input
                type="text"
                name="MM"
                id="Month"
                maxLength={2}
                placeholder="MM"
                onChange={handleExpDay}
                value={expDay}
              />
              <input
                type="text"
                name="YY"
                id="Year"
                maxLength={2}
                placeholder="YY"
                onChange={handleExpMonth}
                value={expMonth}
              />
            </div>
            <div className="cvc">
              <label htmlFor='CVC'>CVC</label>
              <input
                type="text"
                name="CVC"
                id="CVC"
                maxLength={3}
                placeholder="e.g. 123"
                onChange={handleCvc}
                value={cvc}
              />
              
            </div>
          </div>
          <button onClick={hadleClick}>Confirm</button>
        </form>
      )}
      {confirm && <ThankYou setConfirm={setConfirm} />}
    </>
  );
}

export default App


/*confirmation complite app*/

function ThankYou({ setConfirm }) {
  return (
    <>
      <div className="confirmation">
        <img src={tick} alt="" />
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
        <button onClick={() => setConfirm(false)}>Continue</button>
      </div>
    </>
  );
}