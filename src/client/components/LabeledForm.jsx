
export default function LabeledForm({ type, id, name, label }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name}/>
        </div>
    );
};

//<LabeledForm type="" id="" name="" label="" required/>