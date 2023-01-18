const App = () => {
    const foyerCard1 = [
        {
            id: 1,
            text: "Propriétaire occupant",
            active: false
        }, {
            id: 2,
            text: "Locataire",
            active: false
        }, {
            id: 3,
            text: "Propriétaire d'une résidence secondaire",
            active: false
        }, {
            id: 4,
            text: "Propriétaire bailleur",
            active: false
        }

    ]
    const logementCard3 = [
        {
            id: 1,
            text: "Plus de 15 ans",
            active: false
        }, {
            id: 2,
            text: "Entre 2 et 15 ans",
            active: false
        }, {
            id: 3,
            text: "Moins de 15 ans",
            active: false
        }

    ]
    const foyerCard3 = [
        {
            id: 1,
            text: "Moins de 15 262 €",
            active: false
        }, {
            id: 2,
            text: "Entre 15 262 et 19 565 €",
            active: false
        }, {
            id: 3,
            text: "Entre 19 565 et 29 148 €",
            active: false
        }, {
            id: 4,
            text: "Plus de 29 148 €",
            active: false
        }

    ]
    const projetCard3 = [
        {
            id: 1,
            text: "Inférieur à 2 mois",
            active: false
        }, {
            id: 2,
            text: "Entre 2 et 6 mois",
            active: false
        }, {
            id: 3,
            text: "Supérieur à 6 mois",
            active: false
        }

    ]
    const [state, setState] = React.useState({
        logementType: "",
        city: "",
        zipCode: "",
        logementAcheve: "",
        surface: "",
    })
    return (
        <div className="p-4">
            <Section title="VOTRE LOGEMENT" id="1" cardCount="2">
                <Card title="Quel est le type de votre logement ?">
                    <Logement />
                </Card>
                <Card title="Où se situe votre logement ?">
                    <ComboBox />
                </Card>
                <Card title="À quelle période votre logement a-t-il été achevé ?">
                    <RadioRect els={logementCard3} />
                </Card>
                <Card title="Quelle est la surface de votre logement ?" info="Il s'agit de la surface chauffée de votre logement">
                    <div className="relative">
                        <input id="surface" className="w-full py-2 pl-3 pr-10 text-sm rounded-lg leading-5 text-gray-900 focus:ring-0 peer pt-6 placeholder-shown:hidden shadow-md border" />
                        <label
                            htmlFor="surface"
                            className="select-none absolute top-1/2 text-sm text-gray-500 -translate-y-1/2 left-3 peer-focus:translate-none peer-focus:top-3 transition-all cursor-text peer-focus:text-xs "
                        >
                            Surface du logement en m²
                        </label>

                    </div>
                </Card>
                <Card title="Quel est votre type d'énergie actuelle ?" cols="2">
                    <Energy />
                </Card>
            </Section>
            <Section title="VOS TRAVAUX" id="2" cardCount="1" >
                <Card title="Quels sont les travaux que vous souhaitez réaliser ?" subTitle="(Plusieurs choix possibles afin de comparer les aides disponibles pour chacun d'entre eux)">
                    <Travaux />
                </Card>
            </Section>
            <Section title="VOTRE FOYER" id="3" cardCount="2" >
                <Card title="Quelle est votre situation vis-à-vis du logement ?">
                    <RadioRect els={foyerCard1} />
                </Card>
                <Card title="Combien de personnes vivent dans votre foyer ?" info="Nombre de personnes à charge, rattachées au même foyer fiscal">
                    <div className="relative">
                        <input id="foyer" className="w-full py-2 pl-3 pr-10 text-sm rounded-lg leading-5 text-gray-900 focus:ring-0 peer pt-6 placeholder-shown:hidden shadow-md border" />
                        <label
                            htmlFor="foyer"
                            className="select-none absolute top-1/2 text-sm text-gray-500 -translate-y-1/2 left-3 peer-focus:translate-none peer-focus:top-3 transition-all cursor-text peer-focus:text-xs "
                        >
                            Personnes dans votre foyer
                        </label>

                    </div>
                </Card>
                <Card title="Quel est le montant de votre revenu fiscal de référence ?" subTitle={`Vous trouverez votre revenu fiscal de référence sur la page de garde de votre dernier avis d'imposition, dans le cadre "Vos références".`}>
                    <RadioRect els={foyerCard3} />
                </Card>
            </Section>
            <Section title="VOTRE PROJET" id="4" cardCount="2">
                <Card title="Quelle est l'échéance de votre projet ?">
                    <RadioRect els={projetCard3} />
                </Card>
            </Section>
        </div>
    );
}
const Travaux = () => {
    const items = [
        {
            id: 1,
            text: "Chaudière gaz à condensation",
            active: false
        },
        {
            id: 2,
            text: "Pompe à chaleur Air / Eau",
            active: false
        },
        {
            id: 3,
            text: "Pompe à chaleur Air / Air",
            active: false
        },
        {
            id: 4,
            text: "Pompe à chaleur Hybride",
            active: false
        },
        {
            id: 5,
            text: "Poêle à bois / granulés",
            active: false
        },
        {
            id: 6,
            text: "Chaudière bois / granulés",
            active: false
        },
        {
            id: 7,
            text: "Radiateur électriques",
            active: false
        },
        {
            id: 8,
            text: "Chauffe-eau thermodynamique",
            active: false
        },
        {
            id: 9,
            text: "Ventilation double flux",
            active: false
        }
    ]
    const [active, setActive] = React.useState()
    return (
        <div className="grid md:grid-cols-5 grid-cols-2 gap-5">
            {items.map(item => <RadioSquare text={item.text} active={active} setActive={setActive} id={item.id} />)}
        </div>
    )
}
const Energy = () => {
    const items = [
        {
            id: 1,
            text: "Électrique",
            sub: {
                title: "De quel équipement disposez-vous ?",
                info: "Pour les « anciens » : sans marquage CE ou NF, ou certification NF Cat. A, NF Cat.B ou 1*.Pour les « nouvelle génération » : certification 2*, 3* ou 3* oeil.",
                els: ["Chaudière électrique", "Radiateurs électriques anciens", "Radiateurs électriques nouvelle génération"]
            },
            active: false
        },
        {
            id: 2,
            text: "Gaz",
            sub: {
                title: "Votre chaudière est-elle à condensation ?",
                info: "Généralement les chaudières de moins de 10 ans sont à condensation",
                els: ["Oui", "Non"]
            },
            active: false
        },
        {
            id: 3,
            text: "Bois",
            active: false
        },
        {
            id: 4,
            text: "Fioul",
            sub: {
                title: "Votre chaudière est-elle à condensation ?",
                info: "Généralement les chaudières de moins de 10 ans sont à condensation",
                els: ["Oui", "Non"]
            },
            active: false
        },
        {
            id: 5,
            text: "Charbon",
            sub: {
                title: "De quel équipement disposez-vous ?",
                els: ["Chaudière à charbon", "Poêle à charbon"]
            },
            active: false
        }
    ]
    const [active, setActive] = React.useState()
    const [selected, setSelected] = React.useState()
    React.useEffect(() => {
        setSelected(items.find(item => item.id === active))
    }, [active])
    return (
        <div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-5 mb-4">
                {items.map(item => <RadioSquare text={item.text} active={active} setActive={setActive} id={item.id} />)}
            </div>
            {selected && selected.sub && <Card title={selected.sub.title} info={selected.sub.info}>
                <RadioRect els={selected.sub.els.map((el, id) => {
                    return { text: el, id }
                })} />
            </Card>}
        </div>
    )
}
const Logement = () => {
    const [active, setActive] = React.useState()
    return (
        <div className="grid grid-cols-3 gap-5">
            <RadioSquare setActive={setActive} id={1} active={active} text={"Maison"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 80"
                    className="w-12 h-12"
                >
                    <path fill="#999" d="m6 63-4 2 28 14 4-2z" />
                    <path fill="#E5E5E5" d="M16 4 0 28v36l2 1 32-16V13L18 5z" />
                    <path d="m2 29-2-1v36l2 1z" opacity=".06" />
                    <path d="M34 49 2 65V29L18 5l16 8z" opacity=".39" />
                    <path fill="#E5E5E5" d="M34 77 6 63V29l28 14z" />
                    <path fill="#FFF" d="m17 53.5-8-4v15l8 4z" />
                    <path fill="#656565" d="m10 51 6 3v14l-6-3z" />
                    <path fill="#39C" d="m11 52.5 4 2v4l-4-2z" />
                    <path d="m11 52.5 4 2v1l-4-2z" opacity=".15" />
                    <path fill="#FFF" d="m27 41.5-6-3v15l6 3z" />
                    <path fill="#656565" d="m22 40 4 2v14l-4-2z" />
                    <path fill="#39C" d="m23 41.5 2 1v12l-2-1z" />
                    <path d="m23 41.5 2 1v1l-2-1z" opacity=".15" />
                    <path fill="#FFF" d="m32 44-6-3v15l6 3z" />
                    <path fill="#656565" d="m27 42.5 4 2v14l-4-2z" />
                    <path fill="#39C" d="m28 44 2 1v12l-2-1z" />
                    <path d="m28 44 2 1v1l-2-1z" opacity=".15" />
                    <path d="m6 29 28 14v6L6 35zM6 46l28 14v6L6 52z" opacity=".1" />
                    <path d="M34 77 6 63V29l28 14z" opacity=".06" />
                    <path fill="#BAA794" d="m16 55 4-2V36l-4 2z" />
                    <path d="m16 55 4-2V36l-4 2z" opacity=".39" />
                    <path fill="#999" d="m20 52 10 5v4l-14-7z" />
                    <path fill="#39C" d="m16 47 14 7v6l-14-7z" opacity=".6" />
                    <path d="m23 50.7 7 3.3v6l-3-1.4z" opacity=".15" />
                    <path
                        fill="#FFF"
                        d="m16 47 3 1.4 5.3 8.6-8.3-4z"
                        opacity=".2"
                    />
                    <path fill="#E5E5E5" d="m16 53 14 7v2l-14-7z" />
                    <path
                        fill="#BAA794"
                        d="M16 55 2 48V31l14 7zM30 79l-14-7V55l14 7z"
                    />
                    <path fill="#656565" d="m13 38.5-8-4v11l8 4z" />
                    <path fill="#FFF" d="m6 36 6 3v9l-6-3z" />
                    <path fill="#39C" d="m7 37.5 4 2v7l-4-2z" />
                    <path d="m7 37.5 4 2v1l-4-2z" opacity=".15" />
                    <path fill="#656565" d="m27 62.5-8-4v11l8 4z" />
                    <path fill="#FFF" d="m20 60 6 3v9l-6-3z" />
                    <path fill="#39C" d="m21 61.5 4 2v7l-4-2z" />
                    <path d="m21 61.5 4 2v1l-4-2z" opacity=".15" />
                    <path
                        fill="#E5E5E5"
                        d="m30 62-14-7v-2l14 7zM30 45 2 31v-2l28 14z"
                    />
                    <path fill="#2D3134" d="M2 29.2 18 5.7l30 15.1-16 23.5z" />
                    <path d="M2 29.2 18 5.7l30 15.1-16 23.5z" opacity=".06" />
                    <path
                        fill="#FFF"
                        d="m18 5.7-.7 1.2L47 21.8l1-1z"
                        opacity=".2"
                    />
                    <path fill="#E5E5E5" d="M46 19 30 43v36l2 1 32-16V28l-16-8z" />
                    <path d="m32 44-2-1v36l2 1z" opacity=".06" />
                    <path
                        d="M37.8 71.1c-.6.3-1.1 1-1.1 1.6 0 .6.5.8 1.1.5.6-.3 1.1-1 1.1-1.6s-.5-.8-1.1-.5zM60.3 60.8c.7-.4 1.3-1.2 1.3-1.9s-.6-1-1.3-.6c-.7.4-1.3 1.2-1.3 1.9s.6 1 1.3.6zM34.7 64.7c.5-.2.9-.8.9-1.3s-.4-.7-.9-.4c-.5.2-.9.8-.9 1.3.1.4.5.6.9.4zM58.5 29.9c0-.7-.6-1-1.3-.6-.7.4-1.3 1.2-1.3 1.9s.6 1 1.3.6c.8-.3 1.3-1.2 1.3-1.9zM57.3 53.2c0-.1-.1-.2-.2-.1s-.2.2-.2.3.1.2.2.1.2-.2.2-.3zM47.5 70c0-.1-.1-.2-.2-.1s-.2.2-.2.3.1.2.2.1.2-.2.2-.3zM57.4 45.1c-.4.2-.6.6-.6 1s.3.5.6.3c.4-.2.6-.6.6-1s-.3-.5-.6-.3zM50.6 34.5c0 .1.1.2.2.1s.2-.2.2-.3c0-.1-.1-.2-.2-.1-.1 0-.2.2-.2.3zM42.6 36.1c.7-.4 1.3-1.2 1.3-1.9s-.6-1-1.3-.6c-.7.4-1.3 1.2-1.3 1.9 0 .6.6.9 1.3.6zM36.3 45.2c-.7.4-1.3 1.2-1.3 1.9s.6 1 1.3.6c.7-.4 1.3-1.2 1.3-1.9s-.6-1-1.3-.6zM41 62.7c0-.6-.5-.8-1.1-.5s-1.1 1-1.1 1.6c0 .6.5.8 1.1.5.6-.3 1.1-1 1.1-1.6zM49.5 56.4c0-.6-.5-.8-1.1-.5s-1.1 1-1.1 1.6.5.8 1.1.5c.6-.2 1.1-1 1.1-1.6zM34.7 67.6c-.4.2-.6.6-.6 1s.3.5.6.3c.4-.2.6-.6.6-1s-.2-.5-.6-.3zM50.2 45.2c-.6.3-1.1 1-1.1 1.6s.5.8 1.1.5c.6-.3 1.1-1 1.1-1.6-.1-.5-.5-.8-1.1-.5zM50.8 26.8c0 .6.5.8 1.1.5s1.1-1 1.1-1.6c0-.6-.5-.8-1.1-.5s-1.1 1-1.1 1.6zM49.7 66.9c.5-.2.9-.8.9-1.3s-.4-.7-.9-.4c-.5.2-.9.8-.9 1.3.1.5.4.6.9.4zM59.4 37.1c-.2.1-.3.3-.3.5s.1.2.3.2c.2-.1.3-.3.3-.5 0-.3-.1-.3-.3-.2zM60.8 56.2c-.2.1-.3.3-.3.5s.1.2.3.2c.2-.1.3-.3.3-.5s-.2-.2-.3-.2zM59.3 40.1c0-.2-.2-.3-.4-.2-.2.1-.4.3-.4.5s.2.3.4.2c.3-.1.4-.3.4-.5zM45.6 51.5c0-.2-.2-.3-.4-.2-.2.1-.4.3-.4.5s.2.3.4.2c.2-.1.4-.3.4-.5zM40.8 40c-.5.2-.9.8-.9 1.3s.4.7.9.4.9-.8.9-1.3-.4-.7-.9-.4z"
                        opacity=".1"
                    />
                    <path
                        d="M43.5 34c0 .7-.6 1.6-1.3 1.9-.2.1-.4.2-.6.1.2.1.6.1.9-.1.7-.4 1.3-1.2 1.3-1.9 0-.5-.3-.8-.7-.8.3.2.4.5.4.8zM45.2 51.3v.1c0 .2-.2.4-.4.5 0 .1.2.2.3.1.2-.1.4-.3.4-.5.1-.2-.1-.3-.3-.2zM41.2 39.9c.1.1.2.2.2.4 0 .5-.4 1.1-.9 1.3-.1.1-.2.1-.3.1.2.1.4.1.7 0 .5-.2.9-.8.9-1.3-.1-.4-.3-.6-.6-.5zM36.9 45c.2.1.4.4.4.7 0 .7-.6 1.6-1.3 1.9-.2.1-.4.2-.6.1.2.1.6.1.9-.1.7-.4 1.3-1.2 1.3-1.9 0-.4-.3-.7-.7-.7zM48.9 55.8c.2.1.3.3.3.6 0 .6-.5 1.3-1.1 1.6-.2.1-.3.1-.5.1.2.1.5.1.8 0 .6-.3 1.1-1 1.1-1.6 0-.5-.3-.7-.6-.7zM57.1 53.1c-.1.1-.2.2-.2.3s.1.2.2.1.2-.2.2-.3-.1-.2-.2-.1zM52.7 25.6c0 .6-.5 1.3-1.1 1.6-.2.1-.3.1-.5.1.2.1.5.1.8 0 .6-.3 1.1-1 1.1-1.6 0-.4-.3-.7-.6-.7.2.1.3.3.3.6zM61.1 56.4c0-.2-.1-.2-.3-.2 0 .2-.1.3-.3.4 0 .1.1.2.3.1.1.1.3-.1.3-.3zM50.6 34.5c0 .1.1.2.2.1s.2-.2.2-.3c0-.1-.1-.2-.2-.1-.1 0-.2.2-.2.3zM58.2 29.8c0 .7-.6 1.6-1.3 1.9-.2.1-.4.2-.6.1.2.1.6.1.9-.1.7-.4 1.3-1.2 1.3-1.9 0-.5-.3-.8-.7-.8.3.2.4.5.4.8zM59 39.9v.1c0 .2-.2.4-.4.5 0 .1.2.2.3.1.2-.1.4-.3.4-.5s-.1-.3-.3-.2zM40.4 62c.2.1.3.3.3.6 0 .6-.5 1.3-1.1 1.6-.2.1-.3.1-.5.1.2.1.5.1.8 0 .6-.3 1.1-1 1.1-1.6 0-.5-.3-.7-.6-.7zM38.3 70.9c.2.1.3.3.3.6 0 .6-.5 1.3-1.1 1.6-.2.1-.3.1-.5.1.2.1.5.1.8 0 .6-.3 1.1-1 1.1-1.6 0-.4-.2-.7-.6-.7zM57.5 45c.1.1.1.2.1.3 0 .4-.3.8-.6 1-.1 0-.1 0-.2.1.1.1.3.1.5 0 .4-.2.6-.6.6-1 .1-.3-.1-.4-.4-.4zM47.2 69.9c-.1.1-.2.2-.2.3s.1.2.2.1.2-.2.2-.3 0-.2-.2-.1zM35.1 62.8c.1.1.2.2.2.4 0 .5-.4 1.1-.9 1.3-.1.1-.2.1-.3.1.2.1.4.1.7 0 .5-.2.9-.8.9-1.3-.1-.3-.3-.5-.6-.5zM50.6 45.1c.2.1.3.3.3.6 0 .6-.5 1.3-1.1 1.6-.2.1-.3.1-.5.1.2.1.5.1.8 0 .6-.3 1.1-1 1.1-1.6 0-.5-.2-.7-.6-.7zM60.9 58.1c.2.1.4.4.4.7 0 .7-.6 1.6-1.3 1.9-.2.1-.4.2-.6.1.2.1.6.1.9-.1.7-.4 1.3-1.2 1.3-1.9 0-.4-.3-.7-.7-.7zM34.9 67.6c.1.1.1.2.1.3 0 .4-.3.8-.6 1-.1 0-.1 0-.2.1.1.1.3.1.5 0 .4-.2.6-.6.6-1 .1-.3-.1-.5-.4-.4zM50 65.1c.1.1.2.2.2.4 0 .5-.4 1.1-.9 1.3-.1.1-.2.1-.3.1.2.1.4.1.7 0 .5-.2.9-.8.9-1.3 0-.4-.2-.6-.6-.5zM59.4 37.1c0 .2-.1.4-.3.5 0 .1.1.2.3.1.2-.1.3-.3.3-.5s-.1-.2-.3-.1z"
                        opacity=".1"
                    />
                    <path d="M64 64 32 80V44l16-24 16 8z" opacity=".39" />
                    <path
                        d="M30 45v-2L2 29v19l14 7v17l14 7V54l-14-7v-9z"
                        opacity=".06"
                    />
                    <path fill="#999" d="m6 63-4 2 14 7v-4z" />
                    <path d="m6 63-4 2 14 7v-4z" opacity=".1" />
                </svg>
            </RadioSquare>
            <RadioSquare setActive={setActive} id={2} active={active} text={"Appartement"}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 132"
                    className="w-12 h-12"
                >
                    <path fill="#F8EBCB" d="m125 101-61 31V68l61-30.5z" />
                    <path
                        fill="#F8EBCB"
                        d="m125 100-2 1V72.5l2-1zM122 101l1 .4V72.5l-1 .5z"
                    />
                    <path d="m122 101 1 .4V72.5l-1 .5z" opacity=".1" />
                    <path fill="#F8EBCB" d="m66 131-2 1v-30l2-1z" />
                    <path d="M125 71.5 64 102v-1l61-30.5z" opacity=".15" />
                    <path
                        fill="#FFF"
                        d="M125 70.5 64 101v-1l61-30.5z"
                        opacity=".5"
                    />
                    <path d="M125 39.5 64 70v-1l61-30.5z" opacity=".15" />
                    <path
                        fill="#FFF"
                        d="M125 38.5 64 69v-1l61-30.5z"
                        opacity=".5"
                    />
                    <path
                        d="m66 101 1-.5v29l-1 .5zM66 69l1-.5v30l-1 .5zM122 41l1-.5v30l-1 .5z"
                        opacity=".15"
                    />
                    <path
                        fill="#7FADB9"
                        d="m120 70-5 2.5V64c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V70z"
                    />
                    <path
                        fill="#39C"
                        d="M117.5 60.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M117.5 60.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m121 70.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m112 74-5 2.5V68c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V74z"
                    />
                    <path
                        fill="#39C"
                        d="M109.5 64.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M109.5 64.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m113 74.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M101 79.5 96 82v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M98.5 69.7c-1.4.7-2.5 2.4-2.5 3.8V82l2-1 1-.5 2-1V71c0-1.4-1.1-1.9-2.5-1.3zM97 73c0-.7.4-1.4 1-1.9V74l-1 .5V73zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V73z"
                    />
                    <path
                        d="M98.5 69.7c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V71c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m102 80-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M93 83.5 88 86v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M90.5 73.8c-1.4.7-2.5 2.4-2.5 3.8V86l2-1 1-.5 2-1V75c0-1.4-1.1-1.9-2.5-1.2zM89 77c0-.7.4-1.4 1-1.9V78l-1 .5V77zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V77z"
                    />
                    <path
                        d="M90.5 73.8c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V75c0-1.4-1.1-1.9-2.5-1.2z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m94 84-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m82 89-5 2.5V83c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V89z"
                    />
                    <path
                        fill="#39C"
                        d="M79.5 79.3c-1.4.6-2.5 2.3-2.5 3.7v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.2zM78 82.5c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M79.5 79.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M83 89.5 76 93v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m74 93-5 2.5V87c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V93z"
                    />
                    <path
                        fill="#39C"
                        d="M71.5 83.3c-1.4.6-2.5 2.3-2.5 3.7v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.2zM70 86.5c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M71.5 83.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M75 93.5 68 97v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m120 56-5 2.5V50c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V56z"
                    />
                    <path
                        fill="#39C"
                        d="M117.5 46.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M117.5 46.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m121 56.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m112 60-5 2.5V54c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V60z"
                    />
                    <path
                        fill="#39C"
                        d="M109.5 50.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M109.5 50.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m113 60.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M101 65.5 96 68v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M98.5 55.7c-1.4.7-2.5 2.4-2.5 3.8V68l2-1 1-.5 2-1V57c0-1.4-1.1-1.9-2.5-1.3zM97 59c0-.7.4-1.4 1-1.9V60l-1 .5V59zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V59z"
                    />
                    <path
                        d="M98.5 55.7c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V57c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m102 66-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M93 69.5 88 72v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M90.5 59.8c-1.4.7-2.5 2.4-2.5 3.8V72l2-1 1-.5 2-1V61c0-1.4-1.1-1.9-2.5-1.2zM89 63c0-.7.4-1.4 1-1.9V64l-1 .5V63zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V63z"
                    />
                    <path
                        d="M90.5 59.8c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V61c0-1.4-1.1-1.9-2.5-1.2z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m94 70-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m82 75-5 2.5V69c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V75z"
                    />
                    <path
                        fill="#39C"
                        d="M79.5 65.3c-1.4.6-2.5 2.3-2.5 3.7v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.2zM78 68.5c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M79.5 65.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M83 75.5 76 79v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m74 79-5 2.5V73c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V79z"
                    />
                    <path
                        fill="#39C"
                        d="M71.5 69.3c-1.4.6-2.5 2.3-2.5 3.7v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.2zM70 72.5c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M71.5 69.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M75 79.5 68 83v-1l7-3.5z" opacity=".5" />
                    <path d="m125 101-61 31v-1l61-31z" opacity=".15" />
                    <path fill="#FFF" d="m125 100-61 31v-1l61-31z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m120 100-5 2.5V94c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M117.5 90.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M117.5 90.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m121 100.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m112 104-5 2.5V98c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M109.5 94.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M109.5 94.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m113 104.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m101 109.5-5 2.5v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M98.5 99.7c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1V101c0-1.4-1.1-1.9-2.5-1.3zM97 103c0-.7.4-1.4 1-1.9v2.9l-1 .5V103zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M98.5 99.7c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V101c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m102 110-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m93 113.5-5 2.5v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M90.5 103.8c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1V105c0-1.4-1.1-1.9-2.5-1.2zM89 107c0-.7.4-1.4 1-1.9v2.9l-1 .5V107zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M90.5 103.8c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V105c0-1.4-1.1-1.9-2.5-1.2z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m94 114-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m82 119-5 2.5V113c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M79.5 109.3c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.5-1.1-2-2.5-1.3zm-1.5 3.2c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M79.5 109.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m83 119.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m74 123-5 2.5V117c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M71.5 113.3c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.5-1.1-2-2.5-1.3zm-1.5 3.2c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M71.5 113.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m75 123.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m120 86-5 2.5V80c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V86z"
                    />
                    <path
                        fill="#39C"
                        d="M117.5 76.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M117.5 76.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m121 86.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m112 90-5 2.5V84c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2V90z"
                    />
                    <path
                        fill="#39C"
                        d="M109.5 80.2c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.3zm-1.5 3.3c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M109.5 80.2c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m113 90.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M101 95.5 96 98v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M98.5 85.7c-1.4.7-2.5 2.4-2.5 3.8V98l2-1 1-.5 2-1V87c0-1.4-1.1-1.9-2.5-1.3zM97 89c0-.7.4-1.4 1-1.9V90l-1 .5V89zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V89z"
                    />
                    <path
                        d="M98.5 85.7c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V87c0-1.4-1.1-1.9-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m102 96-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m93 99.5-5 2.5v-8.5c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M90.5 89.8c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1V91c0-1.4-1.1-1.9-2.5-1.2zM89 93c0-.7.4-1.4 1-1.9V94l-1 .5V93zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9V93z"
                    />
                    <path
                        d="M90.5 89.8c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5V91c0-1.4-1.1-1.9-2.5-1.2z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m94 100-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m82 105-5 2.5V99c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M79.5 95.3c-1.4.6-2.5 2.3-2.5 3.7v8.5l2-1 1-.5 2-1v-8.5c0-1.4-1.1-1.9-2.5-1.2zM78 98.5c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M79.5 95.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m83 105.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m74 109-5 2.5V103c0-1.4 1.1-3.1 2.5-3.8 1.4-.7 2.5-.1 2.5 1.2v8.6z"
                    />
                    <path
                        fill="#39C"
                        d="M71.5 99.3c-1.4.7-2.5 2.4-2.5 3.8v8.5l2-1 1-.5 2-1v-8.5c0-1.5-1.1-2-2.5-1.3zm-1.5 3.2c0-.7.4-1.4 1-1.9v2.9l-1 .5v-1.5zm0 2.5 1-.5v2l-1 .5v-2zm0 5v-2l1-.5v2l-1 .5zm3-1.5-1 .5v-2l1-.5v2zm0-3-1 .5v-2l1-.5v2zm0-3-1 .5v-2.9c.6-.1 1 .3 1 .9v1.5z"
                    />
                    <path
                        d="M71.5 99.3c-.2.1-.4.3-.6.4 1.2-.5 2.1 0 2.1 1.2v7.4l-4 2v1l5-2.5v-8.2c0-1.5-1.1-2-2.5-1.3z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m75 109.5-7 3.5v-1l7-3.5z" opacity=".5" />
                    <path d="m125 101-61 31V68l61-30.5z" opacity=".39" />
                    <path fill="#F8EBCB" d="m3 101 61 31V68L3 37.5z" />
                    <path
                        fill="#F8EBCB"
                        d="m3 100 2 1V72.5l-2-1zM6 100.6l-1 .4V72.5l1 .5z"
                    />
                    <path d="m6 100.6-1 .4V72.5l1 .5z" opacity=".1" />
                    <path fill="#F8EBCB" d="m62 131 2 1v-30l-2-1z" />
                    <path d="M3 71.5 64 102v-1L3 70.5z" opacity=".15" />
                    <path fill="#FFF" d="M3 70.5 64 101v-1L3 69.5z" opacity=".5" />
                    <path d="M3 39.5 64 70v-1L3 38.5z" opacity=".15" />
                    <path fill="#FFF" d="M3 38.5 64 69v-1L3 37.5z" opacity=".5" />
                    <path
                        d="m62 101-1-.5v29l1 .5zM62 69l-1-.5v30l1 .5zM6 41l-1-.5v30l1 .5z"
                        opacity=".15"
                    />
                    <path
                        fill="#7FADB9"
                        d="M59 95.5 54 93v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M56.5 83.3c-1.4-.7-2.5-.1-2.5 1.2V93l2 1 1 .5 2 1V87c0-1.4-1.1-3.1-2.5-3.7zM55 85c0-.7.4-1 1-.9V87l-1-.5V85zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V88z"
                    />
                    <path
                        d="M56.5 83.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V87c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m60 97-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M51 91.5 46 89v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M48.5 79.3c-1.4-.7-2.5-.1-2.5 1.2V89l2 1 1 .5 2 1V83c0-1.4-1.1-3.1-2.5-3.7zM47 81c0-.7.4-1 1-.9V83l-1-.5V81zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V84z"
                    />
                    <path
                        d="M48.5 79.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V83c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m52 93-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m40 86-5-2.5V75c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8V86z"
                    />
                    <path
                        fill="#39C"
                        d="M37.5 73.8c-1.4-.7-2.5-.2-2.5 1.2v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.7zM36 75.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M37.5 73.8c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.5-1.1-3.2-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M41 87.5 34 84v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m32 82-5-2.5V71c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8V82z"
                    />
                    <path
                        fill="#39C"
                        d="M29.5 69.7c-1.4-.6-2.5-.1-2.5 1.3v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.8zM28 71.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M29.5 69.7c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M33 83.5 26 80v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M21 76.5 16 74v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M18.5 64.2c-1.4-.7-2.5-.1-2.5 1.2V74l2 1 1 .5 2 1V68c0-1.4-1.1-3.1-2.5-3.8zM17 66c0-.7.4-1 1-.9V68l-1-.5V66zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V69z"
                    />
                    <path
                        d="M18.5 64.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V68c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m22 78-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M13 72.5 8 70v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M10.5 60.2c-1.4-.6-2.5-.1-2.5 1.3V70l2 1 1 .5 2 1V64c0-1.4-1.1-3.1-2.5-3.8zM9 62c0-.7.4-1 1-.9V64l-1-.5V62zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V65z"
                    />
                    <path
                        d="M10.5 60.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V64c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m14 74-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M59 81.5 54 79v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M56.5 69.3c-1.4-.7-2.5-.1-2.5 1.2V79l2 1 1 .5 2 1V73c0-1.4-1.1-3.1-2.5-3.7zM55 71c0-.7.4-1 1-.9V73l-1-.5V71zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V74z"
                    />
                    <path
                        d="M56.5 69.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V73c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m60 83-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M51 77.5 46 75v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M48.5 65.3c-1.4-.7-2.5-.1-2.5 1.2V75l2 1 1 .5 2 1V69c0-1.4-1.1-3.1-2.5-3.7zM47 67c0-.7.4-1 1-.9V69l-1-.5V67zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V70z"
                    />
                    <path
                        d="M48.5 65.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V69c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m52 79-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m40 72-5-2.5V61c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8V72z"
                    />
                    <path
                        fill="#39C"
                        d="M37.5 59.8c-1.4-.7-2.5-.2-2.5 1.2v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.7zM36 61.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M37.5 59.8c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.5-1.1-3.2-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M41 73.5 34 70v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m32 68-5-2.5V57c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8V68z"
                    />
                    <path
                        fill="#39C"
                        d="M29.5 55.7c-1.4-.6-2.5-.1-2.5 1.3v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.8zM28 57.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M29.5 55.7c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M33 69.5 26 66v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M21 62.5 16 60v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M18.5 50.2c-1.4-.7-2.5-.1-2.5 1.2V60l2 1 1 .5 2 1V54c0-1.4-1.1-3.1-2.5-3.8zM17 52c0-.7.4-1 1-.9V54l-1-.5V52zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V55z"
                    />
                    <path
                        d="M18.5 50.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V54c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m22 64-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M13 58.5 8 56v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M10.5 46.2c-1.4-.6-2.5-.1-2.5 1.3V56l2 1 1 .5 2 1V50c0-1.4-1.1-3.1-2.5-3.8zM9 48c0-.7.4-1 1-.9V50l-1-.5V48zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V51z"
                    />
                    <path
                        d="M10.5 46.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V50c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m14 60-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path d="m3 101 61 31v-1L3 100z" opacity=".15" />
                    <path fill="#FFF" d="m3 100 61 31v-1L3 99z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m59 125.5-5-2.5v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M56.5 113.3c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1V117c0-1.4-1.1-3.1-2.5-3.7zM55 115c0-.7.4-1 1-.9v2.9l-1-.5V115zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M56.5 113.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V117c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m60 127-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m51 121.5-5-2.5v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M48.5 109.3c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1V113c0-1.4-1.1-3.1-2.5-3.7zM47 111c0-.7.4-1 1-.9v2.9l-1-.5V111zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M48.5 109.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V113c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m52 123-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m40 116-5-2.5V105c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M37.5 103.8c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.7zm-1.5 1.7c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M37.5 103.8c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.5-1.1-3.2-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m41 117.5-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m32 112-5-2.5V101c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M29.5 99.7c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1v-8.5c0-1.3-1.1-3-2.5-3.7zm-1.5 1.8c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M29.5 99.7c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m33 113.5-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m21 106.5-5-2.5v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M18.5 94.2c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1V98c0-1.4-1.1-3.1-2.5-3.8zM17 96c0-.7.4-1 1-.9V98l-1-.5V96zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V99z"
                    />
                    <path
                        d="M18.5 94.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V98c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m22 108-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M13 102.5 8 100v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M10.5 90.2c-1.4-.6-2.5-.1-2.5 1.3v8.5l2 1 1 .5 2 1V94c0-1.4-1.1-3.1-2.5-3.8zM9 92c0-.7.4-1 1-.9V94l-1-.5V92zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V95z"
                    />
                    <path
                        d="M10.5 90.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V94c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m14 104-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m59 111.5-5-2.5v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M56.5 99.3c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1V103c0-1.4-1.1-3.1-2.5-3.7zM55 101c0-.7.4-1 1-.9v2.9l-1-.5V101zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M56.5 99.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V103c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m60 113-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m51 107.5-5-2.5v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M48.5 95.3c-1.4-.7-2.5-.1-2.5 1.2v8.5l2 1 1 .5 2 1V99c0-1.4-1.1-3.1-2.5-3.7zM47 97c0-.7.4-1 1-.9V99l-1-.5V97zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M48.5 95.3c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V99c0-1.4-1.1-3.1-2.5-3.7z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m52 109-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m40 102-5-2.5V91c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M37.5 89.8c-1.4-.7-2.5-.2-2.5 1.2v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.7zM36 91.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M37.5 89.8c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.5-1.1-3.2-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m41 103.5-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="m32 98-5-2.5V87c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8V98z"
                    />
                    <path
                        fill="#39C"
                        d="M29.5 85.7c-1.4-.6-2.5-.1-2.5 1.3v8.5l2 1 1 .5 2 1v-8.5c0-1.4-1.1-3.1-2.5-3.8zM28 87.5c0-.7.4-1 1-.9v2.9l-1-.5v-1.5zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9v1.5z"
                    />
                    <path
                        d="M29.5 85.7c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5v-8.2c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="M33 99.5 26 96v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M21 92.5 16 90v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M18.5 80.2c-1.4-.7-2.5-.1-2.5 1.2V90l2 1 1 .5 2 1V84c0-1.4-1.1-3.1-2.5-3.8zM17 82c0-.7.4-1 1-.9V84l-1-.5V82zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V85z"
                    />
                    <path
                        d="M18.5 80.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V84c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m22 94-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path
                        fill="#7FADB9"
                        d="M13 88.5 8 86v-8.5c0-1.4 1.1-1.9 2.5-1.2s2.5 2.4 2.5 3.8v8.4z"
                    />
                    <path
                        fill="#39C"
                        d="M10.5 76.2c-1.4-.6-2.5-.1-2.5 1.3V86l2 1 1 .5 2 1V80c0-1.4-1.1-3.1-2.5-3.8zM9 78c0-.7.4-1 1-.9V80l-1-.5V78zm0 2.5 1 .5v2l-1-.5v-2zm0 5v-2l1 .5v2l-1-.5zm3 1.5-1-.5v-2l1 .5v2zm0-3-1-.5v-2l1 .5v2zm0-3-1-.5v-2.9c.6.5 1 1.3 1 1.9V81z"
                    />
                    <path
                        d="M10.5 76.2c-.2-.1-.4-.2-.6-.2 1.2.7 2.1 2.1 2.1 3.3v7.4l-4-2v1l5 2.5V80c0-1.4-1.1-3.1-2.5-3.8z"
                        opacity=".4"
                    />
                    <path fill="#FFF" d="m14 90-7-3.5v-1l7 3.5z" opacity=".5" />
                    <path d="m3 101 61 31V68L3 37.5z" opacity=".06" />
                    <path fill="#F8EBCB" d="m64 68 61-30.5L64 7 3 37.5z" />
                    <path fill="#2D3134" d="M64 1 3 37.5 64 68l61-30.5z" />
                    <path d="M64 42 27.2 23 3 37.5 64 68z" opacity=".06" />
                    <path d="M64 42v26l61-30.5L100.8 23z" opacity=".39" />
                </svg>
            </RadioSquare>
        </div >
    )
}
const RadioSquare = ({ children, id, setActive, active, text }) => {
    return (
        <div className={"transition-all shadow-md rounded-lg p-3 cursor-pointer " + (active === id ? " bg-sky-500 text-white" : "text-gray-700")} onClick={() => setActive(id)}>
            <div className="flex flex-col items-center justify-center gap-2">
                {children}
                <span className="text-sm">{text}</span>
            </div>
        </div >
    )
}
const RadioRect = ({ els }) => {
    const [items, setItems] = React.useState(els)
    return (
        <div className="flex flex-col gap-3">
            {items.map(item => (
                <div className={"transition-all bg-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none" + (item.active ? " bg-sky-500 text-white" : " hover:bg-sky-500 hover:bg-opacity-25")} onClick={() => setItems(e => e.map(i => i.id === item.id ? { ...i, active: true } : { ...i, active: false }))}>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="font-medium leading-6">{item.text}</p>
                            </div>
                        </div>
                    </div>
                    {item.active && (
                        <div className="shrink-0 text-white">
                            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                                <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle>
                                <path
                                    d="M7 13l3 3 7-7"
                                    stroke="#fff"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
const ComboBoxEl = ({ item, checked, disabled = false, setSearch }) => {
    return (
        <li className={"relative select-none py-2 pl-10 pr-4 " + (disabled || "hover:bg-sky-500 hover:text-white cursor-pointer ") + (checked ? "bg-sky-500 text-white" : "text-gray-900")} onClick={() => setSearch(item.city)}>
            <p>
                <span className="block truncate font-normal">{item ? item.address : 'Nothing found.'}</span>
                {checked && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                    </svg>
                </span>}
            </p>
            {item && item.zip && item.city ? <p>
                {item.zip} - {item.city}
            </p> : ""}
        </li>
    )
}
const ComboBox = () => {
    const [search, setSearch] = React.useState('')
    const [options, setOptions] = React.useState([])
    const [shown, setShown] = React.useState(false)
    React.useEffect(() => {
        search.length >= 3 && (async () => {
            const response = await fetch(
                'https://api-adresse.data.gouv.fr/search/?type=municipality&autocomplete=1&' +
                new URLSearchParams({
                    q: search,
                })
            );
            const data = await response.json();
            const cities = data.features.map(el => {
                return {
                    city: el.properties.city,
                    address: el.properties.context,
                    zip: el.properties.postcode
                }
            })
            setOptions(cities)
        })();
    }, [search])
    return (
        <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <input className="w-full border py-2 pl-3 pr-10 text-sm rounded-lg leading-5 text-gray-900 focus:ring-0 peer pt-6 placeholder-shown:hidden"
                    id="logement"
                    type="text"
                    value={search}
                    onBlur={() => setTimeout(() => {
                        setShown(false)
                    }, 100)}
                    onChange={e => {
                        setSearch(e.target.value)
                        setShown(true)
                    }} />
                <label
                    htmlFor="logement"
                    className={"select-none absolute top-1/2 text-sm text-gray-500 -translate-y-1/2 left-3 peer-focus:translate-none peer-focus:top-3 transition-all cursor-text peer-focus:text-xs " + (search && "!top-3 !text-xs !translate-none")}
                >
                    Code postal ou ville
                </label>
                <button className="absolute inset-y-0 right-0 flex items-center pr-2" type="button" onClick={() => setShown(e => !e)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            {shown && <ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {options.length > 0 ? options.map(e => <ComboBoxEl item={e} checked={false} setSearch={setSearch} />) : <ComboBoxEl disabled />}
            </ul>}
        </div>
    )
}
const Popup = ({ info }) => {
    return (
        <p className="text-gray-500 hover:text-sky-500 text-xl cursor-pointer [&>span]:hover:block relative">
            &#9432;
            <span className="hidden text-xs text-white rounded absolute w-52 bg-sky-500 p-2 bottom-9 sm:-left-3 -right-3 z-20">
                {info}
                <i className="border-8 border-sky-500 w-0 h-0 border-x-transparent border-b-transparent absolute -bottom-4 sm:left-3 right-3"></i>
            </span>
        </p>
    );
}
const Card = ({ children, title, info, subTitle, cols = 1 }) => {
    return (
        <div
            className={`shadow-md border border-gray-100 p-6 rounded md:col-span-${cols}`}
        >
            <div className="flex items-center leading-none mb-5 gap-2 relative">
                <h2 className="md:text-xl text-lg font-semibold text-sky-500">
                    {title}
                    <span className="text-sm text-gray-900 block font-light">{subTitle}</span>
                </h2>
                {info && <Popup info={info} />}
            </div>
            {children}
        </div>
    );
}
const Section = ({ title, children, id, cardCount }) => {
    return (
        <div className="mb-16">
            {title ? (
                <h2 className="text-2xl mb-5 text-sky-500">
                    {id}. {title}
                </h2>
            ) : (
                ''
            )}
            <div className={`grid md:grid-cols-${cardCount} grid-cols-1 md:gap-8 gap-4 mb-5`}>
                {children}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
