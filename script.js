const players = [
  { name: "L. Messi", team: "Inter Miami", rating: 93 },
  { name: "K. Mbappé", team: "PSG", rating: 91 },
  { name: "E. Haaland", team: "Man City", rating: 90 },
  { name: "K. De Bruyne", team: "Man City", rating: 89 },
];

players.sort((a, b) => b.rating - a.rating);

const table = document.getElementById("playerTable");

players.forEach((player, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${player.name}</td>
    <td>${player.team}</td>
    <td class="rating">${player.rating}</td>
  `;
  table.appendChild(row);
});
