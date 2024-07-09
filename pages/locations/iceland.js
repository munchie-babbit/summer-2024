import Head from "next/head";
import styles from "../../styles/Home.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import { Footer } from "../index";
import Link from "next/link";
const cursiveFont = localFont({ src: "../Juliette.otf" });

function Nav() {
  return (
    <nav
      style={{
        justifyContent: "left",
        fontSize: "3em",
        fontFamily: "monospace",
      }}
    >
      <Link href="/">
        <p>
          {" "}
          {"<"}
          <span className={cursiveFont.className}>Return home</span>
        </p>
      </Link>
    </nav>
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
          Iceland
        </p>
        <div className={styles.collage}>
          <Image
            src="/img/Iceland/01.png"
            width={3200}
            height={700}
            alt="Farms in iceland"
            unoptimized
          />
          <p>
            10 days . 100 things to do. Planned by a guy who only sleeps 5 hours
            a night. <br /> Iceland was a jam-packed adventure filled to the
            brim with foss after foss after foss. The plan was simple, 4 friends
            rent a car and drive around the ring road. We would spend the first
            and last night in AirBnbs and the rest camping. Little did we know
            that this would be a trip filled with f**ing expensive gas, 24 hour
            sunlight, and the most beautiful landscapes we had ever seen.
          </p>
          <Image
            src="/img/Iceland/IMG_1071.png"
            width={3000}
            height={800}
            alt="Rainbow road"
            unoptimized
          />

          <p>
            We arrived in Reykjavik tired and sleepy at 6am. We had taken the
            overnight flight from Hamilton airport instead of Toronto (where I
            lived) to save $50. Our first stop was MyCar rental, where we abused
            the free coffee/hot chocolate machine and napped until the last
            member of our party arrived from Detroit. Then we headed off on our
            Icelandic Fairytale Adventure! On our first day we hit up Rainbow
            road, BakaBaka for overpriced sausages and of course Costco.
          </p>
          <Image
            src="/img/Iceland/Untitled_Artwork 6.png"
            width={1000}
            height={600}
            alt="Elf school"
            unoptimized
          />

          <Image
            src="/img/Iceland/Untitled_Artwork.png"
            width={2000}
            height={500}
            alt="Glacier"
            unoptimized
          />

          <Image
            src="/img/Iceland/Untitled_Artwork 7.png"
            width={2000}
            height={700}
            alt="Glacier"
            unoptimized
          />
        </div>

        <Nav />
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
