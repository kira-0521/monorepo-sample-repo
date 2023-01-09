import { ChangeEvent, FormEventHandler, useCallback, useState } from 'react'

import { MyForm } from '@/components/molecules/Forms'
import { MyInput } from '@/components/atoms/Forms/MyInput'
import { Box, FormControl, Input } from '@mui/material'

const Home = () => {
  const [formStates, setFormStates] = useState({
    email: '',
    password: '',
  })

  const handleChange = useCallback(
    (formLabel: 'email' | 'password') => (e: ChangeEvent<HTMLInputElement>) => {
      const label = formLabel
      setFormStates((form) => ({ ...form, [label]: e.target.value }))
    },
    [setFormStates]
  )

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault()
  }, [])
  return (
    <Box p="30px">
      <MyForm onSubmit={handleSubmit}>
        <FormControl>
          <MyInput label="email" onChange={handleChange('email')} />
        </FormControl>
        <FormControl>
          <MyInput label="password" onChange={handleChange('password')} />
        </FormControl>
        <Input type="submit" value="submit" />
      </MyForm>
    </Box>
  )
}

export default Home
