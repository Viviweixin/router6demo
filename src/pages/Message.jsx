import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Message() {
    
    const [messages] = useState([
        {id:'001', title: 'Message 1', content:'it is ok'},
        {id:'002', title: 'Message 2', content:"reading"},
        {id:'003', title: 'Message 3', content:" Floral spray mist"},
        {id:'004', title: 'Message 4', content:" anti-bluelight"}
    ])

    // const navigate = useNavigate()
    // function showDetail(m){
    //     navigate('detail', {
    //         replace:false,
    //         state:{
    //             id:m.id,
    //             title:m.title,
    //             content:m.content
    //         }
    //     })
    // }
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return(
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                                {/* <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}
                                {/* <Link to='detail' state={{id:m.id, title:m.title, content:m.content}}>{m.title}</Link> */}
                                
                                {/* <button onClick={()=>showDetail(m)}>Show details</button> */}
                            </li>
                        )
                    })
                }
            </ul>   
            <hr />
            <Outlet />
        </div>
    )
}
