import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cememer's Page",
  description: "Cememer's Personal Page",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-center bg-[#186578]">
      <div className="max-w-screen-2xl mx-auto p-4">
        <div className="flex flex-row flex-wrap-reverse sm:justify-center">
          <div className="grow flex flex-col items-start sm:items-center lg:items-start justify-center gap-4">
            <section>
              <h1 className="font-bold text-5xl mb-4">Cememer</h1>
              <p className="text-white text-xl font-light">
                とある学生のプライベート領域。
                <br />
                <br />
                Geek Software | Train🚊 | 東方🎵 | ずんだもん🍃 | PC Games🎮
                <br />
                and more...🤔
              </p>
            </section>
            <section className="flex flex-wrap gap-2">
              <a href="https://twitter.com/Cememer_Sweet" className="bg-sky-950 text-white p-2 rounded-md" target="_blank" >X / Twitter</a>
              <a href="https://github.com/Cememer" className="bg-black text-white p-2 rounded-md" target="_blank" >GitHub</a>
              <a href="https://marshmallow-qa.com/rdbmraiiv522nv6" className="bg-pink-800 text-white p-2 rounded-md" target="_blank" >Marshmallow (Message)</a>
            </section>
          </div>
          <figure className="relative">
            <Image src="/cememer.svg" alt="Cememer's Profile Picture" width={400} height={400} />
          </figure>
        </div>
      </div>
    </main>
  );
}
