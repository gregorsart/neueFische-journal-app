import Button from "../button/Button";
import "./form.css";

export default function Form({ onAddEntry }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }
  return (
    <>
      <h1>New Entry</h1>
      <form onSubmit={onSubmit}>
        <div className="ga-flex input__container">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" />
        </div>
        <div className="ga-flex textarea__container">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="5"></textarea>
        </div>
        <Button text="Create" hasIcon={false} />
      </form>
    </>
  );
}
