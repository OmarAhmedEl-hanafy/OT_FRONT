import axios from "axios"
import HighLight from "../HighLight/HighLight"
import AssitantsSlider from "./AssitantsSlider"
import { useQuery } from "react-query";
import LoadingPage from "../LoadingPage/LoadingPage";

function AssistantCoach() {

  const GetInstructors = ()=> {
    return axios.get(`${import.meta.env.VITE_APP_API_URL}/Admin/GetInstructors`);
  }

  const {data:assitants, isLoading } = useQuery('GetInstructors',GetInstructors,{
    refetchInterval:false,
    refetchOnWindowFocus:false,
    refetchOnMount:false,
  })  

  if(isLoading) return <LoadingPage/>


  return (
    <section className="my-[50px]">
        <div className="container">
            <div className="max-w-max mx-auto">
                <HighLight text={'Skilled Introduce'} /> 
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-center mt-3">Our Top Class & Professional,<br/>
            Assistant Coach in One Place</h2>

            <AssitantsSlider assitants={assitants?.data} />
        </div>
    </section>
  )
}

export default AssistantCoach