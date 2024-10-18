import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>This is from dev env</h1>
      <Link href={"/home"}>Home</Link>
    </>
  );
}
