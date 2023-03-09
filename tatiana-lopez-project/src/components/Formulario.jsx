import { useState } from "react";
import Card from './Card'
import styles from './Formulario.module.css'

function Formulario() {

    //UseState
    const [name, setName] = useState("");
    const [pet, setPet] = useState("");
    const [error, setError] = useState("");
    const [showCard, setShowCard] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangePet = (e) => setPet(e.target.value)

    const validateInputName = () => {return name.trim().length >= 3};
    const validateInputPet = () => {return pet.length >= 6};

    const handleOnChange = (e) => {
        e.preventDefault();

        const validatedInputName = validateInputName()
        const validatedInputPet = validateInputPet()
        
        if(validatedInputName && validatedInputPet) {
            setShowCard(true);
            setError("");
        } else {
            setShowCard(false);
            setError("Por favor chequea que la información sea correcta.");
        }
    }

    return (
        <div className={styles.container}>
            <h1>Completa los datos:</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleOnChange}>
                    <div>
                        <input type="text" placeholder="Ingresa tu nombre" value={name} onChange={onChangeName}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingresa el nombre de tu mascota" value={pet} onChange={onChangePet}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            {error ? <div className={styles.error}>{error}</div> : null}
            {showCard ? <Card name={name} pet={pet}/> : null}
        </div>
    );
}

export default Formulario;