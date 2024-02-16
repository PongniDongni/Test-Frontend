import React, {useState} from "react";
import { Combobox } from "../../Componets/Combobox";
import { Grid } from "../../Componets/grid";
import { Lista, Contenedor , ConGrid, ConConbobox} from "./styles";

export const Home = () => {
    const [bodega, setBodega] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')

    return(
        <div>
            <Contenedor>
            <Lista>
                <ConConbobox>
                    <Combobox titulo = 'Seleccione Bodega' url='bodegas/ObtenerBodega?'setVariable={setBodega}/>
                    <Combobox titulo = 'Seleccione Marca' url='marcas/ObtenerMarcas' setVariable={setMarca}/>
                    <Combobox titulo = 'Seleccione Modelo' url={'modelos/ObtenerModelosPorMarca?id_marca='+ marca + '&'} setVariable={setModelo} variable={marca}/>
                </ConConbobox>
            </Lista>
                <Lista>
                    <ConGrid>
                        
                        <Grid id_bodega={bodega} id_modelo={modelo} id_marca={marca} />
                        
                    </ConGrid>
                
                </Lista>
            </Contenedor>
            
        </div>
    )

}