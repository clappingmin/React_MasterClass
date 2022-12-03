const BASE_URL = `https://api.coinpaprika.com/v1`;

// fetch 함수
// return Promise<json data>
// 아래 함수는 async await가 아닌 Promise 방식 사용
export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
