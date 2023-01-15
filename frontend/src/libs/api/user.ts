import { User } from '@/@types/user'
import axios from 'axios'

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  )
  return data
}
