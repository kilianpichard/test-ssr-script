import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script src="http://localhost:8081/publidata.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
