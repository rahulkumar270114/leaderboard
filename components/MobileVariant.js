import {useState} from 'react'
import Filters from './Filters';
import styles from './MobileVariant.module.scss';
import SideNavbar from './SideNavbar';
import classNames from 'classnames';

const MobileVariant = () => {
    const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className={styles['mobile-variant']}>
        <div className={styles['mobile-variant-btns']}>
            <button onClick={() => setIsSideNavbarOpen(true)} className={styles['quick-links']}><span>Quick Links</span> <img src='/static/svgs/down-arrow.svg' /></button>
            <button onClick={() => setIsFilterOpen(true)} className={styles['filter-btn']}><img src='/static/svgs/filter.svg' /></button>
        </div>
        <div className={classNames(styles['navbar-closebtn-container'], {[styles['show-navbar']]: isSideNavbarOpen})}>
            <SideNavbar />
            <button className={styles['close-btn']} onClick={() => setIsSideNavbarOpen(false)}>X</button>
        </div>
        <div className={classNames(styles['filters-closebtn-container'], {[styles['show-filters']]: isFilterOpen})}>
            <Filters className={styles['mob-filters']}/>
            <button className={styles['close-btn']} onClick={() => setIsFilterOpen(false)}>X</button>
        </div>
    </div>
  )
}

export default MobileVariant