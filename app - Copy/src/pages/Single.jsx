import React from "react";
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return(
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            
            <div className="user">
                <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="info">
                    <span>username</span>
                    <p>Time past since posted</p>
                </div>
                <div className="edit">
                    <Link to={'/write?edit=2'}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </div>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Natus sit vero cumque omnis, aut mollitia ab. Neque, 
                quidem voluptatem fugit doloribus dignissimos ea excepturi, 
                ratione at saepe autem reprehenderit vel .</p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single