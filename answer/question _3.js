
let bst = document.getElementById("bst")
let getLink = document.getElementById("getlink")
let shortLink =  document.getElementById("shortLink")
bst.addEventListener("click", async ()=>{
    getlink.placeholder = ""
    let predata = await fetch(`https://api.shrtco.de/v2/shorten?url=${getLink.value}`)
    let data = await predata.json()
    console.log(data.result.short_link)
    shortLink.innerHTML = "đây là link rút gọn : " + data.result.short_link
    alert("Đã rút gọn link thành công")
})