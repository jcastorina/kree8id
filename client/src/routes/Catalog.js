import React, { useState, useEffect } from 'react';
import CatalogComponent from '../components/CatalogComponent'
import noPic from '../no_pictures.png'

function Catalog  (){

  return (
    <main className="container">
      
        <div style={{marginTop: 100}}/>

        <CatalogComponent       />

    </main>
  );
}

export default Catalog