
import { Link } from 'react-router-dom';
import style from './Card.module.css'
// eslint-disable-next-line react/prop-types
const Card = (props)=> {

   const favs = JSON.parse(localStorage.getItem('odontologosFavs'));

   // eslint-disable-next-line react/prop-types
   const isFavorite = favs.some((fav) => fav.id === props.user.id);


    return (
         <div className={style.card}>
            <div className={style.cardContent}>
               <img src="src\assets\img\user.png" alt="" />
               <div className={style.cardText}>
                 {/* eslint-disable-next-line react/prop-types*/}
                  <h3>{props.user.name}</h3>
                  {/* eslint-disable-next-line react/prop-types*/}
                  <p>{props.user.username}</p>
               </div>
            </div>
            <div className={style.cardFooter}>
              { /*eslint-disable-next-line react/prop-types*/}
               <a onClick={()=> props.onClick(props.user)}>
                  {isFavorite ? <i className={style.heartSolid +" fa-solid fa-heart"}></i>:<i className="fa-light fa-heart"></i>}
               </a>
               { /*eslint-disable-next-line react/prop-types*/}
               <Link to={`/dentist/${props.user.id}`}><a><i className="fa-light fa-circle-info"></i></a></Link>
            </div>
         </div>
         );
}

export default Card;