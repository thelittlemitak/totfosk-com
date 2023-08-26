import AlbumWrapper from "./AlbumWrapper";

export default function MainInfluencesPage() {
  const albumInfo = [
    {
      artist: "Aphex Twin",
      album: "Drukqs",
      year: "2001",
      label: "Warp Records",
      decription:
        "James (Aphex Twin) decided to release Drukqs primarily to circumvent a potential leak after he accidentally left behind an MP3 player containing 180 of his unreleased tracks on a plane)",
      favorite: "Mt Saint Michel + Saint Michaels Mount",
      genre: "IDM, Ambient, Piano solo, Jungle, Glitch, Noise",
      picID: 4434343,
      social: "@instaphex",
    },
    {
      artist: "The Dave Brubeck Quartet",
      album: "At Carnegie Hall",
      year: "1963",
      label: "Columbia",
      decription:
        "Live recording; described as one of the greatest live jazz albums of all times, the concert ironically had low expectations and Joe Morello was recovering from a flu.",
      favorite: "St. Louis Blues",
      genre: "Jazz",
      picID: 1289374890124,
      social: "",
    },
    {
      artist: "Sweet Trip",
      album: "Velocity : Design : Comfort",
      year: "2003",
      label: "Darla Records",
      decription:
        "it was recorded at the home of Sweet Trip member Roberto Burgos together with second band mate Valerie Cooper (vocals). He interpreted the album as having 'a recurring theme of convincing someone you love to leave it all behind, fall in love with you, and run away to an ideal world'",
      favorite: "Tekka",
      genre: "IDM, Shoegaze, Glitch, Noise",
      picID: 179034719,
      social: "",
    },
    {
      artist: "Denki Groove",
      album: "A",
      year: "1997",
      label: "Ki/oon (Sony Music Entertainment Japan)",
      decription: "Not available",
      favorite: "VOLCANIC DRUMBEATS",
      genre: "Electronic, Jpop, SynthPop",
      picID: 17234980,
      social: "",
    },
    {
      artist: "Ornette Coleman",
      album: "The Shape Of Jazz To Come",
      year: "1959",
      label: "Atlantic Records",
      decription:
        "with trumpeter Don Cherry, bassist Charlie Haden, and drummer Billy Higgins. ''The album was a breakthrough and helped to establish the free jazz movement.'' #freejazz ''a term derived from his album Free Jazz: A Collective Improvisation'' that one being released in 1961 (but recorded in 1960!)",
      favorite: "All of them",
      genre: "Free jazz",
      picID: 7129347109234,
      social: "",
    },
    {
      artist: "Wim Mertens",
      album: "Stratégie De La Rupture",
      year: "1991",
      label: "Les Disques du Crépuscule",
      decription:
        "Solo piano and voice compositions, which features haunting keyboard melodies accompanied by Mertens' unique high-pitched tenor voice singing in an invented, personal language.",
      favorite: "Jaat",
      genre: "Piano solo, Minimalism, Avant-garde",
      picID: 12347129384,
      social: "@wimmertensofficial",
    },
    {
      artist: "Weatherday",
      album: "Come In",
      year: "2019",
      label: "Self-release",
      decription:
        "It's recorded in my bedroom mostly, but also in a rehearsal space, a cabin in the mountains very far away from where I live, the bog very near from where I live and in the city during the hour everyone slept. Honorable mention to the hands-free mic attached to my headphones which I recorded this album on.",
      favorite: "My Sputnik Sweetheart",
      genre: "Shoegaze, Ambient",
      picID: 3289741987324,
      social: "",
    },
    {
      artist: "Toby Fox",
      album: "Undertale",
      year: "2015",
      label: "Materia Collective (video game OST)",
      decription:
        "The game's soundtrack was entirely composed by Fox with FL Studio. A self-taught musician, he composed most of the tracks with little iteration. For each section of the game, he composed the music prior to programming, as it helped 'decide how the scene should go'.",
      favorite: "Core",
      genre: "Ambient, Electronic, Piano solo, Electro, Drone, Soundtrack",
      picID: 48917347132984,
      social: "",
    },
    {
      artist: "Rafael Anton Irisarri",
      album: "A Fragile Geography",
      year: "2015",
      label: "Edition Outer Worlds",
      decription:
        "A personal journey of transience and tumult. His entire studio, audio archives, and possessions were stolen while moving from Seattle to New York, forcing him to rebuild from ground zero. But such a tabula rasa moment also brought with it a chance for renewal, and for reductive experimentation.",
      favorite: "Reprisal",
      genre: "Ambient, Drone, Noise",
      picID: 34897489714891,
      social: "",
    },
    {
      artist: "Tomáš Dvořák (Floex)",
      album: "Machinarium",
      year: "2009",
      label: "Minority Records (video game OST)",
      decription:
        "In his tracks, Floex creates a unique atmospheric universe, exploring the possibilities of coexistence between electronic and acoustic sound worlds. There is strong emphases placed on natural musicality and humanity on one side and on cutting-edge approach to electronic music production on the other. These polarities just seem to create an interesting tension.",
      favorite: "By the Wall",
      genre: "Ambient, Drone, Contemporary classical, IDM, Glitch, Soundtrack",
      picID: 321984712974,
      social: "",
    },
    {
      artist: "White Noise",
      album: "An Electric Storm",
      year: "1969",
      label: "Island Records (Universal)",
      decription:
        "Although not very successful on its initial release, the album is now considered an important and influential album in the development of electronic music. Important to point out: the one and only Delia Derbyshire was in the project and did most of the sound design.",
      favorite: "The Visitations",
      genre: "Ambient, Drone, Noise, IDM, Glitch",
      picID: 123081023,
      social: "",
    },
    {
      artist: "Anthony Braxton",
      album: "New York, Fall",
      year: "1974",
      label: "Artista Records (Sony)",
      decription:
        "Braxton often titles his compositions with diagrams or numbers and letters. Some diagrams have a clear meaning or signification, as on 'For Trio, 1977', where the title indicates the physical positions of the performers. The titles can themselves be musical notation indicating to the performer how a piece is played. Some letters are identifiable as the initials of Braxton's friends and musical colleagues, but many titles remain inscrutable to critics.",
      favorite: "All of them",
      albumCounting: "16th studio album.",
      genre: "Free jazz",
      picID: 38748912734,
      social: "",
    },
    {
      artist: "Brian Eno",
      album: "Another Green World",
      year: "1975",
      label: "Island Records (Universal)",
      decription:
        "Brian Eno originally viewed his new album as an experiment and entered the recording studio with nothing written or prepared beforehand. Employing tactics derived from his Oblique Strategies cards for guidance, Eno utilised a variety of unconventional recording techniques and instrumental approaches.",
      favorite: "All of them",
      albumCounting: "3rd studio album.",
      genre: "Experimental",
      picID: 34234,
      social: "@brianeno",
    },
    {
      artist: "Joe Hisaishi",
      album: "Spirited Away",
      year: "2001",
      label: "Studio Ghibli Records",
      decription:
        "Performed by New Japan Philharmonic. Spirited Away is frequently regarded as one of the best films of the 21st century as well as one of the greatest animated films ever made. It also bacome the highest-grossing film in Japanese history.",
      favorite: "The dragon boy",
      albumCounting: "Original Motion Picture Soundtrack.",
      genre: "Classical, Soundtrack",
      picID: 283138,
      social: "@joehisaishi.official",
    },
    {
      artist: "Flea",
      album: "Helen Burns",
      year: "2012",
      label: "Org Music",
      decription:
        "Flea said he had no plans for the album to be anything but to just record it in the back room at his house following a long Chili Peppers tour and as a way for Chris Warren (drum technician and tour keyboard player for the RHCP) to learn how to be a sound engineer.",
      favorite: "333",
      albumCounting: "Debut studio album.",
      genre: "Experimental, Noise, Piano solo, Japanese",
      picID: 987123,
      social: "@flea333",
    },
    {
      artist: "Kenji Kawai (incl. collabs)",
      album: "Ghost In The Shell",
      year: "1995",
      label: "RCA Records",
      decription:
        "He (Kenji) used classical Japanese in the opening theme Making of a Cyborg. The composition is a mixture of Bulgarian harmony and traditional Japanese notes; the haunting chorals are a wedding song sung to dispel all evil influences.",
      favorite: "Nightstalker",
      albumCounting: "Original Motion Picture Soundtrack.",
      genre: "Ambient, Japanese, Soundtrack",
      picID: 447173,
      social: "",
    },
    {
      artist: "Hans Zimmer",
      album: "Interstellar",
      year: "2014",
      label: "WaterTower Music",
      decription:
        "Hans Zimmer contributes one of his most richly imagined and inventive scores, which ranges from a gentle electronic keyboard melody to brassy, Strauss-ian crescendos.",
      favorite: "Mountains",
      albumCounting: "Original Motion Picture Soundtrack.",
      genre: "Classical, Ambient, Soundtrack",
      picID: 2312331,
      social: "@hanszimmer",
    },
    {
      artist: "Lorn",
      album: "A/D, Music For Picture",
      year: "2017",
      label: "Self-released",
      decription:
        "Selected commissions, abandoned or rejected themes and broken mantras for moving picture. largely beatless, ambient dives into tape with analog and digital synthesis, drones, dirty power and white noise.",
      favorite: "The Way Will Follow You",
      albumCounting: "N/a",
      genre: "Noise, Ambient, Drone",
      picID: 34324248,
      social: "@lorn_ws",
    },
    {
      artist: "Michael Camilo & Tomamito",
      album: "Spain Forever",
      year: "2006",
      label: "Emarcy/Universal.",
      decription:
        "Guitar and piano had not traditionally merged in fruitful alliances due to the preconception that these instruments’ sonorities would not jell. Michel Camilo & Tomatito overcame that prejudice with absolute respect for each other’s sound and instrument, eventually creating a new canon.",
      favorite: "Gnossiennes No.1' (original composition from Satie)",
      albumCounting:
        "Last installment of the Spain albums by the duo (Spain, Spain Again and Spain Forever)",
      genre: "Piano, Guitar, Classical",
      picID: 12312371,
      social: "@camilomichel @tomatitoguitarrista58",
    },
    {
      artist: "Nate Smith",
      album: "Pocket Change",
      year: "2018",
      label: "Waterbaby Music",
      decription:
        "American drummer, songwriter, producer, and three-time Grammy nominee. He co-wrote and produced the Michael Jackson song 'Heaven Can Wait'.",
      favorite: "What it do",
      albumCounting: "Third album as leader",
      genre: "Drum solo",
      picID: 731872491,
      social: "@natesmithdrums",
    },
    {
      artist: "Safri Duo",
      album: "Episode II",
      year: "2001",
      label: "Universal",
      decription:
        "Played-A-Live, the lead single of the album, became the fourth-fastest-selling single ever in Europe.",
      favorite: "Everything (Epilogue)",
      albumCounting:
        "Seventh studio album. All 6 previous albums were actually classical music.",
      genre: "Electronic",
      picID: 34343,
      social: "@safriduoofficial",
    },
    {
      artist: "Sweet trip",
      album: "You Will Never Know Why",
      year: "2009",
      label: "Darla Records",
      decription:
        "Songs for the album developed from practice sessions where the band would play with just guitar alone, with them deciding that the more raw and bare and simple songs would be what they would focus",
      favorite: "Acting",
      albumCounting:
        "Third studio album. The cover art is from the 2021 re-mastered version.",
      genre: "Shoegaze, Noise",
      picID: 1231314,
      social: "@sweet_trip_official",
    },
    {
      artist: "The moody blues",
      album: "Days Of The Future Passed",
      year: "1967",
      label: "Deram Records (Decca sublabel)",
      decription:
        "With its fusion of orchestral and rock elements, it has been cited as one of the first examples of progressive rock. The label asked them to record an adaptation of Dvořák's Symphony No. 9 for Decca's newly formed division (Deram) in order to demonstrate their latest recording techniques, but they started (without the label's knowledge) recording this instead.",
      favorite: "Evening",
      albumCounting: "Second studio album",
      genre: "Progressive Rock",
      picID: 9898892,
      social: "N/a",
    },
    {
      artist: "Kan Gao",
      album: "To The Moon",
      year: "2011",
      label: "Freebird Games",
      decription:
        "In GameSpot's Best game of the year, the game won Best Story and was nominated in the categories of Best Music, Most Memorable Moment, Best Writing/Dialogue, Best Ending, and Song of the Year. In 2015, it was included on GamesRadar's top 100 games of all time list.",
      favorite: "Lament of a Stranger",
      albumCounting:
        "Video game soundtrack. Kan is also the creator of the game.",
      genre: "Soundtrack, Piano Solo",
      picID: 9898934,
      social: "N/a",
    },
    {
      artist: "Mike Olfdield",
      album: "Tubular Bells",
      year: "1973",
      label: "Virgin Records",
      decription:
        "Oldfield, who was 19 years old when it was recorded, played almost all the instruments. There's a picture with him sitting in the room with all them; go check it! He also played at the opening ceremony of 2012 Olympic games and last but not least: it's the opening track of The Exorcist. Once I heard that the reason the director chose that one, it's because the piano pattern is a 3/4+4/4, creating a weird feeling of mistery (seems the melody seems to be the same) which he related to the devil.",
      favorite: "Tubular Bells, Pt. I",
      albumCounting: "First studio album (and also first Virgin record!).",
      genre: "Experimental",
      picID: 1223331,
      social: "N/a",
    },
    {
      artist: "Clint Mansell",
      album: "Requiem for a Dream",
      year: "2000",
      label: "Nonesuch Records",
      decription:
        "Aronofsky saw Requiem as a monster movie, only when something goes bad you hear the music. The soundtrack has been widely praised, and in particular the track Lux Aeterna (which itself is much used in the film) has subsequently been used in various forms of media.",
      favorite: "Ghosts of Things to Come",
      albumCounting:
        "Original Motion Picture Soundtrack. Performed by Kronos Quartet.",
      genre: "Soundtrack, Classical",
      picID: 4434344,
      social: "@i_was_a_teenage_clint_mansell @kronos_quartet",
    },
    {
      artist: "Tim Hecker",
      album: "Ravedeath, 1972",
      year: "2011",
      label: "Kranky",
      decription:
        "The album was recorded primarily in Frikirkjan Church, Reykjavík, by Ben Frost with Hecker playing compositions on the pipe organ which were further complemented by guitar and piano. Following this concentrated recording session, he returned to his studio in Montreal and worked for a month, undertaking the mixing and completing the record.",
      favorite: "In The Fog I",
      albumCounting: "Sixth studio album.",
      genre: "Noise, Ambient, Drone",
      picID: 9999,
      social: "@sunblindstudios",
    },
    {
      artist: "Isao Tomita",
      album: "Kosmos",
      year: "1978",
      label: "RCA",
      decription:
        "(Tomita) regarded as one of the pioneers of electronic music and space music, and as one of the most famous producers of analog synthesizer arrangements. Many of his albums are electronic versions and adaptations of familiar classical music pieces.",
      favorite: "Aranjuez",
      albumCounting: "Seventh studio album.",
      genre: "Electronic",
      picID: 4543589,
      social: "N/a",
    },
  ];

  let counter = 0;

  return (
    <>
      {albumInfo.map((x) => {
        counter++;
        return (
          <AlbumWrapper
            imgIDTunnel={x.picID}
            positionTunnel={counter}
            albumInfoTunnel={x}
            key={x.picID}
          ></AlbumWrapper>
        );
      })}
    </>
  );
}
