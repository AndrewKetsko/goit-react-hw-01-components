import PropTypes from 'prop-types';
import FriendCard from "./FriendCard";
import { Friend_List } from './FriendList.styled';

export default function FriendList({ friends }) {
    return <>
        <Friend_List>
            {friends.map(({id, avatar, name, isOnline}) => { 
                return <>
                    <FriendCard id={ id }
                        avatar={ avatar }
                        name={ name }
                        isOnline={ isOnline }/>
                </>
            })}
        </Friend_List>
    </>
};

FriendList.propTypes = {
    friends: PropTypes.array
};