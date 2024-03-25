
function ServiceProviderCard({user, img}) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="Card" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.lastName}</div>
        <p className="text-gray-700 text-base">
            {user.firstName}
        </p>
        <p className="text-gray-700 text-base">
            {user.email}
        </p>
    </div>
</div>
  )
}

export default ServiceProviderCard
