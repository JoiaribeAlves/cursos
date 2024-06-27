interface Props {
  name: string
}

function SecondComponent({ name }: Props) {
  return (
    <div>Meu segundo componente, {name}</div>
  )
}

export default SecondComponent
