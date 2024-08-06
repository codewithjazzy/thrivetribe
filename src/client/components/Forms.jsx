
export function FormInput({ type, id, name, label, defaultValue }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} defaultValue={defaultValue} />
        </div>
    );
};
//<FormInput type="" id="" name="" label="" required />


export function FormTextarea({ id, name, label, defaultValue }){
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea name={name} id={id} defaultValue={defaultValue}></textarea>
        </div>
    );
}
//<FormTextarea id="" name="" label="" />