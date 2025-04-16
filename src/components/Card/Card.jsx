import styles from './Card.module.css'

export const Card = ({ children }) => {
  return <article className={styles.card}>{children}</article>
}
