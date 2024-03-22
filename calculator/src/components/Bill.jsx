const Bill = ({ BillNumber, changeBill }) => {
    return (
        <div className="mx-2 pt-2">
            <label>How much was the bill?</label>
            <input type="text" value={BillNumber} onChange={changeBill} placeholder="Bill value" className="border  border-black rounded-md indent-2" />
        </div>
    );
}

export default Bill;