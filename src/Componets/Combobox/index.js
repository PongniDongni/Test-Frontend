import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Select } from "./style";

export const Combobox = ({ titulo, url, setVariable, variable = '' }) => {
    const [data, setData] = useState([])
        useEffect(() => {
            if (titulo == 'Seleccione modelo') setVariable('');
            axios.get('http://127.0.0.1:8000/api/' + url)
        .then(function (response) {
        setData(response.data);
        })
        .catch(function (error) {
        console.log(error);
        })
        
    }, [variable])

    return(
        <Container>
            <Select onChange={(event) => setVariable(event.target.value)}>
                <option value={''}>{titulo}</option>
                {
                data.map(item => (<option value={item.id} key={item.id}>{item.name}</option>))
            }</Select>
        </Container>
    )
}