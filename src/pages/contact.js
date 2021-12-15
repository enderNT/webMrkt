import React from 'react';
import {Link } from 'gatsby';
import styled from '@emotion/styled';

    const Label = styled.label`
        font-size: 1.5rem;
        color: #fff;
        font-weight: bold;
        margin-bottom: 1rem;
        `;

    const Input = styled.input`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #e1e1e1;

    `;

    const Boton = styled.button`
    width: 75%;
  height: 45%;
  margin: auto;
  border-color: gray;
  color: white;
  cursor: pointer;
  background-color: #353034b6;
  `;

const contact = () => {

    return (
    <div>
        <Boton><Link to='/'>Inicio</Link></Boton>
        <h1>Formulario de contacto</h1>
        <form onSubmit={(e) => e.preventDefault(e)}>
            <Label>Nombre:</Label>
            <Input type="text" name="nombre" placeholder='FirstName'/>
            <Label id='Email'>Email:</Label>
            <Input type="email" name="email" placeholder='Email@email.com'/>
            <Label id='Mensaje'>Mensaje:</Label>
            <textarea name="mensaje" placeholder='Escribe tu mensaje'></textarea><br/>
            <br/>
            <Input type="submit" value="Enviar" />
        </form>
    </div>
    )

}


export default contact;