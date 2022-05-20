import CardPannel from './cardPannel/CardPannel'
import style from './UserPannel.module.scss'

export default function UserPannel() {
  return (

    <div className={style.userPannel}>
      <CardPannel />
    </div>

  );

}