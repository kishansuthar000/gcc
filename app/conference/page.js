import Link from "next/link";
import Image from "next/image";
import ConferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";

export default function Conference() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt="Conference pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Globomantics Conference</h1>
      <nav>
        <ul>
          <li className={styles.bgText}>
            <Link className={styles.bgLinks} href={"/conference/sessions"}>
              Sessions
            </Link>
          </li>
          <li className={styles.bgText}>
            <Link className={styles.bgLinks} href={"/conference/speakers"}>
              Speakers
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
