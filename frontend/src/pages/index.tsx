import { MyRhfInput } from '@/components/atoms/Forms/MyRhfInput'
import { MyRhfSelect } from '@/components/atoms/Forms/MyRhfSelect'
import { Box } from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Forms = {
  example: string
  exampleRequired: string
  gender: 'male' | 'female' | 'other'
}

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Forms>()

  const onSubmit: SubmitHandler<Forms> = useCallback((data, e) => {
    e?.preventDefault()
    // eslint-disable-next-line no-console
    console.log(data)
  }, [])

  const [input, setInput] = useState('')
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    [setInput]
  )

  return (
    <Box>
      <Box p="30px">
        <h2>Hook Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyRhfInput
            defaultValue="test"
            register={register('example', { maxLength: 20 })}
          />
          {errors.example && <span>{errors.example.message}</span>}
          <MyRhfInput
            register={register('exampleRequired', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 10,
              minLength: 1,
            })}
          />
          {errors.exampleRequired && (
            <span>{errors.exampleRequired.message}</span>
          )}
          <MyRhfSelect
            registered={register('gender', { required: true })}
            options={[
              { label: '男', value: 'male' },
              { label: '女', value: 'female' },
              { label: 'その他', value: 'other' },
            ]}
          />
          <input type="submit" />
        </form>
      </Box>
      <Box p="30px">
        <h2>No Hook Form</h2>
        <input type="text" value={input} onChange={handleChange} />
      </Box>
    </Box>
  )
}

export default Home
