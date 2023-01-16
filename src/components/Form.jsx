import { useState } from "react"

const Form = ({onSubmit}) => {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const handleSubmit = (e) => {
        if(nombre.length == 0 || correo.length == 0) {
            alert("Debes ingresar un nombre y un correo válido")
            return
        }

        e.preventDefault();
        const newUsers = {
          id: Date.now(),
          nombre: nombre,
          correo: correo
        }
        onSubmit(newUsers);
        setCorreo(""); 
        setNombre("");
    }    
    return (
        <form onSubmit={handleSubmit} className="m-3">
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control mb-3" type="text" placeholder="Ingrese nombre del colaborador"/>
            <input value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control mb-3" type="email" placeholder="Ingrese Email del colaborador" />
            <button type="submit" className="btn btn-success me-3">Ingresar</button>
        </form>
    )
}
export default Form
