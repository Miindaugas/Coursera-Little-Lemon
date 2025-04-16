import styles from './Avatar.module.css'

export const Avatar = ({ children }) => {
  return <div className={styles.avatar}>{children}</div>
}
