import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggle}) => {

    const elements = posts.map((item)=>{ 
        if(typeof item === 'object' && item !== null ) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem 
                        {...itemProps}
                        onDelete={()=>onDelete(id)}
                        onToggle={(inst)=>onToggle(id, inst)}
                        />
                </li>
            )
        }
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;