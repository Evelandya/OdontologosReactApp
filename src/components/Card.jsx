// eslint-disable-next-line react/prop-types
const Card = ({name,username,id})=> {
    return (
         <div>
            <h3>{name}</h3>
            <p>{username}</p>
            {id}
         </div>
         );
}

export default Card;