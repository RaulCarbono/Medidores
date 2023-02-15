import { Card_medidores } from "./Card_medidores"
import { Card_principal } from "./Card_principal"
import { Card_secundary } from "./Card_secundary"

export const Title_filter = () => {
  return (
    <div className="title_container">
        <h2>Hola Usuario</h2>
        <span>Bienvenido de vuelta</span>
        
        <div className="container_filter">
        <input type="text" placeholder="Filter" /> <i></i>
        </div>
        <div><Card_principal /></div>
        
        <Card_secundary></Card_secundary>

        <Card_medidores/>
    </div>
  )
}