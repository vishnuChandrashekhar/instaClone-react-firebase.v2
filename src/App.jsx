import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import AuthPage from './Pages/Auth/AuthPage'
import PageLayout from './Layouts/PageLayouts/PageLayout'
import ProfilePage from './Pages/Profile/ProfilePage'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './Firebase/FirebaseConfig'

function App() {
  
  const [authUser] = useAuthState(auth)
  
  return (
    <>
    {/*  What ever the contents inside the routes will be as children for the pagelayout */}
    <PageLayout>
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to="/" />}/>
        <Route path='/:username' element={<ProfilePage />}/>
      </Routes>
    </PageLayout>
    </>
  )
}

export default App
