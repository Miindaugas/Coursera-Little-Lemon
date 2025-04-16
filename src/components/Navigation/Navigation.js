import { Link } from 'react-router-dom'

export const Navigation = () => {
  const links = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Menu', to: '/menu' },
    { text: 'Reservations', to: '/reservations' },
    { text: 'Order Online', to: '/order-online' },
    { text: 'Login', to: '/login' },
  ]

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  )
}
