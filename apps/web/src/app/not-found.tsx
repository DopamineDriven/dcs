import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>Could not find requested resource</p>
      <p>
        Return <Link href='/'>Home</Link>
      </p>
    </div>
  );
}
