import { useNavigate } from "react-router-dom";
  import {toast} from 'react-toastify'

function Logout() {
  let navigate = useNavigate()
  const handleRefresh = () => {
    window.location.reload();
  };
  return ()=>{
    console.log("hi")
          toast.error("Logged Out Successfully")
          sessionStorage.clear()
          handleRefresh()
          navigate('/')
          
      }
  }


export default Logout