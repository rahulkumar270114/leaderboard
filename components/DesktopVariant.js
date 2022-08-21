import React from 'react'
import LeaderSection from './LeaderSection'
import SideNavbar from './SideNavbar'
import styles from './DesktopVariant.module.scss';

const DesktopVariant = ({leaders}) => {
  return (
    <div className={styles['desktop-variant']}>
        <SideNavbar />
    </div>
  )
}

export default DesktopVariant