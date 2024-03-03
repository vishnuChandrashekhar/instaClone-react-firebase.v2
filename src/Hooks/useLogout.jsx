import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/FirebaseConfig";
import useShowToast from "./useShowToast";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast()
  const navigate = useNavigate()
  const logoutUser = useAuthStore((state)=> state.logout)
  const handleLogout = async () => {
    try{
      await signOut()
      localStorage.removeItem('user-info')
      // navigate('/auth')
      logoutUser()
      showToast("Logout", "Log out successful", 'success')
    }catch (error){
      showToast("Error", error.message, "error")
    }
  }

  return {handleLogout, isLoggingOut, error}
}

export default useLogout
