import { MyInput } from '@/components/atoms/Forms/MyInput'
import { Box, FormControl, Input } from '@mui/material'

const Home = () => (
  <Box p="30px">
    <FormControl>
      <MyInput label="email" inputType="primary" />
    </FormControl>
    <FormControl>
      <MyInput label="password" inputType="primary" />
    </FormControl>
    <Input type="submit" value="submit" />
  </Box>
)

export default Home
