import './TextInput.css'

export function TextInput ({value, onChangeValue}) {
    function onChange(event) {
        onChangeValue (event.target.value)
    }
     return (
        <input className='text-input' value={value} onChange={onChange} />
    )
}

