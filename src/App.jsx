import React, { useState } from "react";

function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

  // State to manage form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to manage error messages for each input field
  const [formErrors, setFormErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data state
    setFormData({ ...formData, [name]: value });
    // Reset the error message when the user starts typing
    setFormErrors({ ...formErrors, [name]: "" });
  };

  // Form submission handler
  const handleSubmit = () => {
    // Validation logic
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "Can't be blank";
      }
    });

    if (Object.keys(errors).length === 0) {
      // If no errors, proceed to the completion form
      setFormSubmitted(true);
    } else {
      // If there are errors, update the state to display error messages
      setFormErrors(errors);
    }
  };

  
  

  // Render the main form
  return (
    <>
      <aside className="side-bar"></aside>
      <div className="back-card">
        <p>012</p>
      </div>
      <div className="front-card">
        <svg
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <h1>{formData.cardNumber}</h1>
        <p id="name">FELICIA LEIRE</p>
        <p id="date">09/00</p>
      </div>
      <div className="form">
        {/* Input for cardholder name */}
        <p>CARDHOLDER NAME</p>
        <input
          type="text"
          name="cardholderName"
          value={formData.cardholderName}
          onChange={handleChange}
          placeholder="e.g. Jane Appleseed"
          style={{ borderColor: formErrors.cardholderName ? "red" : "" }}
        />
        {formErrors.cardholderName && (
          <p style={{ color: "red" }} className="alart">
            {formErrors.cardholderName}
          </p>
        )}

        {/* Input for card number */}
        <p>CARD NUMBER</p>
        <input
          name="cardNumber"
          value={formData.cardNumber}
          maxLength={16}
          onChange={handleChange}
          placeholder="e.g. 1234 5678 9123 0000"
          style={{ borderColor: formErrors.cardNumber ? "red" : "" }}
        />
        {formErrors.cardNumber && (
          <p style={{ color: "red" }} className="alart">
            {formErrors.cardNumber}
          </p>
        )}

        {/* ... Repeat similar code for other input fields ... */}

        {/* Input for expiration date and CVC */}
        <div className="exp_cvc_holder">
          <div className="exp">
            <p>EXP.DATE(MM/YY)</p>
            <input
              type="number"
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleChange}
              maxLength={2}
              placeholder="MM"
              style={{ borderColor: formErrors.expiryMonth ? "red" : "" }}
            />

            <input
              type="number"
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
              maxLength={2}
              placeholder="YY"
              style={{ borderColor: formErrors.expiryYear ? "red" : "" }}
            />
          </div>
          <div className="cvc">
            <p>CVC</p>
            <input
              type="number"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              maxLength={3}
              placeholder="e.g. 123"
              style={{ borderColor: formErrors.cvc ? "red" : "" }}
            />
            {formErrors.cardNumber && (
              <p style={{ color: "red" }} className="alart">
                {formErrors.cardNumber}
              </p>
            )}
          </div>
        </div>
        <div>
          {formErrors.cardNumber && (
            <p style={{ color: "red" }} className="alart">
              {formErrors.cardNumber}
            </p>
          )}
        </div>
        {/* Confirm button */}
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </>
  );
}

export default App;
