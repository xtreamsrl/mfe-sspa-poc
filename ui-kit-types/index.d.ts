declare module '@xtream-mfe-sspa-poc/ui-kit' {
import React from 'react';
  export { default as Grid } from '@material-ui/core/Grid';
  export { default as Card } from '@material-ui/core/Card';
  export { default as CardContent } from '@material-ui/core/CardContent';
  export { default as Typography } from '@material-ui/core/Typography';
  export { default as Avatar } from '@material-ui/core/Avatar';
  export { default as CircularProgress } from '@material-ui/core/CircularProgress';
  export { default as Box } from '@material-ui/core/Box';
  export { styled } from '@material-ui/core/styles';
  
  type Props$1 = {
      label: string;
      onClick: React.MouseEventHandler;
  };
  const Button: React.FC<Props$1>;
  
  type Props = {
      path: string;
  };
  const NavLink: React.FC<Props>;
  
  export { Button, NavLink };
  
}
