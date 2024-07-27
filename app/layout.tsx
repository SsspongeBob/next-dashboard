import '@radix-ui/themes/styles.css';
import { inter } from '@/app/ui/fonts.ts';
import "./global.css";
import { Theme } from '@radix-ui/themes';

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
