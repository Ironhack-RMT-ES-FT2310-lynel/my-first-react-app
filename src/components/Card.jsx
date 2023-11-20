function Card(props) {

  console.log(props)

  const { username, profession } = props.user

  return (
    <div>

      {/* <h3>nombre de usuario: {props.user.username}</h3>
      <p>profesión: {props.user.profession}</p> */}

      <h3>nombre de usuario: {username}</h3>
      <p>profesión: {profession}</p>

    </div>
  )

}

export default Card