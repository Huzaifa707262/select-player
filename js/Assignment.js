


function footballPlayer(event) {


    const playerName = document.getElementById(event);
    const playerNames = playerName.innerText

    const addName = document.getElementById('add-name')


    const li = document.createElement('li');
    li.innerText = playerNames;
    addName.appendChild(li);
}





document.getElementById('btn-coutinho').addEventListener('click', function () {
    footballPlayer('coutinho')

})
document.getElementById('btn-neymar').addEventListener('click', function () {
    footballPlayer('neymar')
})
document.getElementById('btn-salah').addEventListener('click', function () {
    footballPlayer('salah')
})
document.getElementById('btn-messi').addEventListener('click', function () {
    footballPlayer('messi')
})
document.getElementById('btn-mbappe').addEventListener('click', function () {
    footballPlayer('mbappe')
})
document.getElementById('btn-silva').addEventListener('click', function () {
    footballPlayer('silva')
})