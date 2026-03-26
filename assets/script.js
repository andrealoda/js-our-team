const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


function addCard(teamMembersArray) {
  const cardBox = document.getElementById('card-box');

  for (let i = 0; i < teamMembersArray.length; i++) {
    const member = teamMembersArray[i];

    const cardColumn = document.createElement('div');
    cardColumn.classList.add('col-12', 'col-md-4', 'col-lg-3');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-3', 'bg-black', 'w-auto');

    const memberCard = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./assets/${member.img}" class="img-fluid" alt="${member.name}">
      </div>
      <div class="col-md-8">
        <div class="card-body py-1">
          <h5 class="card-title text-white">${member.name}</h5>
          <p class="card-text text-white">${member.role}</p>
          <p class="card-text text-info mb-0">${member.email}</p>
        </div>
      </div>
    </div>
`;

    cardDiv.innerHTML = memberCard;
    cardColumn.appendChild(cardDiv);
    cardBox.appendChild(cardColumn);

  }
}

addCard(teamMembers);

const formInput = document.getElementById('card-input');

formInput.addEventListener('submit', function (e) {
  e.preventDefault();
  const nameInput = document.getElementById('name-input').value;
  const roleInput = document.getElementById('role-input').value;
  const emailInput = document.getElementById('email-input').value;

  const newCard = { name: nameInput, role: roleInput, email: emailInput }

  teamMembers.push(newCard);


  console.log(teamMembers);
  addCard(teamMembers);

})

