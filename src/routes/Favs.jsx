import { useEffect, useState } from "react";
import Card from "../components/card/Card";

function Favs() {

    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('odontologosFavs') || '[]') )

    useEffect(()=>{
        setFavs(JSON.parse(localStorage.getItem('odontologosFavs')))
    },[])

    const deleteToFavs = (user) => {
        let newFavs
        if (favs.some((fav) => fav.id === user.id)) {
          newFavs = favs.filter((fav) => fav.id !== user.id)
        } else {
          newFavs = [...favs, user]
        }
        setFavs(newFavs)
        localStorage.setItem('odontologosFavs', JSON.stringify(newFavs))
      }
      console.log(favs)

    return (
    <>
    <section className="section-favs">
    <h1>Mis Favoritos</h1>
    {favs.lenght === 0 ? (
        <div className="msj-favs">No tienes odontologos favoritos.</div>
      ) : (
    <div className="d-grid pb-5">
    {favs.map((fav)=>
            (<Card key={fav.id}  user={fav}  onClick={deleteToFavs}></Card>)
            )}
    </div>)}
    </section>
    </>
    );
}

export default Favs;