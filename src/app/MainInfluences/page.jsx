import AlbumWrapper from "./components/AlbumWrapper";

export default function MainInfluencesPage () {
  const albumInfo = [
    // {
    //   artist: "Aphex Twin",
    //   album: "Drukqs",
    //   year: "2001",
    //   label: "Warp Records",
    //   decription:
    //     "James (A. Twin) decided to release Drukqs primarily to circumvent a potential leak after he accidentally left behind an MP3 player containing 180 of his unreleased tracks on a plane'')",
    //   favorite: "Mt Saint Michel + Saint Michaels Mount",
    //   genre: "IDM, Ambient, Piano solo, Jungle, Glitch, Noise",
    //   picID: 7410923874,
    // },
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
    },
    {
      artist: "Toby Fox",
      album: "Undertale",
      year: "2015",
      label: "Materia Collective (video game OST)",
      decription:
        "The game's soundtrack was entirely composed by Fox with FL Studio. A self-taught musician, he composed most of the tracks with little iteration. For each section of the game, he composed the music prior to programming, as it helped 'decide how the scene should go'.",
      favorite: "Core",
      genre: "Ambient, Electronic, Piano solo, Electro, Drone",
      picID: 48917347132984,
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
    },
    {
      artist: "Tomáš Dvořák (Floex)",
      album: "Machinarium",
      year: "2009",
      label: "Minority Records (video game OST)",
      decription:
        "In his tracks, Floex creates a unique atmospheric universe, exploring the possibilities of coexistence between electronic and acoustic sound worlds. There is strong emphases placed on natural musicality and humanity on one side and on cutting-edge approach to electronic music production on the other. These polarities just seem to create an interesting tension.",
      favorite: "By the Wall",
      genre: "Ambient, Drone, Contemporary classical, IDM, Glitch",
      picID: 321984712974,
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
    },
  ];

  let counter = 0;


  return (
    <>
      {albumInfo.map((x) => {
        counter++;
        // console.log(counter)
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
};
