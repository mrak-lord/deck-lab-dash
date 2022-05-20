import styles from './Card.module.scss'

export default function Card() {


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
    <ul className={styles.item}>
      <button>
        <p className={styles.itemTitle}></p>
      </button>
      


    </ul>
  )
}