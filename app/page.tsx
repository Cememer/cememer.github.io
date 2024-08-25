import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24 bg-[#186578]">
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-bold text-5xl">Cememer</h1>
      </div>
      <Image
        src="/cememer.svg"
        alt="Cememer's Profile Picture"
        width={400}
        height={400}
      />
    </main>
  );
}
