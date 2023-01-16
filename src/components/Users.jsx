 const Users = ({usuario, handleDelete, query}) => {

    return (
        usuario.filter(user => user.nombre.toLowerCase().includes(query)).map(({nombre, correo, id}) => {
            return <li key={id}
                    className="list-group-item" 
                    >{nombre} - {correo} <button onClick={() => handleDelete(id) } className="btn ms-2"><i className="text-danger fa-solid fa-xmark"></i></button></li>
        }
    ))
 }
 export default Users