import PropTypes from 'prop-types';
import { Name, Avatar, Status, Item } from './FriendCard.styled';

export default function FriendCard({ id, avatar, name, isOnline }) {
    return <>
        <Item key={id}>
            <Status>{ isOnline? 'online':'offline'}</Status>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{ name }</Name>
        </Item>
    </>
};

FriendCard.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};