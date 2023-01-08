import { useCallback, useState } from 'react'

import { OverrideTypography, PrimaryButton } from '../components/atoms'

const Home = () => {
  const [state, setState] = useState(false)
  const handleClick = useCallback(() => setState((s) => !s), [setState])
  return (
    <div>
      <PrimaryButton onClick={handleClick}>Children Desu</PrimaryButton>
      {state && <OverrideTypography variant="h1">Hello</OverrideTypography>}
    </div>
  )
}

export default Home
