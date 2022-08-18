import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className={styles['banner-img']} style={{backgroundImage: `url('/static/images/banner.png')`}}></div>
    </div>
  )
}

export default Banner