import type { ExcusesType } from '../../utils/types'

type Props = {
  excuse: ExcusesType
  onClick: (excuse: ExcusesType) => void
}

const ExcusesCard = ({ excuse, onClick }: Props) => {
  return (
    <div onClick={() => onClick(excuse)}>
      <h3>Excuse #{excuse.id}</h3>
    </div>
  )
}

export default ExcusesCard