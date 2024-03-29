import NavBar from "../components/layouts/NavBar"
import img from "../assets/tribunal.jpeg"
import ServiceProviderCard from "../components/ServiceProviderCard"
import {useEffect, useState} from 'react'
import axios from "axios"
import AuthPageWrraper from "../components/AuthPageWrraper"



function Results() {
    const [serviceProviders, setServiceProviders] = useState([])
    useEffect(() => {
        const getServiceProviders = async() => {
            try{
                const response = await axios.get("http://localhost:5000/api/v1/users/serviceProviders")
                setServiceProviders(response.data.data)
            }catch(error){
                console.log("error occured", error.message)
            }
        }
        getServiceProviders()

    },[])
  return (
    <AuthPageWrraper>
        <div>
            <NavBar />
            <section className="mt-[150px] flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:max-w-[95%] max-w-full">
                    {serviceProviders.map(user => (
                        <ServiceProviderCard key={user.id} user={user} img={img} />
                    ))}
                </div>
            </section>
        </div>
    </AuthPageWrraper>
  )
}

export default Results
