import { DropdownMenu, NavBar, NavItems } from '../../components/NavBar'
import './style.css';
import {ReactComponent as PlusIcon} from '../../icons/plus.svg';
import {ReactComponent as MessengerIcon} from '../../icons/messenger.svg';
import {ReactComponent as CaretIcon} from '../../icons/caret.svg';
import {ReactComponent as BoltIcon} from '../../icons/bolt.svg';
import {ReactComponent as BellIcon} from '../../icons/bell.svg';



export function Page5(){
    return(
        <NavBar>
            <NavItems icon={<PlusIcon/>}/>
            <NavItems icon={<BellIcon/>}/>
            <NavItems icon={<MessengerIcon/>}/>
            <NavItems icon={<BoltIcon/>}/>
            
            <NavItems icon={<CaretIcon/>}>
                <DropdownMenu/>
            </NavItems>


        </NavBar>
    )
}