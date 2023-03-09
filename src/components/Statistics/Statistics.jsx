import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from "components/randomHEX";

export default
function Statistics({title, stats}) {
    return <>
        <StatisticsSection>
            <Title>{title}</Title>
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id} style={{backgroundColor: getRandomHexColor()}}> 
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