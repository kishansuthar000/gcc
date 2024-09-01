// "use client";

import styles from "../conference.module.css";

async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

export default async function Sessions() {
  const data = await fetchSessions();
  return (
    <div className={styles.parentContainer}>
      <div>Last Rendered: {new Date().toLocaleTimeString()}</div>
      <h1>Welcome to Globomantics Sessions</h1>
      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ id, name }) => (
                <h3 key={id} className={styles.titleText}>
                  Speaker: {name}
                </h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
          </div>
        )
      )}
    </div>
  );
}
