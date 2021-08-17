import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Content({ type, price, list }) {
  return (
    <div className="card">
      <div className="type0">{type}</div>
      <div>
        <span className="doll">{price}</span>
        <span className="mon">/month</span>
      </div>
      <hr></hr>
      <ul>
        {list.map((el) => (
          <li className={el.isEn ? "type" : "type type1"}>
            <span>
              {el.isEn ? (
                <FontAwesomeIcon icon={faCheck} fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faTimes} fixedWidth />
              )}
            </span>
            {el.name}
          </li>
        ))}
      </ul>
      <button type="submit" className="btn1">
        BUTTON
      </button>
    </div>
  );
}
