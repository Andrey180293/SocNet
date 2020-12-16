import React from "react";
import x from './Users.module.css';
import { NavLink } from "react-router-dom";
import { Button } from 'antd';
import { Pagination } from 'antd';


const Users = (props) => {
    let userPhoto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png';
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(p => {
                return  <span id={x.curPage} className={props.currentPage === p && x.selectedPage}
               onClick={(e) => { props.onPageChanged(p); }}>{p},</span>
            })}
        </div>
        <div>
            {props.users.map(u => <div key={u.id} className={x.row}>
                <div className={x.column_right}>
                    <NavLink to={'profile/'+ u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto}
                        className={x.userPhoto} /></NavLink>
                        
                    {u.followed
                        ? <Button type="primary" danger style={{width:'90px'}} disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                            props.unfollow(u.id)
                            props.subscribeR()
                        }
                        }>
                                Unfollow </Button>
                    : <Button type="primary" style={{width:'90px'}} disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                               props.subscribeR()

                            }}>
                                Follow</Button>
                    }
                </div>
                <div className={x.column_left}>
                    {u.name}<br />
                    {u.status}
                    {u.followed}


                </div>


            </div>)}
        </div>

    </div>)

}




export default Users