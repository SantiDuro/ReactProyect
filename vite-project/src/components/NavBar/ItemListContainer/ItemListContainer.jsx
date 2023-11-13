import styles from './styles.module.css'

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.centerContainer} > { greeting } </div>
  )
}
