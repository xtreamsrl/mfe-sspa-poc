declare module '@xtream-mfe-sspa-poc/posts' {
/// <reference types="single-spa" />
  import * as single_spa from 'single-spa';
  import React from 'react';
  
  type Props = {};
  const Widget: React.FC<Props>;
  
  const bootstrap: single_spa.LifeCycleFn<any>;
  const mount: single_spa.LifeCycleFn<any>;
  const unmount: single_spa.LifeCycleFn<any>;
  
  export { Widget, bootstrap, mount, unmount };
  
}
