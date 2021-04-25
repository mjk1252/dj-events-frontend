import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

export default function eventPage() {
  const router = useRouter()

  console.log(router.query)
  return (
    <Layout>
      <h1>My Event</h1>
      <p>{router.query.slug}</p>
    </Layout>
  )
}
