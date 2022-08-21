import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles['banner']}>
        <div className={styles['banner-img']} style={{backgroundImage: `url('/static/images/banner.png')`}}></div>
    </div>
  )
}

export default Banner