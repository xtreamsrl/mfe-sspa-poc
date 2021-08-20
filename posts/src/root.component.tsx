import Widget from "./Widget";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Widget s="s"></Widget>
    </section>
  );
}
