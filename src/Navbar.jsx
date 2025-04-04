import {Link} from 'react-router-dom'



const Navbar = () => {


    return (
        <div className='nav-bar'>
            <div>
                <p>Sort articles by</p>
            </div>
                
            <div>
                <p>Order articles by</p>
            </div>

            <Link to='./topics'>
            <div>
                 <p>Browse Topics</p>
            </div>
            </Link>

            <div>
                <p>Search</p>
            </div>
        </div>
    )

}

export { Navbar }