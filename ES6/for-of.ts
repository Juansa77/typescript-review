(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: "Iron Man",
        weapon: "Armor suit"
    }

    const capAmerica: Avenger = {
        name: "Capitan America",
        weapon: "Shield"



    }

    const thor: Avenger = {
        name: "Thor",
        weapon: "Hammer"
    }

    const avengers:Avenger[] = [ironman, capAmerica, thor]

    for (const avenger of avengers) {
        console.log(avenger)
        
    }
})()