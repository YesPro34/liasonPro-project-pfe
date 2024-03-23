import {useParams} from 'react-router-dom'

function Profile() {
  const params = useParams()
  console.log(params)
  return (
    <div className='flex flex-col gap-4'>
        <p>Profile page {params.profileId}</p>
    </div>
  )
}

export default Profile
