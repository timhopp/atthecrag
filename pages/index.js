import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { Component } from "react";
import Post from "../components/post";

function Home({ profiles, page, pageCount }) {
  const postProfile = (info) => {
    console.log("hit", info);
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>At The Crag</title>
          <link rel="icon" href="/favicon.ico" />
          <button onClick={postProfile("why")}> Post Pleaase </button>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to At The Crag</h1>
          <h5 className={styles.description}>
            Share your funniest stories overheard while climbing
          </h5>

          <p className={styles.description}>
            Get started by checking out one of these local crags
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>The Black Cliffs</h3>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>The Fins</h3>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Swan Falls</h3>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>City of Rocks</h3>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
      <div>
        <Post> </Post>
      </div>

      <ul>
        {profiles.map((p) => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </>
  );
}

//   function postProfileButton() {
//     // const res = await fetch(`http://localhost:3000/api/profiles`);
//     function postProfile() {
//       return console.log("Hit");
//     }

//     return (
//     <button onClick={postProfile}> Post Please</button>
//     );
// }

export async function getServerSideProps({ req, query }) {
  // const protocol = req.headers["x-forwarded-proto"];
  const host = req.headers["x-forwarded-host"];
  const page = query.page || 1;
  const limit = query.limit || 9;

  const res = await fetch(
    `http://localhost:3000/api/profiles?page=${page}&limit=${limit}`
  );
  const data = await res.json();

  return { props: data };
}

export default Home;
