import Widget from "./Widget";
import {Button} from '@xtream-mfe-sspa-poc/ui-kit';

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Widget s="s"></Widget>
      <Button label="test" onClick={()=>({})}/>
    </section>
  );
}
