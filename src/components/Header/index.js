import React from 'react';
import '../../index.css';
const Header = ({title}) =>(
    <header>
        <h1 className='titleHeader'>{title ?? 'Escolha um Titulo.'}</h1>       
    </header>
);

export default Header;