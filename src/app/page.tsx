/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Link from "next/link";
import styles from "./index.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Cocktail <span className={styles.pinkSpan}>Factory</span>
        </h1>

        <Link href="/cocktails">
          <div
            style={{
              border: "2px solid white",
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              color: "white",
            }}
          >
            Get started
          </div>
        </Link>
      </div>
    </main>
  );
}

// "#cc66ff"
