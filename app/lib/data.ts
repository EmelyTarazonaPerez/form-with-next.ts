import { object } from 'zod';
import {
  User,
  dtoUserUpdate,
} from './definitions';

const api = 'https://jsonplaceholder.typicode.com/users/1'

async function mapUser (json: User) {
    return {
      name: json.name,
      username: json.username,
      email: json.email,
      phone: json.phone,
      website: json.website,
    }
}

export async function getUser() {
  return await fetch(api)
    .then(res => res.json())
    .then (leer => mapUser(leer))
}

export async function updateUser(data: dtoUserUpdate) {
  await fetch(api, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => res.json())
    .then(res => console.log(res))
}
