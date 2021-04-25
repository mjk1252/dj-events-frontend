import styles from '@/styles/Layout.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other music',
  keywords: 'music, dj, edm, events',
}
