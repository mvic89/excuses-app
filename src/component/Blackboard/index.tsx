import type { ExcusesType } from '../../utils/types'

type Props = {
  excuse: ExcusesType | null
}

const Blackboard = ({ excuse }: Props) => {
  if (!excuse) {
    return <div className='blackboard'><h5 className='blackboard__text'>Click one of the excuses buttons above to view further details of why I never finish assignments in time.</h5></div>
  }

  return (
    <div className='blackboard'>
      <p ><strong>Excuse:</strong> {excuse.excuse}</p>
      <p ><strong>Category:</strong> {excuse.category}</p>
    </div>
  )
}

export default Blackboard