const USERS_API = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
  const response = await fetch(USERS_API);
  const users = await response.json();

  return users;
}
