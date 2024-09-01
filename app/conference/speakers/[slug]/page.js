import styles from "../../conference.module.css";

export async function generateStaticParams() {
  const speakers = await getSpeakers();

  return speakers.map((speaker) => ({ slug: speaker.id }));
}

async function getSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: { revalidate: 20 } }
  );

  const data = await response.json();
  return data.speakers;
}

async function getSpeakersInfo(slug) {
  const speakers = await getSpeakers();
  return getSpeakerDetails(speakers, atob(slug));
}

function getSpeakerDetails(speakersList, speakerId) {
  const speaker = speakersList.find(({ id }) => id === speakerId);

  if (speaker === undefined) {
    throw new Error(`Speaker with id ${speakerId} found`);
  }

  return speaker;
}

export default async function Page({ params: { slug } }) {
  const { name, bio, sessions } = await getSpeakersInfo(slug);
  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
