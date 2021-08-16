import './style.css'
import { Counter } from "../../components/Counter";
import { UpperLowerCase } from "../../components/UpperLowerCase";
import { Cronometer } from '../../components/Cronometer';

export function Page2(){
    return(
        <div id="exercices">
            <Counter>Contador</Counter>
            <Cronometer></Cronometer>
            <UpperLowerCase>TesTanDo</UpperLowerCase>
        </div>
    )
}