import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  await client.connect();
  const insertUserQueryText = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING {username,password,name}`;
  const result = await client.query(insertUserQueryText, [
    username,
    password,
    name,
  ]);
  return result;
  //   console.log("User created :- ", result);
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  await client.connect();
  const getUserQueryText = `SELECT * FROM users WHERE id = $1 RETURNING {username,password,name}`;
  const result = await client.query(getUserQueryText, [userId]);
  return result;
  //   console.log("User :- ", result);
}
