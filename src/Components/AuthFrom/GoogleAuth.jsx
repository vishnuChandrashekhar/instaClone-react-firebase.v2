import { Flex, Image, Text } from "@chakra-ui/react"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import useShowToast from "../../Hooks/useShowToast";
import useAuthStore from "../../Store/authStore";
import { firestore } from "../../Firebase/FirebaseConfig";
import { setDoc, doc, getDoc} from 'firebase/firestore'
import { auth } from "../../Firebase/FirebaseConfig";

const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore((state)=> state.login)

  const handleGoogleAuth = async () => {
    try{
      const newUser = await signInWithGoogle()
      if(!newUser && error){
        showToast("Error", `Error in google auth: ${error.message}`, 'error')
        return
      }
      
      const userRef = doc(firestore, 'users', newUser.user.uid)
      const userSnapShot = await getDoc(userRef)
      if(userSnapShot.exists()){
        //Login
        const userDoc = userSnapShot.data()
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      }else{
        //Sign up
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullname: newUser.user.displayName,
          bio:'',
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        loginUser(userDoc)
      }
    }catch (error){
      showToast("Error", error.massage, 'error')
    }
  }

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'} onClick={handleGoogleAuth}>
        <Image  src='/google.png' w={5} alt='Google Logo' />
        <Text mx={'2'} color={'blue.500'}>
          {prefix } with google
        </Text>
      </Flex>
    </>
  )
}

export default GoogleAuth
