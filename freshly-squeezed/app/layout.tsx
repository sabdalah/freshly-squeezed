import './styles.css'
export const metadata = { title: 'Freshly Squeezed | Fresh Juice', description: 'Fresh juice, made for you.' }
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
