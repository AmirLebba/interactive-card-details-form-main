import { useState, useEffect } from "react";
import tick from "./Assets/icon-complete.svg";

function App() {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumb: "",
    expMonth: "",
    expYear: "",
    cvc:"",
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleFormSubmit = () => {
    const validationErrors = {};

    if (!formData.cardHolder.trim()) {
      validationErrors.cardHolder = "Name can't be blank";
    } else if (!/^[a-zA-Z ]+$/.test(formData.cardHolder)) {
      validationErrors.cardHolder = "Name is not valid";
    }

    const cardNumbWithoutSpaces = formData.cardNumb.replace(/\s/g, "");
    if (!cardNumbWithoutSpaces.trim()) {
      validationErrors.cardNumb = "Card number is required";
    } else if (
      !/^\d+$/.test(cardNumbWithoutSpaces) ||
      cardNumbWithoutSpaces.length !== 16
    ) {
      validationErrors.cardNumb = "Card number is not valid";
    }

    if (!formData.expMonth.trim()) {
      validationErrors.expMonth = <span>can't be blank</span>;
    }

    if (!formData.expYear.trim()) {
      validationErrors.expYear = <span>can't be blank</span>;
    }

    if (!formData.cvc.trim()) {
      validationErrors.cvc = "CVC can't be blank";
    }

    return validationErrors;
  };

  return (
    <>
      <aside className="side-bar"></aside>
      <div className="back-card">
        <p>{formData.cvc}</p>
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
        <h1>{formData.cardNumb}</h1>
        <p id="name">{formData.cardHolder}</p>
        <p id="date">
          {formData.expMonth}/{formData.expYear}
        </p>
      </div>
      {!formValid && (
        <form className="form" onSubmit={handleFormSubmit}>
          <label htmlFor="cardHolder">CARDHOLDER NAME</label>
          <input
            type="text"
            value={formData.cardHolder}
            onChange={handleChange}
            name="cardHolder"
            id="cardHolder"
            placeholder="e.g.Jane Appleseed"
            required
          />
          {validationErrors.cardHolder && (
            <span>{validationErrors.cardHolder}</span>
          )}
          <label htmlFor="cardNumb">CARD NUMBER</label>
          <input
            type="text"
            value={formData.cardNumb
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            name="cardNumb"
            id="cardNumb"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            onChange={handleChange}
            required
          />
          {validationErrors.cardNumb && (
            <span>{validationErrors.cardNumb}</span>
          )}

          <div className="exp_cvc_holder">
            <div className="exp">
              <label htmlFor="MM">EXP.DATE(MM/YY)</label>
              <input
                type="text"
                name="expMonth"
                id="MM"
                maxLength={2}
                placeholder="MM"
                onChange={handleChange}
                value={formData.expMonth}
                required
              />

              <input
                type="text"
                name="expYear"
                id="YY"
                maxLength={2}
                placeholder="YY"
                onChange={handleChange}
                value={formData.expYear}
                required
              />
              {validationErrors.expMonth ||
                (validationErrors.expYear && (
                  <span>{validationErrors.expYear}</span>
                ))}
            </div>
            <div className="cvc">
              <label htmlFor="CVC">CVC</label>
              <input
                type="text"
                name="cvc"
                id="CVC"
                maxLength={3}
                placeholder="e.g. 123"
                onChange={handleChange}
                value={formData.cvc}
                required
              />
              {validationErrors.cvc && <span>{validationErrors.cvc}</span>}
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      )}
      {formValid && <ThankYou setConfirm={setFormValid} />}
    </>
  );
}

export default App;

/*confirmation complite app*/

function ThankYou({ setFormValid }) {
  return (
    <>
      <div className="confirmation">
        <img src={tick} alt="" />
        <h1>Thank you!</h1>
        <p>We've added your card details</p>
        <button onClick={() => setFormValid(false)}>Continue</button>
      </div>
    </>
  );
}
