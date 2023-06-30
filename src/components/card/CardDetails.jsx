import style from './Card.module.css'

const CardDetails = (props)=>{

    return (
        <div className={style.cardDetails}>
           <div className={style.cardDetailsContent}>
              <img src="..\src\assets\img\user.png" alt="" />
              <div className={style.cardText+" "+style.cardDetailsText}>
                 {/*eslint-disable-next-line react/prop-types*/}
                 <h3>{props.user.name}</h3>
                  {/*eslint-disable-next-line react/prop-types*/}
                 <p><i className="fa-light fa-user"></i>{props.user.username}</p>
                  {/*eslint-disable-next-line react/prop-types*/}
                 <p><i className="fa-light fa-envelope"></i>{props.user.email}</p>
                 {/*eslint-disable-next-line react/prop-types*/}
                 <p><i className="fa-light fa-phone"></i>{props.user.phone}</p>
                  {/*eslint-disable-next-line react/prop-types*/}
                 <p><i className="fa-light fa-globe"></i>{props.user.website}</p>
              </div>
           </div>
        </div>
        );
}

export default CardDetails;