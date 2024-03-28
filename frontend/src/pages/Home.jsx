import Image from "../components/Image" 
import SearchBar from "../components/SearchBar"
import Paragraph from "../components/Paragraph"
import ButtonComponent from "../components/ButtonComponent"
import SearchIcon from '@mui/icons-material/Search'
import AuthPageWrraper from "../components/AuthPageWrraper"

const  Home = () => {

  // const [userRole, setUserRole] = useState("lawyer") 


  return (
    <AuthPageWrraper>
    <div>
        <section className="flex  h-screen items-center justify-center bg-[#1e2e3e] p-8">
          <div className="mt-[150px]  flex flex-col items-center  justify-center lg:flex-row lg:justify-between ">
              <div> 
                  <h1 className="text-white
                                  text-5xl font-black
                                  font-helvetica-neue max-w-[100%] lg:max-w-[90%] md:text-left text-center mb-4">Prenez des services particuliers
                  </h1>
                    <Paragraph className="text-white text-2xl font-bold font-helvetica-neue leading-6 mt-8 mb-4">
                          avec l'avocat qui vous correspond enfin !
                    </Paragraph>
                  <div>
                    <SearchBar className="space-y-4 w-[80%] lg:w-[460px] h-[65px] px-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none" placeholder="Quel type de service ?"/>
                    <SearchBar className="mt-6 w-[80%] lg:w-[460px] h-[65px] px-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none" placeholder="Dans quelle ville ?"/>
                    <ButtonComponent   className="bg-[#cdb091] border rounded-2xl border-[#cdb091] text-white inline-block px-9 py-3 relative hover:bg-[#9c8a6e] mt-6">
                      <SearchIcon />
                    </ButtonComponent>             
                  </div>
              </div>
            <Image />
          </div>
        </section>
        <section className="bg-[#1e2e3e]">
          <div>
              <h2 className="text-white text-3xl font-bold  font-helvetica-neue ">Des avocats certifiés et étoilés</h2>
              <p>Les professeurs présents sur la plateforme sont des personnes qui souhaitent partager leur connaissance et aider la communauté à leur échelle 🤝 </p>
              <p>Chaque professeur met à disposition sa bienveillance et sa pédagogie pour atteindre des résultats concrets avec les élèves.🥇</p>
              <p>Et qui de mieux qu'un professeur respectant et partageant la même éthique que l'élève pour l'aider à avoir des résultats ? Pour preuve, la moyenne des notes des professeurs est de 5/5 sur la plateforme !⭐⭐⭐⭐⭐</p>
          </div>
        </section>
    </div>
    </AuthPageWrraper>
  )
}


export default Home