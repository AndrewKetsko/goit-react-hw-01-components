import PropTypes from 'prop-types';
import { TransHistory } from './Transactions.styled';

export default function Transactions({ data }) {
    return <>
      <TransHistory>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {data.map(({id, type, amount, currency})=>{
            return <>
              <tr key={id}>
                <td>{ type }</td>
                <td>{ amount }</td>
                <td>{ currency }</td>
              </tr>
            </>
          })}
        </tbody>
      </TransHistory>
    </>
};

Transactions.propTypes = {
  data: PropTypes.array
};