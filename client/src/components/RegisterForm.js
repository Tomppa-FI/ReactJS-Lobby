import React, { useState } from "react";
import styles from "./css/Form.module.css";
import validateInput from "../utils/validateInput";

export default () => {
  const [userLogin, setUserLogin] = useState({});
  const [inputIsValid, setInputIsValid] = useState({});

  const handleChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    setUserLogin((prevState) => {
      return (
        {
          ...prevState,
          [name]: val
        }
      )
    });
  }

  const handleBlur = e => {
    const name = e.target.name;
    const val = e.target.value;
    const [isValid, msg] = validateInput(name, val, userLogin);
    if (isValid) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity(msg);
    }
    setInputIsValid({[name]: isValid});
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Username: </label>
          <input 
            className={inputIsValid.username === "undefined" ? styles.inputField : inputIsValid.username ? styles.inputField__valid : styles.inputField__invalid} 
            name="username"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Password: </label>
          <input
            className={inputIsValid.password === "undefined" ? styles.inputField : inputIsValid.password ? styles.inputField__valid : styles.inputField__invalid} 

            className={styles.inputField} 
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.inputLabel}>Repeat Password: </label>
          <input 
            className={inputIsValid.confirmPassword === "undefined" ? styles.inputField : inputIsValid.confirmPassword ? styles.inputField__valid : styles.inputField__invalid} 
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <input className={styles.submitBtn} type="submit" />
      </form>
    </div>
  )
}
