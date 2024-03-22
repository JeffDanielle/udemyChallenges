const ResetInput = ({ handleReset, children }) => {
    return (
        <button className="bg-blue-400 px-4 py-2 rounded-md mx-2 mt-4 hover:opacity-60 transition ease-in delay-50" onClick={handleReset}>{children}</button>
    );
}

export default ResetInput;