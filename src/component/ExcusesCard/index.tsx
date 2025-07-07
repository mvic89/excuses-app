import type { ExcusesType } from '../../utils/types'

type Props = {
  excuse: ExcusesType
  onClick: (excuse: ExcusesType) => void
  isActive: boolean
}

const ExcusesCard = ({ excuse, onClick, isActive }: Props) => {
  return (
    <div className={`excuses-card btn btn-primary ${isActive ? 'active' : ''}`} onClick={() => onClick(excuse)}>
      <a>Excuse #{excuse.id}</a>
    </div>
  )
}

export default ExcusesCard