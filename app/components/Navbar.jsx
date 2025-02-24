import Link from "next/link";
import Image from "next/image";

import catImage from "./cat.jpg";

export default function () {
  return (
    <nav>
      <Image src={catImage} width={70} alt="logo" quality={100} placeholder="blur" />
      <h1>Help Desk</h1>
      <Link href="/">Home</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
