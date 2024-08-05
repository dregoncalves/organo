import ('./ListaSuspensa.css')

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option required={props.obrigatorio} key={item}>{item}</option> 
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;