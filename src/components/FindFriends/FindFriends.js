import React from 'react';
import classes from './FindFriends.module.css';
import './../App.css';
import Human from "./Human/Human";
import axios from "axios";

const FindFriends = (props) => {

    let Show_More = array => {
        props.Show_More(array);
    };

    let Hide_Users = () => {
        props.Hide_Users();
    }

    if (props.findFriendsPage.showPeople.length == 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => Show_More(response.data.items));

    }

    let People = props.findFriendsPage.showPeople.map(el => <Human Change_Flag={props.Change_Flag}
                                                                   id={el.id} name={el.name}
                                                                   followed={el.followed}/>)



    return (
        <div className={classes.block}>

            <div className={`${classes.block__title} title`}>
                Users:
            </div>
            <div className={classes.block__list}>
                {People}
            </div>
            <div className={classes.block__lowerPage}>
                <div className={classes.block__buttonPage}>
                    <div onClick={Show_More} className={`${classes.block__page_button} button`}>
                        Show more
                    </div>
                    <div onClick={Hide_Users} className={`${classes.block__page_button} button`}>
                        Hide users
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FindFriends;