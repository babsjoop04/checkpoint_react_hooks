const DefaultMovieList = [
    {
        title: "Avengers",
        id: 1,
        rate: 94,
        posterUrl: "/AvengersPoster.jpg",
        trailerUrl: "https://youtu.be/6ZfuNTqbHE8",
        description: "As the Avengers and their allies continued to protect the world from threats far too great for a single hero to combat, a new danger has come from outer space: Thanos. Despot feared throughout the universe, Thanos aims to collect the six Infinity Stones, some of the most powerful artifacts in the universe, and use them to impose his will on all of reality. Every fight the Avengers have had culminates in this battle."
    },
    {
        title: "Uncharted",
        id: 2,
        rate: 89,
        posterUrl: "/unchartedPoster.jpg",
        trailerUrl: "https://youtu.be/eHp3MbsCbMg",
        description: "Nathan Drake and his mentor, Victor Sullivan, go in search of Magellan's treasure, estimated at five billion dollars. Nathan's brother, Samuel Drake, would have left clues to find him. This adventure will take the two protagonists to many places around the world such as New York, Barcelona or even the Pacific Ocean."
    },
    {
        title: "Top Gun : Maverick",
        id: 3,
        rate: 95,
        posterUrl: "/topGunPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=giXco2jaZ_4",
        description: "A US Navy fighter pilot for thirty years, Pete “Maverick” Mitchell is called back by his old friend Tom “Iceman” Kazansky to train the best recruits to graduate from Top Gun School. Among them is the son of his missing friend. Faced with this new high-flying mission, Maverick will have to face his old demons."
    },
    {
        title: "Bullet Train",
        id: 4,
        rate: 90,
        posterUrl: "/bullettrainPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
        description: "Five hitmen find themselves on a bullet train traveling between Tokyo and Morioka with very few stops. The five criminals will discover that they are all linked by their mission, wonder who will come out alive and wonder about what awaits them at the arrival station."
    },
    {
        title: "Red Notice",
        id: 5,
        rate: 95,
        posterUrl: "/red_notice.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms",
        description: "When Interpol raises a Red Alert, intended to track down and capture the most wanted criminals in the world, the FBI calls on its best profiler, John Hartley."
    }, {
        title: "Us",
        id: 6,
        rate: 78,
        posterUrl: "/UsPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=hNCmb-4oXJA",
        description: "The holidays promise to be relaxing for Adelaide and Gabe Wilson and their two children. As soon as the suitcases have been put in the house by the lake, Adelaide, yielding to the pressure, reluctantly agrees to go and spend the day at the beach in Santa Cruz."
    },
    {
        title: "Bourne Ultimatum",
        id: 7,
        rate: 90,
        posterUrl: "/BourneUltimatumPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=ohkW_xbPl9A",
        description: "Left for dead, a refugee in Italy, but soon forced to flee again, Jason Bourne is determined to find his true identity and get revenge on his former CIA bosses who killed the woman he loved and made him a spy. and an assassin."
    },
    {
        title: "Cars 2",
        id: 8,
        rate: 65,
        posterUrl: "/cars2Poster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=oFTfAdauCOo",
        description: "Lightning McQueen, the racing star, and his faithful companion Martin the tow truck are back on the road to race the very first World Grand Prix, which will crown the fastest car in the world! But the road is full of unforeseen events, deviations and surprises, especially when Martin finds himself embroiled in an international espionage case!"
    },
    {
        title: "It",
        id: 9,
        rate: 97,
        posterUrl: "/itPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=FnCdOQsX5kc",
        description: "In Derry, Maine, seven kids struggling to fit in have come together to form the Losers Club. Rejected by their comrades, they are the favorite targets of the tough guys at school. They also have in common that they experienced their greatest terror in the face of a terrible shapeshifting predator they call It."
    },
    {
        title: "The Lost City",
        id: 10,
        rate: 84,
        posterUrl: "/lostPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=nfKO9rYDmE8",
        description: "Reclusive author Loretta Sage writes about exotic locations in her adventure novels, which feature a handsome cover model named Alan. While on a promotional tour for her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who is looking for the lost treasure of an ancient city. Determined to prove he can be a hero in real life and not just on the pages of his books, Alan sets out to rescue him."
    }, {
        title: "Black Panther: Wakanda Forever",
        id: 11,
        rate: 98,
        posterUrl: "/wakandePoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
        description: "Queen Ramonda, Shuri, M'Baku, Okoye, and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death."
    }, {

        title: "Creed",
        id: 12,
        rate: 96,
        posterUrl: "/creedPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=Uv554B7YHk4",
        description: "After a few easy victories in the boxing ring, Adonis, son of the great champion Apollo Creed, is trying to carve out a place for himself among the professionals. He leaves Los Angeles and travels to Philadelphia to meet Rocky Balboa, an old rival and friend of his father."
    }, {
        title: "Black Panther",
        id: 13,
        rate: 98,
        posterUrl: "/pantherPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        description: "After the events that unfolded in Captain America: Civil War, T'Challa returns home to take his place on the throne of Wakanda, a technologically advanced African nation, but when an old enemy resurfaces, T'Challa's courage is weakened. put to the test, both as a ruler and as a Black Panther. He finds himself drawn into a conflict that threatens not only the fate of Wakanda but that of the entire world."
    }, {
        title: "Imitation Game (The Imitation Game)",
        id: 14,
        rate: 97,
        posterUrl: "/imitationPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=nuPZUUED5uk",
        description: "In 1939, newly created British intelligence agency MI6 recruits Cambridge mathematics alumnus Alan Turing (Benedict Cumberbatch) to crack Nazi codes, including Enigma -- which cryptanalysts had thought unbreakable. Turing's team, including Joan Clarke (Keira Knightley), analyze Enigma messages while he builds a machine to decipher them. Turing and team finally succeed and become heroes, but in 1952, the quiet genius encounters disgrace when authorities reveal he is gay and send him to prison."
    }, {
        title: "Avengers : End Game",
        id: 15,
        rate: 95,
        posterUrl: "/endgamePoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        description: "The Titan Thanos, having managed to appropriate all six Infinity Stones and reunite them on the Golden Gauntlet, was able to achieve his goal of pulverizing half the population of the Universe. Five years later, Scott Lang, aka Ant-Man, manages to escape from the subatomic dimension where he was stuck. He offers the Avengers a solution to bring back to life all the missing beings, including their allies and teammates: recover the Infinity Stones in the past."

    }, {
        title: "Black Widow",
        id: 16,
        rate: 57,
        posterUrl: "/blackPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=ybji16u608U",
        description: "When a dangerous plot linked to her past resurfaces, Natasha Romanoff, aka Black Widow, must face it."
    }, {
        title: "The batman",
        id: 17,
        rate: 90,
        posterUrl: "/batmanPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
        description: "When a killer preys on Gotham's elite through a series of sadistic schemes, a trail of cryptic clues sends Bruce Wayne aka Batman on an investigation into the underworld, where he encounters figures such as Selina Kyle aka Catwoman, Oswald Cobblepot aka the Penguin and mob boss Carmine Falcone."
    }, {
        title: "Escape Room 2",
        id: 18,
        rate: 97,
        posterUrl: "/escapePoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=KlfUbZJVInA",
        description: "Since surviving the escape game organized by Minos Corporation, Zoey Davis has been haunted by the deaths of the four other participants and has only one goal: to get revenge on the company behind this deadly game. Accompanied by Ben Miller, the other survivor, she follows a clue that leads them to New York, where Minos' offices are supposed to be."
    }, {
        title: "The Adam Project",
        id: 19,
        rate: 94,
        posterUrl: "/adamPoster.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=IE8HIsIrq4o",
        description: "After crash landing in 2022, fighter pilot and time traveler Adam Reed teams up with a 12-year-old version of himself to save the future."
    }, {
        title: "The Tomorrow War",
        id: 20,
        rate: 93,
        posterUrl: "/tomorrowPoster.png",
        trailerUrl: "https://www.youtube.com/watch?v=QPistcpGB8o",
        description: "The world is stunned when a group of travelers arrive from the future to deliver an urgent message: in 30 years, Humanity will lose a war against aliens. The only way to survive this alien attack is to transport soldiers and civilians from today's world to the future to fight against this invasion. A professor teams up with a brilliant scientist and her father to rewrite the future of the planet."
    }
]


export default DefaultMovieList