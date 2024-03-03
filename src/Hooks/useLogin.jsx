import { doc, getDoc } from "firebase/firestore"
import { auth, firestore } from "../Firebase/FirebaseConfig"
import useShowToast from "./useShowToast"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import useAuthStore from "../Store/authStore"

const useLogin = () => {
  const showToast = useShowToast()
  const [
    signInWithEmailAndPassword,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const loginUser = useAuthStore((state)=> state.login)

  const login = async (inputs) => {
    if(!inputs.email || !inputs.password){
      return showToast('Error', "Please fill all the fields", 'error')
    }

    try{
      const userCredecials = await signInWithEmailAndPassword(inputs.email, inputs.password)

      if(userCredecials){
        const docRef = doc(firestore, 'users', userCredecials.user.uid)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
          const userData = docSnap.data()
          localStorage.setItem('user-info', JSON.stringify(userData))
          loginUser(userData)
        }else{
          showToast("Error", "User data not found", 'error')
        }
      }
    }catch (error){
      showToast("Error", error.message, 'error')
    }
  }

  return { loading, error, login }
}

export default useLogin
