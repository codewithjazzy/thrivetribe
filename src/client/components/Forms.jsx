
export function FormInput({ type, id, name, label }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name}/>
        </div>
    );
};
//<FormInput type="" id="" name="" label="" required />


export function FormTextarea({ id, name, label }){
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea name={name} id={id}></textarea>
        </div>
    );
}
//<FormTextarea id="" name="" label="" />