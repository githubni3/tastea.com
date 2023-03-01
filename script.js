const submit_button = document.getElementById("submit-btn");
const rest_button = document.getElementById("reset-btn");

submit_button.addEventListener("click", displayTea);
rest_button.addEventListener("click", checkBox_reset);

// help section
const checkedArr = new Map();
var checkBtnCount = 0;

const btn = document.getElementsByClassName("form-check-input");

let closeModal = () => {
  document.getElementById('modal').className = document.getElementById('modal').className.replace('openModal')
}
function checklist(para, name) {
  if (document.getElementById(para).checked === true) {
    checkBtnCount--;
    checkedArr.delete(para);
  }
  if (checkBtnCount <= 3 && document.getElementById(para).checked === false) {
    document.getElementById(para).checked = true;
    checkedArr.set(para, [para, name]);
    checkBtnCount++;
  } else if (
    checkBtnCount === 4 &&
    document.getElementById(para).checked === false
  ) {
    document.getElementById('modal').className += ' openModal'
    setTimeout(closeModal, 1900);
  } else {
    document.getElementById(para).checked = false;
  }
}

let teasData = [
  {
    id: 0,
    name: "Rose Oolong",
    src: "./teas/rose_oolong_1.jpg",
    ailments: "immunity bloodpressure bonehealth anxiety",
    display: false,
  },
  {
    id: 1,
    name: "Jasmine Delight",
    src: "./teas/Jasmine_delight.jpg",
    ailments: "digestion sugar bonehealth",
    display: false,
  },
  {
    id: 2,
    name: "Blueberry Splash",
    src: "./teas/blueberry.jpg",
    ailments: "sugar",
    display: false,
  },
  {
    id: 3,
    name: "Tulsi Green Tea",
    src: "./teas/Tulsi-Green-Tea.jpg",
    ailments: "immunity calming cold congestion asthma",
    display: false,
  },
  {
    id: 4,
    name: "Lemon Tulsi",
    src: "./teas/lemon_tulsi.png",
    ailments: "immunity calming asthma insomnia headache",
    display: false,
  },
  {
    id: 5,
    name: "Masala Chai",
    src: "./teas/masala_tea.webp",
    ailments: "immunity",
    display: false,
  },
  {
    id: 6,
    name: "Chamomile",
    src: "./teas/chamomile.jpg",
    ailments:
      "stress insomnia bloodpressure headache diarrhea constipation anxiety",
    display: false,
  },
  {
    id: 7,
    name: "Lavender Hush",
    src: "./teas/Lovender_Hush.jpg",
    ailments: "stress cold congestion insomnia anxiety",
    display: false,
  },
  {
    id: 8,
    name: "Blue Butterfly",
    src: "./images/Blue_butterfly_pea_flower.jpg",
    ailments: "stress weightloss skinhealth",
    display: false,
  },
  {
    id: 9,
    name: "Mango Desire",
    src: "./teas/Mango_desire.jpeg",
    ailments: "stress skinhealth",
    display: false,
  },
  {
    id: 10,
    name: "Mint Tea",
    src: "./teas/mint_tea.jpg",
    ailments: "calming anxiety",
    display: false,
  },

  {
    id: 11,
    name: "Liquorice",
    src: "./teas/Liquorice.jpg",
    ailments: "calming digestion diarrhea constipation",
    display: false,
  },

  {
    id: 12,
    name: "Strawberry Magic",
    src: "./teas/Strawberry_magic.jpg",
    ailments: "digestion diarrhea",
    display: false,
  },
  {
    id: 13,
    name: "Ginger Turmeric",
    src: "./images/Ginger_turmeric.jpg",
    ailments:
      "digestion skinhealth heartproblem headache diarrhea constipation",
    display: false,
  },

  {
    id: 14,
    name: "Mystic Banana",
    src: "./teas/Mystic_Banana.jpg",
    ailments: "insomnia heartproblem",
    display: false,
  },
  {
    id: 15,
    name: "Daily wellness Tea",
    src: "./teas/daily-wellness.jpg",
    ailments: "cold congestion heartproblem asthma",
    display: false,
  },
  {
    id: 16,
    name: "Immunity Elixir Tea",
    src: "./teas/Immunity_Elixir_Tea.jfif",
    ailments: "cold congestion asthma",
    display: false,
  },
  {
    id: 17,
    name: "Hibiscus",
    src: "./teas/hibiscus.jpg",
    ailments: "bloodpressure sugar weightloss bonehealth",
    display: false,
  },
  {
    id: 18,
    name: "Emerald Green",
    src: "./teas/emerald_green.jpg",
    ailments: "bloodpressure",
    display: false,
  },
  {
    id: 19,
    name: "Moringa",
    src: "./teas/Moringa.jpg",
    ailments: "sugar weightloss",
    display: false,
  },
  {
    id: 20,
    name: "Divine Apple",
    src: "./teas/divine_apple.jpg",
    ailments: "weightloss constipation bonehealth",
    display: false,
  },
  {
    id: 21,
    name: "Refreshing Pineapple",
    src: "./teas/refreshing_pineapple.png",
    ailments: "headache",
    display: false,
  },
  {
    id: 22,
    name: "Lemon Zing",
    src: "./teas/Lemon_zing.jpg",
    ailments: "skinhealth",
    display: false,
  },
  {
    id: 23,
    name: "Lapsang Souchong Smoked Tea",
    src: "./teas/lapsnag.jpg",
    ailments: "heartproblem",
    display: false,
  },
];

heading = document.getElementsByClassName("Tea_heading");

const suggested_tea_reset = () => {
  for (let i = 0; i < heading.length; i++) {
    heading[i].style.display = "none";
  }
  teas = document.getElementsByClassName("teas");
  for (let i = 0; i < teas.length; i++) {
    teas[i].innerHTML = "";
  }
};

function displayTea() {
  suggested_tea = document.getElementsByClassName("suggested_tea");
  suggested_tea_reset();

  if (checkedArr.length == 0) {
    return;
  }

  let i = 0;
  for (const [key, value] of checkedArr) {
    let name = value[0];
    let name_heading = value[1];

    heading[i].style.display = "block";
    heading[i].innerText = `Suggested Teas For ${name_heading}`;
    let displayedTeaCount = 0;
    for (let j = 0; j < teasData.length; j++) {
      if (
        teasData[j].ailments
          .toLocaleLowerCase()
          .includes(name.toLocaleLowerCase()) &&
        displayedTeaCount < 4
      ) {
        // console.log(teas[i]);
        teas[i].innerHTML += `
        <div class="tea col-lg-3 col-md-4 col-6 mt-3 ">
            <div class="card my-card shadow">
              <img src=${teasData[j].src} alt="tea image" class="card-img-top card-img">
              <div class="card-body">
                <h6 class="card-title card-text text-center">${teasData[j].name}</h6>
              </div>
            </div>
        </div>
          `;
        displayedTeaCount++;
      }
    }
    i++;
  }
}

function checkBox_reset() {
  for (const [key, value] of checkedArr) {
    let name = value[0];
    document.getElementById(name).checked = false;
  }
  checkedArr.clear();
  checkBtnCount = 0;
  suggested_tea_reset();
}

// Slider Code

var index = 0;
var i = 0;
var slider = document.getElementsByClassName("slider");

auto();

function show(n) {
  for (i = 0; i < slider.length; i++) {
    //slider.length = 3
    slider[i].style.display = "none";
  }
  slider[n - 1].style.display = "flex";
}

function auto() {
  index++;
  if (index > slider.length) {
    //to move from last slide to first slide
    index = 1;
  }
  show(index);
  setTimeout(auto, 4000);
}
