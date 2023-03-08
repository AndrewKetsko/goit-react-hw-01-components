import FriendCard from "./FriendCard";

export default function FriendList({ friends }) {
    return <>
    <ul class="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => { 
                return <>
                    <FriendCard id={ id }
                        avatar={ avatar }
                        name={ name }
                        isOnline={ isOnline }/>
                </>
            })}
    </ul>
    </>
}