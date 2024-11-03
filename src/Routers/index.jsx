import{useState,useEffect} from 'react'
import AppRoutes from './Paste'

 import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';
function Application() {
    const location = useLocation();
    const pathName = location.pathname;
    const [path, setPath] = useState(pathName);
    const [minified,setMinified]=useState(false);
    const routes=['/r-sale' && '/received']
  
    const navigate = useNavigate();
    const token=localStorage.getItem('token');
    useEffect(() => {
    //   if (!token) {
    //     navigate('/login');
    //   }
      setPath(pathName);
      if(_.includes(routes,path)){
        setMinified(true);
      }
    }, [pathName,token]);
  return (
    <>
    
    { path=== "/login" || path==="/register" ? (
        <AppRoutes/>
      ) : (
        <div id="app" className={`app app-header-fixed app-sidebar-fixed app-gradient-enabled app-content-full-height ${minified == true ? 'app-sidebar-minified' :'' }`}>
        <Header />
        <Navbar />

        <AppRoutes/>
        <a href="javascript:;" className="btn btn-icon btn-circle btn-theme btn-scroll-to-top" data-toggle="scroll-to-top"><i className="fa fa-angle-up"></i></a>
      </div>
      )}
      </>
    
  )
}

export default Application