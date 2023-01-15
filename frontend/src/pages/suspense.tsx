import { RenderingNotifier } from '@/components/suspense/AlwaysSuspend'
import { ReactQueryWithSuspense } from '@/components/suspense/ReactQueryWithSuspense'
import { NextPage } from 'next'

const SuspensePage: NextPage = () => (
  <div>
    <h2>ページのタイトル</h2>
    <RenderingNotifier name="outside-Suspense" />
    <ReactQueryWithSuspense />
  </div>
)

export default SuspensePage
