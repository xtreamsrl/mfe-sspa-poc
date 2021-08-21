import React from 'react';
import MUIButton from "@material-ui/core/Button";

type Props = {
  label: string;
  onClick: React.MouseEventHandler;
};

const Button: React.FC<Props> = ({
  label,
  onClick,
}) => {
  return (
    <MUIButton onClick={onClick}>
      {label}
    </MUIButton>
  );
};

Button.displayName = 'Button';

export default Button;
