import Head from "next/head";
import styles from "../styles/Home.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
const cursiveFont = localFont({ src: "./Juliette.otf" });

function GridItem({ image, title, dates, link }) {
  return (
    <div className={styles.gridItem}>
      {link ? (
        <Link href={"/locations" + link}>
          <Image
            src={image ? image : "/img/Placeholder.png"}
            width={200}
            height={200}
            alt={image ? title : "Coming Soon"}
            unoptimized
          />
          <div>
            <p style={{ marginBottom: 0 }} className={styles.description}>
              {title ? title : "coming soon"}
            </p>
            <p className={styles.code}>{dates ?? "tbd"}</p>
          </div>
        </Link>
      ) : (
        <>
          <Image
            src={image ? image : "/img/Placeholder.png"}
            width={200}
            height={200}
            alt={image ? title : "Coming Soon"}
            unoptimized
          />
          <div>
            <p style={{ marginBottom: 0 }} className={styles.description}>
              {title ? title : "coming soon"}
            </p>
            <p className={styles.code}>{dates ?? "tbd"}</p>
          </div>
        </>
      )}
    </div>
  );
}
export function Footer() {
  return (
    <footer>
      <p className={styles.header}>
        Adventures by{" "}
        <a href="https://www.estellechung.com/" target="_blank">
          Estelle.
        </a>{" "}
        <br />
        <span>
          Made with help from{" "}
          <a href="https://www.wand.app/" target="_blank">
            Wand
          </a>
        </span>
        .
      </p>
    </footer>
  );
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Summer 2024</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cursiveFont.className}>
        <p style={{ maxWidth: "100vw" }} className={styles.title}>
          One summer across the world
        </p>

        <p
          style={{
            maxWidth: "36vw",
            marginTop: "4em",
            marginBottom: "4em",
            textAlign: "center",
          }}
          className={styles.code}
        >
          In the summer of 2024 I quit my job as a developer and travelled
          around the world. I visited visited 8 countries in 3 months and
          documented my adventures through collage + illustration with the help
          of an AI drawing tool called{" "}
          <a href="https://www.wand.app/" target="_blank">
            Wand
          </a>
          .
        </p>
        <div>
          <Image
            src="/img/IMG_0981.PNG"
            width={1200}
            height={600}
            alt="Map of the world"
            unoptimized
          />
        </div>
        <div className={styles.grid}>
          {/* Row */}
          <GridItem
            image="/img/Iceland.png"
            title="iceland"
            dates="June 13 to June 22"
            link="/iceland"
          />
          <GridItem />
          <GridItem />
          {/* Row */}
          <GridItem />
          <GridItem />
          <GridItem />
          {/* Row */}
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
        <Footer />
      </main>

      <style jsx>{`
        main {
          max-height: 100vh;
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;

          /* Hide scrollbar for WebKit browsers */
          ::-webkit-scrollbar {
            display: none;
          }
        }

        /* Hide scrollbar for Firefox */
        main {
          scrollbar-width: none;
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
          background-color: #fcf7f0;
          background-size: 34px 34px;
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzcuNzk1Mjc1NTkwNiIgaGVpZ2h0PSIzNy43OTUyNzU1OTA2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8cGF0aCBkPSJNIDAgMC41IEwgMzcuNzk1Mjc1NTkwNiAwLjUiIHN0cm9rZT0iI2E0YmFkZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4gPHBhdGggZD0iTTAuNSAwIEwgMC41IDM3Ljc5NTI3NTU5MDYiIHN0cm9rZT0iI2E0YmFkZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4gPC9zdmc+");
          background-repeat: repeat;
          height: 100vh;
          overflow: hidden;
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
