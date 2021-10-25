export function Input ({type, value, onChangeValue}) {
    function handonChange(e) {
        onChangeValue (e.target.value)
    }
     return (
        <input className='input' type={type} value={value} handonChange={onChange} />
    )
}