declare module '@xtream-mfe-sspa-poc/ui-kit' {
import React from 'react';
  
  type Props = {
      label: string;
      onClick: React.MouseEventHandler;
  };
  const Button: React.FC<Props>;
  
  export { Button };
  
}
