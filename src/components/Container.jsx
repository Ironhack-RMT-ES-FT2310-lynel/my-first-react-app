// Este componente solo va a englobar otros componentes y darles algun estilo o funcionalidad especial

// HOC => Higher order components

function Container(props) {

  const cardStyles = {
    backgroundColor: "purple",
    padding: "50px",
    borderRadius: "30px",
    margin: "100px"
  }

  return (
    <div style={cardStyles}>{props.children}</div>
  )


}

export default Container