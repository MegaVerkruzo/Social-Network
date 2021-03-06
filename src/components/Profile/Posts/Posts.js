import s from './Posts.module.css';
import './OnePost/OnePost';
import OnePost from "./OnePost/OnePost";
import React from 'react';
import './../../App.css';


const Posts = (props) => {

    const postElements = props.state.postData.map(el => <OnePost id={el.id} message={el.message} likes={el.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateText = () => {
        let text = newPostElement.current.value;

        props.updateText(text);
    }

    return (
        <div className="block_up">
            <div className={`${s.posts__title} title`}>
                My posts:
            </div>
            <div className={s.form}>
                <div>
                    <textarea onChange={updateText} className={s.form__area} ref={newPostElement}
                              placeholder="Write something>:3" value={props.state.message}></textarea>
                </div>
                <div className={`${s.form__button} button`} onClick={addPost}>
                    <div>Send</div>
                </div>
            </div>
            <div class={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default Posts;