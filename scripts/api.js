
async function a() {
    const response = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c")
    const output = await response.json()
    const {updated_at,data} = output
    const {name,symbol,price,price_BNB} = data
    
    const tkname = document.getElementById("tkname").innerText=name
    const tksymbol = document.getElementById("tksymbol").innerText=symbol
    const tkprice = document.getElementById("tkprice").innerText=`$${Math.floor(price)}`
    const tkbnb = document.getElementById("tkbnb").innerText=`BNB ${Math.round(price_BNB)}`

}

// const run = setTimeout(a,)