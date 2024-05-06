import type { Metadata } from "next";
import { Inter, Varela_Round } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ["latin"] });
const vr = Varela_Round({subsets: ["latin"], weight: "400"})

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "MoodieMoovy - Forget Choosing, Just Watch",
  description: "Your feelings matter most. Check out our movie recommendation engine designed to match your mood and day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </head>
      <PHProvider>
        <body className={vr.className}>
          <div className="bg-[url('/img/landbck.jpg')] fixed -z-10 w-screen min-h-screen h-full bg-cover opacity-10 blur-md bg-repeat"></div>
          <PostHogPageView/>
          {children}
        </body>
        </PHProvider>
    </html>
  );
}
