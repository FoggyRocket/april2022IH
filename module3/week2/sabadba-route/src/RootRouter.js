
import {Routes, Route} from 'react-router-dom';
import  { ViewLifecycle,Profile,CharacterById } from './views'
function RootRouter(){
    return(

        <Routes>
            {/* Mis rutas!!  */}
            <Route path="/" element={<ViewLifecycle/>} />

            <Route path="/profile" element={<Profile/>} />

            <Route path="/random" element={<h1>Este es el random</h1>} />

            {/* con id  */}
            <Route path="/character/:id" element={<CharacterById/>} />
            {/* 404 v6 */}
            <Route path="*" element={<h1>Chale me perdi!</h1>} />

        </Routes>
    );
}

export default RootRouter;