import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>This is from main </h1>
      <Link href={"/home"}>Home</Link>
    </>
  );
}
