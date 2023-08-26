import Button from "../button/Button";
import "./card.css";

export default function Card({
  id,
  date,
  motto,
  notes,
  onToggleFavourite,
  isFavourite,
}) {
  return (
    <li className="card__container">
      <p className="card__date">{date}</p>
      <div className="card__headline">
        <h2>{motto}</h2>
        <Button
          hasIcon
          id={id}
          onToggleFavourite={onToggleFavourite}
          isFavourite={isFavourite}
        />
      </div>
      <p className="card__description">{notes}</p>
    </li>
  );
}
