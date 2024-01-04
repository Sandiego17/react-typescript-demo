import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User2 = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {
    userContext.setUser({
      name: 'Sandiego',
      email: 'sandiego@example.com'
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Username is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  )
}