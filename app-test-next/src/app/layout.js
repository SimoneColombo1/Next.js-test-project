import localFont from "next/font/local";
import "./style/global.scss";
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Test Next.js Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <section class="main-container">
        
     <nav>
        <Link href="/test-pagina">Pagina 1</Link>
      </nav>
        {children}
        <footer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque error velit eligendi animi ipsam reiciendis, laborum voluptates corporis repellendus modi harum quis aliquam quod delectus laudantium excepturi? Sed, quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quidem architecto ex labore officia impedit quisquam repellendus fugit porro enim nulla quasi eligendi aliquam vel, illum facilis illo quod? Dolorum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit voluptatem soluta, ea ullam non cum est, libero dicta tempore totam. Placeat nobis voluptates nulla dolorem culpa eius? Non magni aperiam soluta quidem voluptatibus ad eveniet illum veniam. Consequuntur.
        </footer>
       </section>
      </body>
    </html>
  );
}
