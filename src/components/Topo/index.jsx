import './style.css'
import React from 'react'
import {usePage} from '../../context/Pages'
import { useHistory } from 'react-router-dom';


export default function Topo(props){
    const {page, setPage} = usePage();
    const history = useHistory()
    const totalPages = 15;
    
    function goToPage(x){
        history.push(`/${x}`)
    }

    async function nextPage() {
        if(page < totalPages){
            setPage(page + 1);
            goToPage(page+1)
        }
    };
    async function previousPage() {
        if(page > 1){
            setPage(page - 1);
            goToPage(page-1)
        } 
    };

    return(
        <>
            <div id='topo'>
                <button onClick={previousPage}>-</button>
                <div>
                    <h1>{props.children}</h1>
                    <h3>Página {page} de {totalPages}</h3>
                </div>
                <button onClick={nextPage}>+</button>  
            </div>
            <div id="exercices">
            </div>
        </>
    )
}
