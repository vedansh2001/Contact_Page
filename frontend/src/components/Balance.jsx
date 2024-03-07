export const Balance = ({ value }) => {
    return <div className="flex pt-4">
        <div className="font-bold text-xl">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-xl">
            Rs {value}
        </div>
    </div>
}