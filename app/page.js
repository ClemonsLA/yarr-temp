import Link from "next/link";


export default function Home() {
  return (
    <div className="grid">
      <Link href="/start">old route</Link>
      <Link href="/interview">new route</Link>
    </div>
  );
}
