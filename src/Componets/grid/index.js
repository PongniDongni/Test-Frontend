import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Contenedor } from './style'

export const Grid = ({id_bodega, id_marca, id_modelo}) => {
    const[data,setData] = useState([])
    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/dispositivos/ObtenerDispositivosPorBodega?id_bodega='+id_bodega+'&id_marca='+id_marca+'&id_modelo='+id_modelo)
        .then(function (response) {
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })

    }, [id_bodega,id_marca, id_modelo])
    
    
    return (
      
      <table>
        <tr>
          <th><Contenedor>Id</Contenedor></th>
          <th><Contenedor>Nombre</Contenedor></th>
          <th><Contenedor>Marca</Contenedor></th>
          <th><Contenedor>Modelo</Contenedor></th>
          <th><Contenedor>Bodega</Contenedor></th>
        </tr>
        
        {
        data.map(item=>(<tr>
            <td><Contenedor>{item.id}</Contenedor></td>
            <td><Contenedor>{item.name}</Contenedor></td>
            <td><Contenedor>{item.modelo.marca.name}</Contenedor></td>
            <td><Contenedor>{item.modelo.name}</Contenedor></td>
            <td><Contenedor>{item.bodega.name}</Contenedor></td>
          </tr>))
        }
        
      </table>
    )
  }