import {useState} from 'react'
import Navbar from '../navbar/Navbar';
import { Front } from '../sections/front/Front';

const Home:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle:any = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <Front/>
        </>
    )
}

export default Home
