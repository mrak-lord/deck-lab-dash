import styles from './Sidebar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import testImage from '../../assets/sidebarIcons/burger.png'

const sidebarNavLinks = [ "home", "explore", "decks", "cards", "addCard", "shop", "settings", "IG", "FB" ]

export default function Sidebar() {
  const location = useLocation;
  return(
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => 
              (<li className={styles.sidebarNavs}>
                <Link className={location.name === `/${sidebarNavLink}` ? styles.sidebarNavLink : styles.sidebarNavLinkActive} to={`/${sidebarNavLink}`}>
                  <button>
                    <img src={testImage} alt="add"></img>
                    {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}
                  </button>
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}