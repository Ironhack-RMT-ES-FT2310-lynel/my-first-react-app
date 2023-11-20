function Message(props) {

  console.log(props)
  // props.children es TODA la informacion enviada entre la etique que abre y la etiqueta que cierra del componente

  const messageStyles = {
    color: props.color
  }

  return (
    <div style={messageStyles}>{props.children}</div>
  )

}


export default Message