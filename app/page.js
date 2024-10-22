import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome to uat </h1>
      <Link href={"/home"}>Home</Link>
    </>
  );
}
