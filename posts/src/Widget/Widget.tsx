import React from "react";

type Props = {
  s: string;
};

const Widget: React.FC<Props> = ({}) => {
  return <div>recent posts</div>;
};

Widget.displayName = "Widget";

export default Widget;
