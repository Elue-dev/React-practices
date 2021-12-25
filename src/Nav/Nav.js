import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

function Nav() {
    return (
        <nav>
            <div><h2>PRACTICE</h2></div>
            <ul>
                <li>
                    <Link to='/'>Counter</Link>
                </li>
                <li>
                    <Link to='/formapp'>MS Form App</Link>
                </li>
                <li>
                    <Link to='/hookformapp'>Hook Form App</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
