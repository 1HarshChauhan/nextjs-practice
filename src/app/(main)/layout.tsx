 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-500 h-200px">
           <h1 className="text-blue-700">hello this is header</h1>
        </header>
        <main>
            {children}
        </main>
        <footer className="bg-red-700 text-blue-500 ">
            hello this is footer
        </footer>
      </body>
    </html>
  )
}