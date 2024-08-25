import { Murecho } from "next/font/google";
import "./globals.css";

const murecho = Murecho({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={murecho.className}>
        <nav className="flex items-center p-4 px-7 bg-[#186578] text-white">
          <a href="/" className="grow text-white">
            Cememer
          </a>
          <div className="grow flex flex-row justify-end gap-3">
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
