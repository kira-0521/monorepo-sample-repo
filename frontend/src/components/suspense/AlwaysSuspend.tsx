import { FC } from 'react'

function sleep(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const AlwaysSuspend: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  throw sleep(1000)
}

export const SometimesSuspend: FC = () => {
  if (Math.random() < 0.5) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw sleep(1000)
  }
  return <p>Hello, world!</p>
}

type Props = {
  name: string
}

export const RenderingNotifier: React.VFC<Props> = ({ name }) => {
  // eslint-disable-next-line no-console
  console.log(`${name} is rendered`)

  return null
}
