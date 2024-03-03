import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../Firebase/FirebaseConfig'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../Store/authStore';



const useSignUpWithEmailAndPassword = () => {
  
// Custom Hook
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


// Custom Hook
  const showToast = useShowToast()

  const loginUser = useAuthStore(state => state.login)

  const signup = async (inputs) => {
     if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
      showToast("Error", "Please fill all the fields", 'error')
      return
     }

     const usersRef = collection(firestore, 'users')
     const q = query(usersRef, where('username', '==', inputs.username))
     const querySnapshot = await getDocs(q)

     if(!querySnapshot.empty){
      showToast('Error','Username Already exists', 'error')
      return
     }

    try{
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if(!newUser && error){
        showToast("Error", error.message, "error")
        return
      }
      // Importent Action to be implemented in other application --- Keep Note
      if(newUser){
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio:'',
          profilePicURL: '',
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      }

    }catch(error){
      console.error('Error In creating user', error.message);
    }
  }

  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword
