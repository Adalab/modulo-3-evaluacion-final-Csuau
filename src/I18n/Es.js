const Es = {
    "male": "masculino",
    "female": "femenino",
    "human": "humano",
    "half - giant": "medio gigante",
    "werewolf": "hombre lobo",
    "cat": "gato",
    "goblin": "duende",
    "owl": "búho",
    "ghost": "fantasma",
    "poltergeist": "poltergeist",
    "three - headed dog": "perro tres cabezas",
    "dragon": "dragón",
    "centaur": "centauro",
    "house - elf": "elfo doméstico",
    "acromantula": "acromántula",
    "hippogriff": "hipogrifo",
    "giant": "gigante",
    "vampire": "vampiro",
    "half - human": "medio humano",
    "alive": "vivo",
    "dead": "muerto",
}


const getTranslation = (key) => {
    return Es[key] || "desconocido"
}

export default getTranslation;