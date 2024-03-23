import {NavLink, Outlet} from "react-router-dom"

function Profiles() {
    const profiles = [1,2,3,4]
    return (
      <div className="flex gap-5">
        <div className='flex flex-col gap-4'>
                {
                profiles.map(profile => (
                    <NavLink
                     className={({isActive}) =>{
                            return isActive ? "text-red-700" : ""
                     }}
                     key={profile}
                     to={`/profiles/${profile}`}>
                    Profile {profile}
                    </NavLink>
                ))
                }

        </div>
        <Outlet/>
      </div>
    )
}

export default Profiles
