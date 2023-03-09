import PropTypes from 'prop-types';
import { Profiler, Avatar, Name, Tag, Location, Description, Label, Quantity, Stats, StatsEl } from './Profile.styled';

export default
function Profile({ username, tag, location, avatar, stats }) {
    return <>
        <Profiler>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <StatsEl>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsEl>
                <StatsEl>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsEl>
                <StatsEl>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsEl>
            </Stats>
        </Profiler>
    </>
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
};