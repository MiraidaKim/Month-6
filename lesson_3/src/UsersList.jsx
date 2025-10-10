import { useEffect } from "react"
import { useUsers } from "./store/users"


export const UsersList = () => {

    const { users, loading, error, fetchUsers } = useUsers()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
      return <p>Loading...</p>  
    } 

    if (error) {
       return <p>{error}</p>
    }

    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}