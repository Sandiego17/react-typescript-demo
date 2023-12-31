import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [User, setUser] = useState<null | AuthUser>(null)
  
  const handleLogin = () => {
    setUser({
      name: 'Sandiego',
      email: 'sandiego@example.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Username is {User?.name}</div>
      <div>User email is {User?.email}</div>
    </div>
  )
}
