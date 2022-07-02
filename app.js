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
        .then((data) => console.log(data));
    //ei data take onno ekta function e pathate hbe 
};

