import '@/styles/globals.scss';
import { UniformContext } from '@uniformdev/canvas-next-rsc';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-catch-me="here-i-am">
      <body>
        <UniformContext>{children}</UniformContext>
      </body>
    </html>
  );
}
