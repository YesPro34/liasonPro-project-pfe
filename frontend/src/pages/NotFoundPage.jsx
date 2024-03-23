import {Link} from 'react-router-dom'
function NotFoundPage() {
  return (
    <div className='flex flex-col gap-4'>
      <div>404 Not Found</div>
      <Link to="/">Home from Link</Link>
    </div>
  )
}

export default NotFoundPage
