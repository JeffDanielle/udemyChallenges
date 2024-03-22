import { useState } from 'react';
import Bill from './Bill'
import TipInput from './TipInput'
import ResetInput from './ResetBtn';
const TotalBill = () => {
    const [BillNumber, setBillNumber] = useState(null);
    const [Tip, setTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    const TotalTip = (((Tip / 100) + (friendTip / 100)) / 2) * 100
    const TotalFee = TotalTip + BillNumber

    const handleResetBtn = () => {
        setBillNumber("");
        setTip(0);
        setFriendTip(0);
    }
    return (
        <div>
            <Bill BillNumber={BillNumber} changeBill={(e) => setBillNumber(+e.target.value)} />
            <TipInput Tip={Tip} changeTip={(e) => setTip(+e.target.value)}>How did you like the service?</TipInput>
            <TipInput Tip={friendTip} changeTip={(e) => setFriendTip(+e.target.value)}>How did your friend like the service?</TipInput>
            {BillNumber ? <h1 className='text-2xl font-bold mx-2 pt-2'>You pay ${TotalFee}(${BillNumber} + ${TotalTip} tip)</h1> : null}
            {BillNumber ? <ResetInput handleReset={handleResetBtn}>Reset</ResetInput> : null}
        </div>
    );
}

export default TotalBill;