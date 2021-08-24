import { Activity, CustomPropsFn, registerApplication, start, navigateToUrl, pathToActiveWhen } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';
import { onAuthStatusChange } from '@xtream-mfe-sspa-poc/auth';

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

let user: object | null = null;

const appNotRequiringAuth = [
  '@xtream-mfe-sspa-poc/login',
];

onAuthStatusChange(currentUser => {
  user = currentUser;
  console.debug('onAuthStatusChange', currentUser);
  if (currentUser) {
    navigateToUrl('/home');
  }else {
    navigateToUrl('/login');
  }
});

function wrapActivationWithUserCheck(activity: Activity, name: string) {

  let funcs: ((location: Location) => boolean)[];

  if (typeof activity === 'string') {
    funcs = [pathToActiveWhen(activity)];
  } else if (typeof activity === 'function') {
    funcs = [activity];
  } else {
    funcs = activity.map(a=>typeof a ==='string'?pathToActiveWhen(a):a);
  }

  return (location: Location) => {
    if (name === '@xtream-mfe-sspa-poc/login') {
      return !user;
    }

    return user ? funcs.some(f=>f(location)) : false;
  };
}

applications.forEach(value => {
  registerApplication({
    name: value.name,
    app: value.app,
    activeWhen: appNotRequiringAuth.includes(value.name) ? value.activeWhen : wrapActivationWithUserCheck(value.activeWhen, value.name),
    customProps: value.customProps,
  });
});
layoutEngine.activate();
start();

function test(ev:any){
  console.debug('ev', ev);
  return false;
}

window.addEventListener("single-spa:before-routing-event", test);
