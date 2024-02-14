import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  await client.connect();
  const insertTodoQueryText = `INSERT INTO todos (title, description,user_id) VALUES ($1,$2,$3) RETURNING {title,description,done,id}`;
  const todoValues = [title, description, userId];
  const result = await client.query(insertTodoQueryText, todoValues);
  return result;
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  await client.connect();
  const updateTodoQueryText = `UPDATE todos SET done = $1 WHERE id = $2 RETURNING {title, description, done,id}`;
  const result = await client.query(updateTodoQueryText, [true, todoId]);
  return result;
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  await client.connect();
  const getTodosQueryText = `SELECT * todos WHERE user_id=$1`;
  const result = await client.query(getTodosQueryText, [userId]);
  return result;
}
