const emojis = [
	"😍",
	"😍",
	"😂",
	"😂",
	"🤑",
	"🤑",
	"😖",
	"😖",
	"😵‍💫",
	"😵‍💫",
	"😡",
	"😡",
	"❤️",
	"❤️",
	"💥",
	"💥",
]

let shufEmoji = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < emojis.length; i++) {
	let box = document.createElement("div")
	box.className = "item"
	box.innerHTML = shufEmoji[i]

	box.onclick = function () {
		this.classList.add("boxOpen")
        setTimeout(function(){

        },500)
	}

	document.querySelector(".game").appendChild(box)
}
