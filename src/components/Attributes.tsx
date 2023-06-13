import { Attribute } from "../typings/attribute";
import AttributeBox from "./AttributeBox";

function Attributes({ attributes }: { attributes: Attribute[] }) {
    return <ul className="attributes-list px-0">
        {attributes.map(x => <AttributeBox key={x.attribute.toString()} {...x}/>)}
    </ul>;
  }
  
export default Attributes;