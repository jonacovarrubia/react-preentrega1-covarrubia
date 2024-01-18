import React, { useState } from 'react';

const ItemListContainer = ({ greeting }) => {
  const initialProducts = [
    {
      id: 1,
      name: 'Figura Luke Skywalker',
      description: 'Figura Hot toys de Luke Skywalker de Star Wars.',
      price: 19990,
      image: 'url-de-la-imagen-producto1.jpg',
    },
    {
      id: 2,
      name: 'Figura Darth Vader',
      description: 'Figura Hot Toys de Darth Vader de Star Wars.',
      price: 24990,
      image: 'url-de-la-imagen-producto2.jpg',
    },
    {
      id: 3,
      name: 'Figura Princesa Leia',
      description: 'Figura Hot Toys de la Princesa Leia de Star Wars.',
      price: 21990,
      image: 'url-de-la-imagen-producto3.jpg',
    },
    {
      id: 4,
      name: 'Figura Yoda',
      description: 'Figura Hot Toys Yoda de Star Wars.',
      price: 17990,
      image: 'url-de-la-imagen-producto4.jpg',
    },
   
  ];

  const [addedToCart, setAddedToCart] = useState(initialProducts.reduce((acc, product) => {
    acc[product.id] = false;
    return acc;
  }, {}));

  const handleAddToCart = (productId) => {
    setAddedToCart((prevState) => ({ ...prevState, [productId]: true }));
    
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Productos Destacados</h2>
      <p className="lead text-center">{greeting}</p>

      <div className="row">
        {initialProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product.id)}
                  disabled={addedToCart[product.id]}
                >
                  Agregar al Carrito
                </button>
                {addedToCart[product.id] && (
                  <p className="text-success mt-2">Añadido al carrito</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
