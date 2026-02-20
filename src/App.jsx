import './App.css'
import {useState} from "react";

function App() {
    const [strawberries, setStrawberries] = useState(0)
    const [bananas, setBananas] = useState(0)
    const [apples, setApples] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    function resetCounters(){
        setStrawberries(0);
        setApples(0);
        setBananas(0);
        setKiwis(0);
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

        </>
    )
}

export default App
