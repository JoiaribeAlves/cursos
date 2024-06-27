interface Props {
  category: Category
}

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  PY = 'Python',
}

function Enum({ category }: Props) {
  return (
    <div>A categoria é: {category}</div>
  )
}

export default Enum
