
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = (props)=> {

   const favs = JSON.parse(localStorage.getItem('odontologosFavs'));
   const isFavorite = favs.some((fav) => fav.id === props.user.id);


    return (
         <div className={style.card}>
            <div className={style.cardContent}>
               <img src="src\assets\img\user.png" alt="" />
               <div className={style.cardText}>
                  <h3>{props.user.name}</h3>
                  <p>{props.user.username}</p>
               </div>
            </div>
            <div className={style.cardFooter}>
               <a onClick={()=> props.onClick(props.user)}>
                  {isFavorite ? <i className={style.heartSolid +" fa-solid fa-heart"}></i>:<i className="fa-light fa-heart"></i>}
               </a>
               <Link to={`/dentist/${props.user.id}`}><i className="fa-light fa-circle-info"></i></Link>
            </div>
         </div>
         );
}

export default Card;