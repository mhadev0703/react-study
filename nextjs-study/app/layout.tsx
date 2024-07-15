import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata : Metadata = {
  title: {
    template: "%s | Next Application",
    default: "Next Application",
  },
  description: "The best application on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}