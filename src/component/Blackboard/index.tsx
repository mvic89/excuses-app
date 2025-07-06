import type { ExcusesType } from '../../utils/types'

type Props = {
  excuse: ExcusesType | null
}

const Blackboard = ({ excuse }: Props) => {
  if (!excuse) {
    return <div >Click an excuse card to view details</div>
  }

  return (
    <div>
      <p><strong>Excuse:</strong> {excuse.excuse}</p>
      <p><strong>Category:</strong> {excuse.category}</p>
    </div>
  )
}

export default Blackboard