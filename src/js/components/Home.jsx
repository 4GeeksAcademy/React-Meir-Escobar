import React from "react";

// Componente Navbar simple
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Boostrap</a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-expanded="false"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

// Componente Jumbotron simple
const Jumbotron = () => {
  return (
	<div className="bg-light m-4 mb-5">
		<h1 className="display-1 p-3 pb-0">A warm Welcome!</h1>
		<p className="p-3 pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero sem, viverra nec neque ac, commodo dictum ex. Ut venenatis elit quis metus viverra vehicula non nec nulla. Quisque sodales magna sapien, finibus rutrum metus pharetra sagittis. Donec luctus rhoncus ultrices. Praesent a massa massa.</p>
		<button type="button" className="btn btn-primary mb-5 m-3">
		Call to action!
		</button>
	</div>
  );
};

// Componente Cards simple
const Cards = () => {
  return (
    <div className="row m-4">
      {[1, 2, 3, 4].map((num) => ( //Javascript para mapear cada elemento y cambiar de numero cada que genera un nuevo componente
        <div className="col-lg-3 col-md-0 col-sm-0 mb-4" key={num}>
          <div className="card">
            <img
              src="/src/img/500x325.png"
              className="card-img-top"
              alt="Foto"
            />
            <div className="card-body">
              <h5 className="card-title">Card {num}</h5>
              <p className="card-text">Descripcion.</p>
            </div>
			<div className="card-footer">
        		<button className="btn btn-primary w-100">Find out more!</button>
      		</div>
          </div>

        </div>
      ))}
    </div>
  );
};

const Footer = () => {
	return (
	<footer className="bg-dark text-center text-white py-3 mt-4">
  		<small>© 2025 Meir Escobar. Todos los derechos reservados.</small>
	</footer>
	)
}


// Componente principal que junta todo
const Home = () => {
  return (
    <div>
      <Navbar />
	  <div className="container my-5">
		<Jumbotron />
      	<Cards />
	  </div>
	  <Footer />
    </div>
  );
};

export default Home;