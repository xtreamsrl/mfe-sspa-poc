declare module '@xtream-mfe-sspa-poc/ui-kit' {
export { default as Avatar } from '@material-ui/core/Avatar';
  export { default as Box } from '@material-ui/core/Box';
  export { default as Button } from '@material-ui/core/Button';
  export { default as Card } from '@material-ui/core/Card';
  export { default as CardContent } from '@material-ui/core/CardContent';
  export { default as CircularProgress } from '@material-ui/core/CircularProgress';
  export { default as Grid } from '@material-ui/core/Grid';
  export { default as TextField } from '@material-ui/core/TextField';
  export { default as Typography } from '@material-ui/core/Typography';
  export { styled } from '@material-ui/core/styles';
  import React from 'react';
  
  type Props = {
      path: string;
  };
  const NavLink: React.FC<Props>;
  
  export { NavLink };
  
}
