import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import { useEffect, useState } from 'react'
import { usersDB } from './api/users'
import Users from './components/Users'
import Form from './components/Form'




function App() {
  
  const [usuario, setUsuario] = useState(usersDB)
  const [query, setQuery] = useState("")



  const onSubmit = (newUsers) => { 
    setUsuario((prev) => ([...prev, newUsers]));  
  }
  const handleDelete = (id) => {
    const newUsers = usuario.filter((user) => id !== user.id)
    setUsuario(newUsers)
  }


  return (
    <>
      <Nav
           setQuery={setQuery}
           query={query} 
          />
      <Header title='Listado de colaboradores'/>
      <main className='container'>
        <div><Form 
              onSubmit={onSubmit}
              /></div>
        <ul className='list-group'><Users usuario={usuario}
                    handleDelete={handleDelete}
                    query={query}
                    /></ul>  
      </main>
    </>
  )
  
}

export default App
