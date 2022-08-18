import Head from 'next/head'
import Banner from '../components/Banner';
import Filters from '../components/Filters';
import Header from '../components/Header';
import LeaderSection from '../components/LeaderSection';
import SideNavbar from '../components/SideNavbar';
import styles from '../styles/Home.module.css'
import { getLeaders } from '../utils/functions';

export default function Home(props) {
  const { users } = props,
    leadersList = getLeaders(users);
  console.log('totalusers', users);
  return (
    <div className={styles['container']}>
      <Head>
        <title>Leader Board</title>
        <meta name="description" content="Breville Wall of Gratitude" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles['main']}>
      <Banner />
        <h1 className={styles['title']}>
          <img src='/static/images/cup.png' /> Gratitude Leaderboard
        </h1>
        <Filters />
        {
          leadersList.length && <div className={styles['main-section']}>
            <SideNavbar />
            <LeaderSection leaders={leadersList}/>
          </div>
        }
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/users`);
  // extract the data
  let data = await response.json();

  return {
      props: {
          users: data['message'],
      },
  };
}
