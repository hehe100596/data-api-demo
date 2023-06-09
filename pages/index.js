import Head from "next/head";
import styles from "../styles/Home.module.css";
import DataTable from "../components/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data API Demo</title>
      </Head>

      <main>
        <DataTable
          chain="ethereum"
          address="0x39ee2c7b3cb80254225884ca001f57118c8f21b6"
          event="tokenTransfer"
        />
      </main>

      <footer>
        <a
          href="https://docs.tatum.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data API Demo
          <img src="/tatum_logo.svg" alt="Tatum" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
