
import './globals.css'

export const metadata = {
  title: 'Simple Web Stack',
  description: 'A simple web application with frontend and backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
