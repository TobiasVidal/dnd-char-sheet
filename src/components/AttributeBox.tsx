import { Attribute } from "../typings/attribute";

function AttributeBox(attribute: Attribute) {
    const modifier = attribute.modifier();
    return <li className="attribute-box card text-center my-2">
        <div className="card-header">
          <small>{attribute.name().toUpperCase()}</small>
        </div>
        <div className="card-body">
          <h2>{modifier > 0 ? "+" : null}{modifier}</h2>
          <span className="badge rounded-pill bg-light text-dark">{attribute.value}</span>
        </div>
    </li>;
  }
  
export default AttributeBox;
  