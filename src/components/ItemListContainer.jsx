import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Productos Destacados</h2>
      <p className="lead text-center">{greeting}</p>
      
      <div className="row">
        {/* Producto 1 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="url-de-la-imagen-producto1.jpg" className="card-img-top" alt="Producto 1" />
            <div className="card-body">
              <h5 className="card-title">Figura Luke Skywalker</h5>
              <p className="card-text">Figura Hot toys de Luke Skywalker de Star Wars.</p>
              <p className="card-text">Precio: $19.990</p>
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="url-de-la-imagen-producto2.jpg" className="card-img-top" alt="Producto 2" />
            <div className="card-body">
              <h5 className="card-title">Figura Darth Vader</h5>
              <p className="card-text">Figura Hot Toys de Darth Vader de Star Wars.</p>
              <p className="card-text">Precio: $24.990</p>
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="url-de-la-imagen-producto3.jpg" className="card-img-top" alt="Producto 3" />
            <div className="card-body">
              <h5 className="card-title">Figura Princesa Leia</h5>
              <p className="card-text">Figura Hot Toys de la Princesa Leia de Star Wars.</p>
              <p className="card-text">Precio: $21.990</p>
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
        </div>

        {/* Producto 4 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="url-de-la-imagen-producto4.jpg" className="card-img-top" alt="Producto 4" />
            <div className="card-body">
              <h5 className="card-title">Figura Yoda</h5>
              <p className="card-text">Figura Hot Toys Yoda de Star Wars.</p>
              <p className="card-text">Precio: $17.990</p>
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
