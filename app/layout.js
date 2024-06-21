import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bricx Studio",
  description: "Redefining business analysis for the modern world. We envision a future where analysts are empowered with a unified toolkit, driving businesses forward with efficient processes, clear roadmaps, and unmatched traceability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
