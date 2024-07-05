import ReactDOM from 'react-dom/client'
import './index.css'
import SiteRoutes from "./assets/components/Routes.jsx";
import { FavoriteProvider } from './assets/context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoriteProvider>
        <SiteRoutes/>
    </FavoriteProvider>
  
)