import styles from './Sidebar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import burgerIcon from '../../assets/sidebarIcons/burger.png'
import exploreIcon from '../../assets/sidebarIcons/exploreIcon.png'
import decksIcon from '../../assets/sidebarIcons/decksIcon.png'
import cardsIcon from '../../assets/sidebarIcons/cardsIcon.png'
import addCardIcon from '../../assets/sidebarIcons/addCard.png'
import addDeckIcon from '../../assets/sidebarIcons/addDeck.png'
import backIcon from '../../assets/sidebarIcons/backButton.png'
import settingsIcon from '../../assets/sidebarIcons/settings.png'


const menuButtonRoutes: {key: string, value: string}[] = [
  {key: 'home', value: burgerIcon},
]

const sidebarNavLinks: {key: string, value: string}[] = [
  {key: 'explore', value: exploreIcon},
  {key: 'decks', value: decksIcon},
  {key: 'cards', value: cardsIcon},
  {key: 'addCard', value: addCardIcon},
  {key: 'addDeck', value: addDeckIcon},
]

const settingsNavs: {key: string, value: string}[] = [
  {key: 'back', value: backIcon},
  {key: 'settings', value: settingsIcon},
]



export default function Sidebar() {
  const location = useLocation;
  return(
    <div>
      <aside className={styles.sidebar}>

{/* burger menu */}
        <div>
          {menuButtonRoutes.map((menuButtonRoute) => 
          (
            <div className={styles.sidebarBurgerMenu}>
              <Link className={styles.sidebarMenuButton} to={`/${menuButtonRoute.key.toString()}`}>
                <button>
                <img src={menuButtonRoute.value} alt="add"></img>
                //TODO - must sort out naming as some are not user friendly
                  {/* {menuButtonRoute.key.charAt(0).toUpperCase() + menuButtonRoute.key.slice(1)} */}
                </button>
              </Link>
            </div>
          ))}
        </div>

{/* content in sidebar */}
        <div className={styles.sidebarContent}>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => 
              (<li className={styles.sidebarNavs}>
                <Link className={location.name === `/${sidebarNavLink}` ? styles.sidebarNavLink : styles.sidebarNavLinkActive} to={`/${sidebarNavLink.key.toString()}`}>
                  <button>
                    <img src={sidebarNavLink.value} alt="add"></img>
                    //TODO - must sort out naming as some are not user friendly
                    {/* {sidebarNavLink.key.charAt(0).toUpperCase() + sidebarNavLink.key.slice(1)} */}
                  </button>
                </Link>
              </li>
              ))}
            </ul>
          </nav>
        </div>

{/* settings menu */}
        {settingsNavs.map((settingsNav) => 
          (<div className={styles.sidebarSettingsButtons}>
            <Link to={`/${settingsNav.key.toString()}`}>
            <button>
              <img src={settingsNav.value} alt="add"></img>
              //TODO - must sort out naming as some are not user friendly
              {/* {settingsNav.key.charAt(0).toUpperCase() + settingsNav.key.slice(1)} */}
            </button>
            </Link>
          </div>
          ))}
      </aside>
    </div>
  )
}