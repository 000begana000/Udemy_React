import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.length + 1}>
            <td>{result.year}</td>
            <td>{userInput.initialInvestment}</td>
            <td>{result.interest}</td>
            <td>{result.valueEndOfYear}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
