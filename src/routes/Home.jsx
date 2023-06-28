import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          setUsers(data)
        }
        fetchData()
      }, [])

 console.log(users)
    return (
        <section>
            <h1>Dentistas</h1>
            {users.map((user)=>
            (<Card name={user.name} username={user.username} key={user.id}></Card>)
            )}
        </section>
     );
}

export default Home;
/*{users.map((user) => (
            <Card key={user.id} user={user}></Card>
            ))}*/