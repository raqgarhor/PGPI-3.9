import { useEffect, useState } from 'react'
import supabase from './supabaseClient'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')

    if (error) {
      console.error('Error cargando users:', error)
      return
    }

    setUsers(data)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de usuarios</h2>
      {users.length === 0 && <p>No hay usuarios aún</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.id}</strong> — {u.correo}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
