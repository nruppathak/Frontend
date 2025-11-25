const tableBody = document.querySelector("#userTable tbody");
const refreshBtn = document.getElementById("refreshBtn");
const loader = document.getElementById("loader");

async function fetchUsers() {
    loader.style.display = "block";
    tableBody.innerHTML = "";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach(user => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = user.name;

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;

        const cityCell = document.createElement("td");
        cityCell.textContent = user.address.city;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(cityCell);

        tableBody.appendChild(row);
    });

    loader.style.display = "none";
}

refreshBtn.addEventListener("click", fetchUsers);

fetchUsers();
