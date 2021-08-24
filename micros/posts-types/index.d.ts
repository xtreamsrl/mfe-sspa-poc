declare module '@xtream-mfe-sspa-poc/posts' {
/// <reference types=".pnpm/single-spa@5.9.3/node_modules/single-spa" />
  import * as single_spa from 'single-spa';
  import React from 'react';
  
  type Props = {};
  const LastPosts: React.FC<Props>;
  
  const bootstrap: single_spa.LifeCycleFn<{}>;
  const mount: single_spa.LifeCycleFn<{}>;
  const unmount: single_spa.LifeCycleFn<{}>;
  
  export { LastPosts, bootstrap, mount, unmount };
  
}
