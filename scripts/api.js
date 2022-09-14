
async function a() {
    const response = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82")
    const output = await response.json()
    const {updated_at,data} = output
    const {name,symbol,price,price_BNB} = data
    console.log(symbol)
}

// const run = setTimeout(a,)