import myLogo from "../../assets/logo2.svg"

function Footer() {
  return (
        <footer className="bg-[#172533]">
          <div className="flex md:space-x-[100px] space-x-4 md:max-w-[70%] md:flex-row flex-col max-w-[60%] md:mx-auto pt-12 pb-12">
          <div>
               <img src={myLogo}alt="" className="mt-9 space-x-4 " /> 
               <p className="text-white max-w-[160px] mt-6 ">Résultats, Confiance, Excellence. Des services de qualité par la communauté pour la communauté</p>
            </div>
                <ul className="mt-10 ">
                    <li className="font-bold ml-3 text-white md:ml-0 space-x-0">LIENS UTILES</li>
                    <li className="mb-2 mt-2 text-white"> A propos</li>
                    <li className="mb-2 mt-2 text-white">FAQ</li>
                    <li className="mb-2 mt-2 text-white">Contact</li>
                    <li className="mb-2 mt-2 text-white"> Accueil</li>
                    <li className="mb-2 mt-2 text-white">Politique de confidentialité</li>
                    <li className="mb-2 mt-2 text-white">Conditions Générales</li>
                </ul>
                <ul className="mt-10">
                    <li className="font-bold text-white">SUIVEZ NOUS:</li>
                    <li className="mb-2 mt-2 text-white"> Facebook</li>
                    <li className="mb-2 mt-2 text-white"> Twitter</li>
                    <li className="mb-2 mt-2 text-white"> Twitter</li>
                </ul>
                {/* <ul className="mt-10">
                    <li className="font-bold text-white">INFOS:</li>
                    <li className="mb-2 mt-2 text-white"> contact@LiaisonPro.com</li>
                </ul> */}
            
          </div>
        </footer>
      );
    }

export default Footer
