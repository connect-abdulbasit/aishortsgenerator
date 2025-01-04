import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Provider from "./provider";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
const outfit = Outfit({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Provider>{children}</Provider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
