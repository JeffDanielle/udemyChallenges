// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [output, setOutput] = useState(0);

  useEffect(() => {
    const convertCurrency = async () => {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${firstCurrency}&to=${secondCurrency}`)
      const data = await res.json()
      setOutput(data.rates[secondCurrency])
      console.log(data.rates)
    }

    if (firstCurrency === secondCurrency) return setOutput(amount)
    convertCurrency()

  }, [amount, firstCurrency, secondCurrency])

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter Amount"
        className=" border-2"
      />
      <select
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={secondCurrency}
        onChange={(e) => setSecondCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output} {secondCurrency}</p>
    </div>
  );
}
