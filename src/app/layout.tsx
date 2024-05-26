import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import bg from "../../public/steampunk_backround.png";
import BottomNavBar from "./_components/bottom-nav-bar";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={GeistSans.className}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundAttachment: "fixed",
            marginBottom: 100,
            paddingBottom: 10,
          }}
        >
          {children}
          <BottomNavBar />
        </div>
      </body>
    </html>
  );
}