import "./App.css";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Counter from "./components/Counter.jsx";
import TextInput from "./components/TextInput.jsx";
import RadioGroup from "./components/RadioGroup.jsx";
import Button from "./components/Button.jsx";
import CheckboxInput from "./components/CheckboxInput.jsx";


function App() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const [fruits, setFruits] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    });

    function updateFruit(fruit, amount) {
        setFruits(prev => ({
            ...prev,
            [fruit]: Math.max(0, prev[fruit] + amount),
        }));
    }

    function resetCounters() {
        setFruits({
            strawberries: 0,
            bananas: 0,
            apples: 0,
            kiwis: 0,
        });
    }

    function onSubmit(formValues) {
        const data = {
            ...formValues,
            fruits,
        };

        console.log(data);

        reset();
        resetCounters();
    }

    const totalFruits = Object.values(fruits).reduce((a, b) => a + b, 0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <section>
                <Counter
                    label="🍓 Aardbeien"
                    value={fruits.strawberries}
                    onIncrease={() => updateFruit("strawberries", 1)}
                    onDecrease={() => updateFruit("strawberries", -1)}
                />
                <Counter
                    label="🍏 Appels"
                    value={fruits.apples}
                    onIncrease={() => updateFruit("apples", 1)}
                    onDecrease={() => updateFruit("apples", -1)}
                />
                <Counter
                    label="🍌 Bananen"
                    value={fruits.bananas}
                    onIncrease={() => updateFruit("bananas", 1)}
                    onDecrease={() => updateFruit("bananas", -1)}
                />
                <Counter
                    label="🥝 Kiwi's"
                    value={fruits.kiwis}
                    onIncrease={() => updateFruit("kiwis", 1)}
                    onDecrease={() => updateFruit("kiwis", -1)}
                />
                <Button type="button" onClick={resetCounters}>Reset fruit</Button>

            </section>

            <section>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextInput
                        label="Voornaam"
                        name="fistName"
                        register={register}
                        error={errors.fistName}
                        rules={{required: "Voornaam is verplicht"}}
                    />

                    <TextInput
                        label="Achternaam"
                        name="lastName"
                        register={register}
                        error={errors.lastName}
                        rules={{required: "Achternaam is verplicht"}}
                    />

                    <TextInput
                        label="Leeftijd"
                        name="age"
                        type="number"
                        register={register}
                        error={errors.age}
                        rules={{
                            required: "Leeftijd is verplicht",
                            valueAsNumber: true,
                            min: {value: 18, message: "Minimale leeftijd is 18 jaar"},
                        }}
                    />

                    <TextInput
                        label="Postcode"
                        name="zipcode"
                        register={register}
                        error={errors.zipcode}
                        rules={{required: "Postcode is verplicht"}}
                    />


                    <label>
                        Bezorgfrequentie
                        <select {...register("deliveryFrequency")}>
                            <option value="every week">Iedere week</option>
                            <option value="every 2 weeks">Om de week</option>
                            <option value="every month">Iedere maand</option>
                        </select>
                    </label>

                    <RadioGroup
                        label="Bezorgmoment"
                        name="deliveryWindow"
                        options={["Overdag", "'s Avonds"]}
                        register={register}
                        error={errors.deliveryWindow}
                        rules={{required: "Bezorgmoment is verplicht"}}
                    />


                    <label>
                        Opmerking
                        <textarea {...register("suggestion")} rows="4"/>
                    </label>

                    <CheckboxInput
                        label="Ik ga akkoord met de voorwaarden"
                        name="terms"
                        register={register}
                        error={errors.terms}
                        rules={{required: "Je moet akkoord gaan met de voorwaarden"}}
                    />

                    <Button
                        type="submit"
                        disabled={totalFruits === 0}>
                        Verzend
                    </Button>


                </form>
            </section>
        </>
    );
}

export default App;