function FoodItem(props) {

  console.log(props)

  const cardStyles = {
    color: "black",
    padding: "10px",
    backgroundColor: props.cardColor,
    margin: "40px",
    borderRadius: "20px",
    opacity: "0.8",
  };

  return (
    <div style={cardStyles}>
      <h5>{props.foodName}</h5>
      <img src={props.foodImage} alt={props.foodName} width="150px" />
    </div>
  );
}

export default FoodItem;
