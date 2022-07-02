// console.log('added');
// alert('added'); //forchecking

const allPlayers = () => {
    // console.log('Hello'); //button take dhorlam hello show korse
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue); //ja likhbo ta inspact e show kortese
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    // console.log(url); //thik thak moto ashtese
    fetch(url)
        .then((res) => res.json())
        .then((data) => showPlayerDetails(data));
    //ei data take onno ekta function e pathate hbe 
    //and oi function take ekhane call korte hbe 
};
const showPlayerDetails = (player) => {
    console.log(player);
}
//inspact e 17 no line theke run hochee

