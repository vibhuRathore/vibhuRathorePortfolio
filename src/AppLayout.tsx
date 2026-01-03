import App from './App.tsx'
import Sidebar from '@/components/navigation/Sidebar.tsx'
import FloatingMenu from './components/navigation/FloatingMenu.tsx'
import Profile from './features/Profile.tsx'

const AppLayout = () => {
  return (
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
    <FloatingMenu/>
    <Sidebar/>
    <Profile />
    <App />
  </div>
  )
}

export default AppLayout