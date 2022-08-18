import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles['header']}>
        <div className={styles['logo']}>
            <img src='/static/images/logo.png'/>
        </div>
    </div>
  )
}

export default Header