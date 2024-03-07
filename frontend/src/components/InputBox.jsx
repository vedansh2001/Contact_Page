export function InputBox({ placeholder, onChange, name }) {
    return (
        <div className="-mb-3">
            <div>
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    className="shadow border-black border w-10/12 pt-1 pr-2 pb-1 pl-2 rounded-sm bg-gray-300 "
                    name={name} // Use the `name` prop here
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
