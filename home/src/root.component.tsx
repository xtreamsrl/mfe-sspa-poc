import { Widget } from "@xtream-mfe-sspa-poc/posts";

import("@xtream-mfe-sspa-poc/posts").then((res) => console.log(res.default));

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! reload

  <Widget></Widget></section>);
}
