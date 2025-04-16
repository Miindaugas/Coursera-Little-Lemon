import styles from './Testimonials.module.css'
import { Avatar } from '../Avatar/Avatar'

export const Testimonials = () => {
  const items = [
    {
      rating: 5,
      name: 'Eli & Co.',
      quote:
        "A great restaurant isn't just about the food—it's where flavors meet memories, and every table tells a love story",
    },
    {
      rating: 5,
      name: 'Gianna’s Table',
      quote:
        'A restaurant is a symphony of senses, where the chef is the composer and every dish plays its part in a masterpiece.',
    },
    {
      rating: 4,
      name: 'Uncle Theo’s',
      quote:
        'The best restaurants feel like home—only with better lighting, no dishes to wash, and way more butter',
    },
    {
      rating: 5,
      name: 'Maison Camille',
      quote:
        'Behind every great restaurant is a dream seasoned with risk, stirred with passion, and served with purpose.',
    },
  ]

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>Testimonials</h2>
      <p>Read what others have to say</p>
      <div className={styles.grid}>
        {items.map(({ rating, name, quote }, index) => (
          <Avatar key={index}>
            {Array(rating)
              .fill()
              .map((_, index) => (
                <img key={index} src="/asset/star.svg" alt="star" />
              ))}
            <div>
              <img src="/asset/avatar.png" alt={name} />
              <span>{name}</span>
            </div>
            <blockquote>{quote}</blockquote>
          </Avatar>
        ))}
      </div>
    </section>
  )
}
