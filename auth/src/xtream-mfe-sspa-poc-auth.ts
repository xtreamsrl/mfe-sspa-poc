type User = {}
let currentUser: User | null = null;

async function restoreUser() {
  return currentUser;
}

type AuthListener = (user: User | null) => void

const authListeners: AuthListener[] = [];

export function onAuthStatusChange(listener: AuthListener) {
  authListeners.push(listener);

  return () => {
    const index = authListeners.indexOf(listener);
    if (index > -1) {
      authListeners.splice(index, 1);
    }
  };
}

export async function setCurrentUser(user: User | null) {
  currentUser = user;
  setTimeout(() => authListeners.forEach(f => f(user)));
}


export async function getCurrentUser(user: User | null) {
  return user;
}
