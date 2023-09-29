import Header from './Header'
import Footer from './Footer'
import Main from '../pages/Main'
import Alquilar from '../pages/Alquilar'
import Detalle from '../pages/Detalle'
import {Route , Switch} from 'react-router-dom'
import '../pages/Main/assets/css/reset.css'
import Error404 from './Error404'



const App = () => {
    return ( 
        <>
        <Header />
        <Switch> 
            <Route exact path="/" component={Main}/>
            <Route exact path="/alquilar" component={Alquilar}/>
            <Route exact path="/detalle" component={Detalle}/>
            <Route component={Error404}/>
        </Switch>
        <Footer />
        </>
     );
}
 
export default App;