import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from 'libs/api/user'
import React, { Suspense } from 'react'

export const ReactQueryWithSuspense = () => {
  const { data } = useQuery(['USERS'], fetchUsers)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Suspense>
  )
}
