import { calculateInvestmentResults } from "../util/investment";
// [
//     year: i + 1, // year identifier
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year
//       annualInvestment: annualInvestment, // investment added in this year
// ]
export default function Result() {
  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investement Value</th>
        <th>{`Interest(Year)`}</th>
        <th>Total Interest</th>
        <th>Invest Capital</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>
  );
}
