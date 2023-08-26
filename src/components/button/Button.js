import { ReactComponent as StarIcon } from "./star-filled.svg";
import "./button.css";

export default function Button({
  text,
  hasIcon,
  id,
  onToggleFavourite,
  isFavourite,
}) {
  function handleClick() {
    onToggleFavourite(id);
  }
  return hasIcon ? (
    <button type="button" onClick={handleClick} className="button__secondary">
      <StarIcon
        className={isFavourite ? `button__icon active` : `button__icon`}
      />
    </button>
  ) : (
    <button className="button__primary">{text}</button>
  );
}
