import ThemeProvider from "./theme-provider"

export const metadata = {
  title: 'Nextjs Pagination',
  description: 'Simple pagination with Nextjs',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black' }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
