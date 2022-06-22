interface Account {
  game: string
  seller: string
  cost: number
}

interface Coin {
  game: string
  seller: string
  cost: number
  amount: number
}

type Category = Account | Coin
