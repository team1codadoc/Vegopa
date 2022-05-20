const API_KEY = "93814dd5ef9b900663c29e8601a31e02";

type Party = {
  title: string,
  owner: number,
  total: number,
  taste: string[],
  participants: number[],
  date: string,
  address: [],
  picture: string,
  party_status: boolean,
};

export function getPartyInfo () {
  return fetch(`https://api.themoviedb.org/3/trending/tv&movie/day?api_key=${API_KEY}`).then((response)=>response.json());
}
