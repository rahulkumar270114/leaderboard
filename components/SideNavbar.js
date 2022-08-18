import React from 'react';
import Link from 'next/link'
import styles from './SideNavbar.module.css';

const SideNavbar = () => {
  return (
    <div className={styles['side-navbar']}>
        <h3>
            Quick Links
        </h3>
        <ul className={styles['quick-links']}>
            <li>
                <Link href="/">
                    <a>Market place</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>My profile</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SideNavbar