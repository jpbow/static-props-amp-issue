import Head from 'next/head'
import {useAmp} from "next/amp";
import styles from '../styles/Home.module.css'

export default function Home() {
  const isAmp = useAmp();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <p className={styles.description}>
          Expect to see the non-AMP version of the homepage by default.<br/>
          <a href="/index.amp">Click here</a> to visit the AMP version <small>(Only works when deployed)</small>
      </p>

        <p className={styles.description}>
            This is the: <b>{isAmp ? "AMP page" : "Non-AMP page"}</b>
        </p>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      items: ["one", "two"],
    },
  };
};

export const config = {
    amp: "hybrid"
}
