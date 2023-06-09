import "@/app/globals.css";
import type { ReactNode } from "react";
export const metadata = {
  title: "Necat",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
