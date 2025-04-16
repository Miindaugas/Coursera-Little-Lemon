export const Navigation = () => {
  const links = [
    { text: 'About', to: '#about' },
    { text: 'Menu', to: '#specials' },
    { text: 'Testimonials', to: '#testimonials' },
    { text: 'Contact', to: '#contact' },
  ]

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.to}>{link.text}</a>
        </li>
      ))}
    </ul>
  )
}
