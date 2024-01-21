import { useState, useEffect } from "react";
import tick from "./Assets/icon-complete.svg";

function App() {
  const [initialData, setInitialData] = useState({
    cardHolder: "jane appleseed",
    cardNumb: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  });
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

    // Update border color based on validation errors
    const updatedValidationErrors = { ...validationErrors };

    switch (name) {
      case "cardHolder":
        updatedValidationErrors.cardHolder =
          value.trim() === "" || !/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)
            ? "Name is not valid"
            : "";
        break;
      case "cardNumb":
        const cardNumbWithoutSpaces = value.replace(/\s/g, "");
        updatedValidationErrors.cardNumb =
          cardNumbWithoutSpaces.trim() === "" ||
          !/^\d+$/.test(cardNumbWithoutSpaces) ||
          cardNumbWithoutSpaces.length !== 16
            ? "Wrong format, numbers only"
            : "";
        break;
      case "expMonth":
        updatedValidationErrors.expMonth =
          value.trim() === "" || !/^\d+$/.test(value) ? "Must be a number" : "";
        break;
      case "expYear":
        updatedValidationErrors.expYear =
          value.trim() === "" || !/^\d+$/.test(value) ? "Must be a number" : "";
        break;
      case "cvc":
        updatedValidationErrors.cvc =
          value.trim() === "" || !/^\d+$/.test(value) ? "Must be a number" : "";
        break;
      default:
        break;
    }

    setValidationErrors(updatedValidationErrors);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.cardHolder.trim()) {
      validationErrors.cardHolder = "can't be blank";
    } else if (!/^[a-zA-Z ]+$/.test(formData.cardHolder)) {
      validationErrors.cardHolder = "Wrong format, letters only";
    }

    const cardNumbWithoutSpaces = formData.cardNumb.replace(/\s/g, "");
    if (!cardNumbWithoutSpaces.trim()) {
      validationErrors.cardNumb = "Card number is required";
    } else if (
      !/^\d+$/.test(cardNumbWithoutSpaces) ||
      cardNumbWithoutSpaces.length !== 16
    ) {
      validationErrors.cardNumb = "Wrong format, numbers only";
    }

    if (!formData.expMonth.trim()) {
      validationErrors.expMonth = "can't be blank";
    }

    if (!formData.expYear.trim()) {
      validationErrors.expYear = "can't be blank";
    }

    if (!formData.cvc.trim()) {
      validationErrors.cvc = "can't be blank";
    }

    setValidationErrors(validationErrors);

    const isValid = Object.keys(validationErrors).length === 0;
    setFormValid(isValid);

    
  };

  return (
    <>
      <aside className="side-bar"></aside>
      <div className="back-card">
        <p>{formData.cvc || initialData.cvc}</p>
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
        <h1>{formData.cardNumb || initialData.cardNumb}</h1>
        <p id="name">{formData.cardHolder || initialData.cardHolder}</p>
        <p id="date">
          {formData.expMonth || initialData.expMonth}/
          {formData.expYear || initialData.expYear}
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
            style={{
              borderColor:
                validationErrors.cardHolder === ""
                  ? "hsl(249, 99%, 64%)" // Set to blue if there's no error
                  : validationErrors.cardHolder
                  ? "hsl(0, 100%, 66%)" // Set to red if there's an error
                  : "",
            }}
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
            style={{
              borderColor:
                validationErrors.cardNumb === ""
                  ? "hsl(249, 99%, 64%)" // Set to blue if there's no error
                  : validationErrors.cardNumb
                  ? "hsl(0, 100%, 66%)" // Set to red if there's an error
                  : "",
            }}
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
                style={{
                  borderColor:
                    validationErrors.expMonth === ""
                      ? "hsl(249, 99%, 64%)" // Set to blue if there's no error
                      : validationErrors.expMonth
                      ? "hsl(0, 100%, 66%)" // Set to red if there's an error
                      : "",
                }}
              />

              <input
                type="text"
                name="expYear"
                id="YY"
                maxLength={2}
                placeholder="YY"
                onChange={handleChange}
                value={formData.expYear}
                style={{
                  borderColor:
                    validationErrors.expYear === ""
                      ? "hsl(249, 99%, 64%)" // Set to blue if there's no error
                      : validationErrors.expYear
                      ? "hsl(0, 100%, 66%)" // Set to red if there's an error
                      : "",
                }}
              />
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
                style={{
                  borderColor:
                    validationErrors.cvc === ""
                      ? "hsl(249, 99%, 64%)" // Set to blue if there's no error
                      : validationErrors.cvc
                      ? "hsl(0, 100%, 66%)" // Set to red if there's an error
                      : "",
                }}
              />
            </div>
          </div>
          <div className="errorDisplayer">
            <span className="expError">
              {validationErrors.expMonth ||
                validationErrors.expYear && 
                  <span>{validationErrors.expYear}</span>
                }
            </span>
            <span className="cvcError">
              {validationErrors.cvc && <span>{validationErrors.cvc}</span>}
            </span>
          </div>
          <button type="submit">Confirm</button>
        </form>
      )}
      {formValid && <ThankYou setFormValid={setFormValid} />}
    </>
  );
}

export default App;

/*confirmation complite app*/

function ThankYou({ setFormValid }) {
  const handleContinue = () => {
    setFormValid(false);
    window.location.reload(); // Reload the page
  };

  return (
    <>
      <div className="confirmation">
        <img src={tick} alt="" />
        <h1>THANK YOU !</h1>
        <p>We've added your card details</p>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
}
