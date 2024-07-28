import '@radix-ui/themes/styles.css';
import { inter } from '@/app/ui/fonts.ts';
import "./global.css";
import { Theme } from '@radix-ui/themes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${inter.className} antialiased`}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
