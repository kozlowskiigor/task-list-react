import "./style.css";

const Form = () => (
  <form className="form">
    <input className="form__input" autoFocus placeholder="Jakie zadanie masz do zrobienia?" required
      name="input" />
    <button className="button">Dodaj zadanie</button>
  </form>
)

export default Form;