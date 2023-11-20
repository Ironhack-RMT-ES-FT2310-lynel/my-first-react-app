// importar el modulo de la imagen
import imageEntrada from "../assets/images/entrada.jpg";
import imageFuerte from "../assets/images/fuerte.jpg";
import imagePostre from "../assets/images/postre.jpg";
import FoodItem from "./FoodItem";

function Menu() {
  return (
    <section id="menu">
      <h3>Menu del día</h3>

      {/* <div style={cardStyles}>
        <h5>Tequeños</h5>
        <img src={imageEntrada} alt="tequeños" width="150px" />
      </div>

      <div style={cardStyles}>
        <h5>Pabellón</h5>
        <img src={imageFuerte} alt="pabellon" width="150px" />
      </div>

      <div style={cardStyles}>
        <h5>Dulce de lechoza</h5>
        <img src={imagePostre} alt="dulce-de-lechoza" width="150px" />
      </div> */}

      <FoodItem
        foodName={"Tequeños"}
        foodImage={imageEntrada}
        cardColor={"yellow"}
      />
      <FoodItem
        foodName={"Pabellón"}
        foodImage={imageFuerte}
        cardColor={"blue"}
      />
      <FoodItem
        foodName={"Dulce de lechoza"}
        foodImage={imagePostre}
        cardColor={"red"}
      />
    </section>
  );
}

export default Menu;
