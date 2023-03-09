import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export default
function Statistics({title, stats}) {
    return <>
        <StatisticsSection>
            <Title>{title}</Title>
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}> 
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                    </Item> )
                )}
            </StatList>
        </StatisticsSection>
    </>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
};