import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>Little Lemon</div>
      <div>Chicago</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button>Reserve Table</button>
      <img src="/asset/restauranfood.jpg" alt="" width={375} height={325} />
    </div>
  )
}
