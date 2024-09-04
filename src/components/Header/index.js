
import {Link} from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import './index.css'
import { MdOutlineEvent } from "react-icons/md";
import { FaAutoprefixer } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6"
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaHubspot } from "react-icons/fa6";
import { MdNearMe } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

const Header=()=>{
   
    return(
        <nav className='nav-cnt'>
           <div className='header-cnt'>
                <div className='first-cnt'>
                    <div className='logo-cnt'>
                        <Link to="/"> <img src="https://i.ibb.co/ZLnHvkn/img2.jpg" alt="website logo" className='logo'/></Link> 
                    </div>
                    <div className='header-input-cnt'>
                        <input  className='search-input' type="search" placeholder='Search for Topic, Event or Location'/>
                        <IoIosSearch className="search-icon" size={50}/>
                    </div>
                </div>
                <div className='sec-cnt'>
                    <ul className='list-cnt'>
                 <li className='list-new'>
                        <li className='list-item'>
                            <Link to="/Near-event" className="link-item"><MdNearMe className="search-icon" size={20}/>Near_Event</Link>

                        </li>
                        <li className='list-item'>
                            <Link to="/create-filter" className="link-item"><FaFilter className="search-icon" size={20}/>Create_Filter</Link>

                        </li>
                </li>
                        <li className='list-item'>
                        
                            <Link to="/events" className="link-item"><MdOutlineEvent className="search-icon" size={20}/> Events</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/top" className="link-item"><FaAutoprefixer className="search-icon" size={20}/> Top100</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/venue" className="link-item"><FaMapLocationDot className="search-icon" size={20}/>Venues</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/company" className="link-item"><HiOutlineOfficeBuilding className="search-icon" size={20} />Companies</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/hub" className="link-item"><FaHubspot className="search-icon" size={20}/> Hub</Link>
                        </li>
                    
                        <hr className='hr-line'/>
                    
                        <li className='list-item add-cnt'>
                            <IoAddSharp size={30}/> 
                            <Link className="link-item add-para" to="/addevent"><p className='add-para'>Add_Event</p></Link>
                        </li>

                        <li className='list-item'>
                            <Link class="link-item" to="/login">
                              <button className='login-btn'>Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
           </div>
        </nav>
    )
}

export default Header