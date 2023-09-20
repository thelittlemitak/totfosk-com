const albums = {
  austin: {
    title: "Austin Wintory - Journey (2012)",
    key: 11,
  },
  canto: {
    title: "El canto del loco - Estados de Ánimo (2003)",
    key: 22,
  },
  rings: {
    title: "Howard Shore - The Lord of the Rings(2001-2-3)",
    key: 33,
  },
  gangStarr: {
    title: "Gang Starr - Step In the Arena (1991)",
    key: 44,
  },
  diamond: {
    title: "Neil Diamond - Touching You, Touching Me (1969)",
    key: 55,
  },
  traffic: {
    title: "Traffic - Mr. Fantasy (1967)",
    key: 66,
  },
};

const singles = {
  danzig: { title: "Danzig - Mother (Danzig, 1988)", key: 2893 },
  japes: {
    title:
      "Childish Japes - Go Own Them All (feat. Dave Vives) (After You're Born, 2017)",
    key: 2893,
  },
};

export const missingAlbums = [
  albums.austin,
  albums.canto,
  albums.rings,
  albums.gangStarr,
  albums.diamond,
  albums.traffic,
];
export const missingSingles = [
  singles.danzig,
  singles.japes,
];
