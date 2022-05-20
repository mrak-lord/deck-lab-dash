import styles from './CardPannel.module.scss'
import Card from '../card/Card'


export default function UserPannel() {


  const cardMock = {
    "id": "6543",
    "specs": {
      "name": "Red Gerrard",
      "bio": "Really good snowboarder who won the XGames multiple times.",
      "stats": {
        "speed": 5,
        "defence": 0,
        "coolness": 100,
      }
    },
    "ownerId": "123",
    "createdBy": "Someone really cool"
  }

  return (
    <main className={styles.cardPannel}>
      <div className={styles.cardPannelContnent}>
        <div className={styles.cardPannelItem}>
          <Card />
        </div>
      </div>
    </main>


  );

}