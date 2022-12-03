// fetch 함수
// return Promise<json data>
// 아래 함수는 async await가 아닌 Promise 방식 사용
export async function fetchCoins() {
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) =>
    response.json()
  );
}
