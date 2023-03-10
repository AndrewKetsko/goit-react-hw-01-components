import PropTypes from 'prop-types';
import FriendCard from "./FriendCard";
import { Friends } from './FriendList.styled';

export default function FriendList({ friends }) {
    return <>
        <Friends>
            {friends.map(({id, avatar, name, isOnline}) => { 
                return <>
                    <FriendCard id={ id }
                        avatar={ avatar }
                        name={ name }
                        isOnline={ isOnline }/>
                </>
            })}
        </Friends>
    </>
};

FriendList.propTypes = {
    friends: PropTypes.array
};