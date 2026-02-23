import './App.css'
import {useState} from "react";
import {useForm} from "react-hook-form";

function App() {
    const {register} = useForm();
    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    function resetCounters() {
        setStrawberries(0);
        setApples(0);
        setBananas(0);
        setKiwis(0);
    }
function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data={
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            age: formData.get("age"),
            zipcode: formData.get("zipcode"),
            deliverFrequency: formData.get("deliverFrequency"),
            choice: formData.get("choice"),
            suggestions: formData.get("suggestion"),
            terms: formData.get("terms"),

            fruits:{
                strawberries,
                bananas,
                apples,
                kiwis,
            },
        };
        console.log(data);
}

    return (

        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <article>
                    <h2>🍓 Aardbeien</h2>
                    <button type="button" disabled={strawberries === 0}
                            onClick={() => setStrawberries(strawberries - 1)}>-
                    </button>
                    <p>{strawberries}</p>
                    <button type="button" onClick={() => setStrawberries(strawberries + 1)}>+</button>

                </article>
                <article>
                    <h2>🍏 Appels</h2>
                    <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}>-</button>
                    <p>{apples}</p>
                    <button type="button" onClick={() => setApples(apples + 1)}>+</button>
                </article>
                <article>
                    <h2>🍌 Bananen</h2>
                    <button type="button" disabled={bananas === 0} onClick={() => setBananas(bananas - 1)}>-</button>
                    <p>{bananas}</p>
                    <button type="button" onClick={() => setBananas(bananas + 1)}>+</button>
                </article>
                <article>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2>🥝 Kiwi's</h2>
                    <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}>-</button>
                    <p>{kiwis}</p>
                    <button type="button" onClick={() => setKiwis(kiwis + 1)}>+</button>
                </article>
                <article>
                    <button type="button" onClick={() => resetCounters()}>Reset</button>
                </article>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName-field">
                        Voornaam
                        <input
                            type="text"
                            id="firstName-field"
                            name="firstName"
                        />
                    </label>
                    <label htmlFor="lastName-field">
                        Achternaam
                        <input type="text"
                        id="lastName-field"
                        name="lastName"/>
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd
                        <input type="number"
                        id="age-field"
                        name="age"/>
                    </label>
                    <label htmlFor="zipcode-field">
                        Postcode
                        <input type="text"
                        id="zipcode-field"
                        name="zipcode"/>
                    </label>
                    <label htmlFor="deliverFrequenty-field">
                        Bezorgrequentie
                        <select name="deliverFrequenty" id="deliverFrequenty-field">
                            <option value="every week">iedere week</option>
                            <option value="every 2 weeks">om de week</option>
                            <option value="every month">iedere maand</option>
                        </select>
                    </label>
                    <label htmlFor="timeSlot-field">
                        <input type="radio" id="dayTime" name="choice" value="Overdag" required />
                        Overdag
                    </label>
                    <label htmlFor="timeSlot-field">
                        <input type="radio" id="evening" name="choice" value="'s Avonds" />
                        's Avonds
                    </label>
                    <label htmlFor="suggestions-field">
                        Opmerking
                        <textarea name="suggestion" id="suggestion-field" cols="30" rows="6"></textarea>
                    </label>
                    <label htmlFor="terms-field">
                        <input type="checkbox" id="terms-field" name="terms" required /> Ik ga akkoord met de voorwaarden
                    </label>
                    <button type={"submit"}>Verzend</button>
                </form>
            </section>

        </>
    )
}

export default App
