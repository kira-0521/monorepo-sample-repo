import React, { FC, useState } from 'react'

function sleep(ms: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
  await sleep(1000)
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}

const DataLoader: FC = () => {
  const [data, setData] = useState<string | null>(null)
  // dataがまだ無ければローディングを開始する
  if (data === null) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw fetchData1().then(setData)
  }
  // データがあればそれを表示
  return <div>Data is {data}</div>
}

export const MajiSuspense: FC = () => <div>MajiSuspense</div>
