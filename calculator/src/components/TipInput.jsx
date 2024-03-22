const TipBill = ({ Tip, changeTip, children }) => {
    return (
        <div className="mx-2 pt-2">
            <label>{children}</label>
            <select value={Tip} onChange={changeTip} className="border border-black rounded-md indent-1 w-1/6">
                <option value={0}>Dissatisfied(0%)</option>
                <option value={5}>It was okay(5%)</option>
                <option value={10}>It was good(10%)</option>
                <option value={20}>Absolutely amazing!(20%)</option>
            </select>
        </div>
    );
}

export default TipBill;