const submit_button = document.getElementById("submit-btn");
const rest_button = document.getElementById("reset-btn");

submit_button.addEventListener("click", displayTea);
rest_button.addEventListener("click", checkBox_reset);

// help section
const checkedArr = new Map();
var checkBtnCount = 0;

const btn = document.getElementsByClassName("form-check-input");

let closeModal = () => {
  document.getElementById("modal").className = document
    .getElementById("modal")
    .className.replace("openModal");
};
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
    document.getElementById("modal").className += " openModal";
    setTimeout(closeModal, 1900);
  } else {
    document.getElementById(para).checked = false;
  }
}

let teasData = [
  {
    id: 0,
    name: "Rose Oolong",
    src: "./assets/images/teas/rose_oolong_1.jpg",
    ailments: "immunity bloodpressure bonehealth anxiety",
    readMeHref: "./floral-teas.html?#roseOolong",
    display: false,
  },
  {
    id: 1,
    name: "Jasmine Delight",
    src: "./assets/images/teas/Jasmine_delight.jpg",
    ailments: "digestion sugar bonehealth",
    readMeHref: "./floral-teas.html?#jasmineDelight",
    display: false,
  },
  {
    id: 2,
    name: "Blueberry Splash",
    src: "./assets/images/teas/blueberry.jpg",
    readMeHref: "./fruity-blend.html?#blueBerrySplash",
    ailments: "sugar",
    display: false,
  },
  {
    id: 3,
    name: "Tulsi Green Tea",
    src: "./assets/images/teas/Tulsi-Green-Tea.jpg",
    ailments: "immunity calming cold congestion asthma",
    readMeHref: "./herbal-teas.html?#tulsiGreenTea",
    display: false,
  },
  {
    id: 4,
    name: "Lemon Tulsi",
    src: "./assets/images/teas/lemon_tulsi.png",
    readMeHref: "./herbal-teas.html?#lemonTulsi",
    ailments: "immunity calming asthma insomnia headache",
    display: false,
  },
  {
    id: 5,
    name: "Masala Chai",
    src: "./assets/images/teas/masala_tea.webp",
    ailments: "immunity",
    readMeHref: "./exotic.html?#masalaChai",
    display: false,
  },
  {
    id: 6,
    name: "Chamomile",
    src: "./assets/images/teas/chamomile.jpg",
    ailments:
      "stress insomnia bloodpressure headache diarrhea constipation anxiety",
    readMeHref: "./floral-teas.html?#chamomile",
    display: false,
  },
  {
    id: 7,
    name: "Lavender Hush",
    src: "./assets/images/teas/Lovender_Hush.jpg",
    ailments: "stress cold congestion insomnia anxiety",
    readMeHref: "./floral-teas.html?#lavenderHush",
    display: false,
  },
  {
    id: 8,
    name: "Blue Butterfly",
    src: "./assets/images/images/Blue_butterfly_pea_flower.jpg",
    ailments: "stress weightloss skinhealth",
    readMeHref: "./floral-teas.html?#blueButterfly",
    display: false,
  },
  {
    id: 9,
    name: "Mango Desire",
    src: "./assets/images/teas/Mango_desire.jpeg",
    ailments: "stress skinhealth",
    readMeHref: "./fruity-blend.html?#mangoDesire",
    display: false,
  },
  {
    id: 10,
    name: "Mint Tea",
    src: "./assets/images/teas/mint_tea.jpg",
    ailments: "calming anxiety",
    readMeHref: "./herbal-teas.html?#mintTea",
    display: false,
  },

  {
    id: 11,
    name: "Liquorice",
    src: "./assets/images/teas/Liquorice.jpg",
    ailments: "calming digestion diarrhea constipation",
    readMeHref: "./herbal-teas.html?#liquorice",
    display: false,
  },

  {
    id: 12,
    name: "Strawberry Magic",
    src: "./assets/images/teas/Strawberry_magic.jpg",
    ailments: "digestion diarrhea",
    readMeHref: "./fruity-blend.html?#strawberryMagic",
    display: false,
  },
  {
    id: 13,
    name: "Ginger Turmeric",
    src: "./assets/images/images/Ginger_turmeric.jpg",
    ailments:
      "digestion skinhealth heartproblem headache diarrhea constipation",
    readMeHref: "./immunity.html?#gingerTurmeric",
    display: false,
  },

  {
    id: 14,
    name: "Mystic Banana",
    src: "./assets/images/teas/Mystic_Banana.jpg",
    ailments: "insomnia heartproblem",
    readMeHref: "./fruity-blend.html?#mysticBanana",
    display: false,
  },
  {
    id: 15,
    name: "Daily wellness Tea",
    src: "./assets/images/teas/daily-wellness.jpg",
    ailments: "cold congestion heartproblem asthma",
    readMeHref: "./immunity.html?#dailyWellnessTea",
    display: false,
  },
  {
    id: 16,
    name: "Immunity Elixir Tea",
    src: "./assets/images/teas/Immunity_Elixir_Tea.jfif",
    ailments: "cold congestion asthma",
    readMeHref: "./immunity.html?#immunityElixirTea",
    display: false,
  },
  {
    id: 17,
    name: "Hibiscus",
    src: "./assets/images/teas/hibiscus.jpg",
    ailments: "bloodpressure sugar weightloss bonehealth",
    readMeHref: "./floral-teas.html?#hibiscus",
    display: false,
  },
  {
    id: 18,
    name: "Emerald Green",
    src: "./assets/images/teas/emerald_green.jpg",
    ailments: "bloodpressure",
    readMeHref: "./authentic.html?#emeraldGreen",
    display: false,
  },
  {
    id: 19,
    name: "Moringa",
    src: "./assets/images/teas/Moringa.jpg",
    ailments: "sugar weightloss",
    readMeHref: "./herbal-teas.html?#moringa",
    display: false,
  },
  {
    id: 20,
    name: "Divine Apple",
    src: "./assets/images/teas/divine_apple.jpg",
    ailments: "weightloss constipation bonehealth",
    readMeHref: "./fruity-blend.html?#divineApple",
    display: false,
  },
  {
    id: 21,
    name: "Refreshing Pineapple",
    src: "./assets/images/teas/refreshing_pineapple.png",
    ailments: "headache",
    readMeHref: "./fruity-blend.html?#refreshingPineapple",
    display: false,
  },
  {
    id: 22,
    name: "Lemon Zing",
    src: "./assets/images/teas/Lemon_zing.jpg",
    ailments: "skinhealth",
    readMeHref: "./fruity-blend.html?#lemonZing",
    display: false,
  },
  {
    id: 23,
    name: "Lapsang Souchong Smoked Tea",
    src: "./assets/images/teas/lapsnag.jpg",
    ailments: "heartproblem",
    readMeHref: "./exotic.html?#lapsangSouchongSmokedTea",
    display: false,
  },
];

const combination4 = new Map();
const combination3 = new Map();
const combination2 = new Map();
const combination1 = new Map();


const capitaliseStr = (str) => {
  let strArr = str.split(", ");
  let newStr = "";
  for (let i = 0; i < strArr.length-1; i++) {
    const element = strArr[i];
    newStr += checkedArr.get(element)[1]+", "
  }
  return newStr;
}

const findCombination = () => {
  for (let i = 0; i < teasData.length; i++) {
    const element = teasData[i];
    let ailmentsStr = "";
    let ailmentsCount = 0;
    for (const key of checkedArr) {
      if (
        element.ailments
          .toLocaleLowerCase()
          .includes(key[1][0].toLocaleLowerCase())
      ) {
        ailmentsStr += key[1][0].toLocaleLowerCase() + ", ";
        ailmentsCount++;
      }
    }
    if (ailmentsCount === 0) {
      continue;
    }
    if (ailmentsCount === 1) {
      combination1.set(element.id, ailmentsStr);
    }
    if (ailmentsCount === 2) {
      combination2.set(element.id, ailmentsStr);
    }
    if (ailmentsCount === 3) {
      combination3.set(element.id, ailmentsStr);
    }
    if (ailmentsCount === 4) {
      combination4.set(element.id, ailmentsStr);
    }
  }
};

teas = document.getElementById("teas");

const suggested_tea_reset = () => {
  heading[0].style.display = "none";
  teas.innerHTML = "";

  combination1.clear();
  combination2.clear();
  combination3.clear();
  combination4.clear();

  teasData.forEach((element) => {
    element.display = false;
  });
};


const displayTea4 = () => {
  if (combination4.size !== 0) {
    for (const [id, ailments] of combination4) {
      if (teasData[id].display === false) {
        teas.innerHTML += `
        <a href=${teasData[id].readMeHref} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${teasData[id].src} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${teasData[id].name}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${capitaliseStr(ailments).slice(0,-2)}</span></div>
            
          </div>
        </a>
          `;

        teasData[id].display = true;
      }
      if (teasData[id].display === true) {
        break;
      }
    }

    for (const [key, value] of checkedArr) {
      let name = value[0];
      let name_heading = value[1];

      for (let j = 0; j < teasData.length; j++) {
        if (
          teasData[j].ailments
            .toLocaleLowerCase()
            .includes(name.toLocaleLowerCase()) &&
          teasData[j].display === false
        ) {
          teas.innerHTML += `
          <a href=${teasData[j].readMeHref} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
            <div class="card my-card shadow">
              <img src=${teasData[j].src} alt="tea image" class="card-img-top card-img">
              <div class="card-body">
                <h6 class="card-title card-text text-center">${teasData[j].name}</h6>
              </div>
              <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${name_heading}</span></div>
              
            </div>
          </a>
            `;

          teasData[j].display = true;
          break;
        }
      }
    }
    return
  }

  let ailmentArr = [];
  i = 0;
  for (const [key, value] of checkedArr) {
    ailmentArr[i] = value[0];
    i++;
  }

  let htmlCard3 = (a, b, c, d, e, f) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${
              checkedArr.get(ailmentArr[d])[1] + ", " + checkedArr.get(ailmentArr[e])[1] + ", " + checkedArr.get(ailmentArr[f])[1]
            }</span></div>
            
          </div>
        </a>`;
  };

  if (combination3.size !== 0) {
    for (const [id, ailments] of combination3) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[2])
      ) {
        teas.innerHTML += `
           ${htmlCard3(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 1, 2)}
          `;
        teasData[id].display = true;
        break;
      }
    }

    for (const [id, ailments] of combination3) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard3(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 1, 3)}

          `;
        teasData[id].display = true;
        break;
      }
    }

    for (const [id, ailments] of combination3) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[2]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard3(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 2, 3)}
          `;
        teasData[id].display = true;
        break;
      }
    }

    for (const [id, ailments] of combination3) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[2]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard3(teasData[id].readMeHref,teasData[id].src,teasData[id].name,1,2,3)}
          `;
        teasData[id].display = true;
        break;
      }
    }
  }

  let htmlCard2 = (a, b, c, d, e) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${
              checkedArr.get(ailmentArr[d])[1] + ", " + checkedArr.get(ailmentArr[e])[1]
            }</span></div>
            
          </div>
        </a>`;
  };

  if (combination2.size !== 0) {
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[1])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 1)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[2])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 2)}
          `;

        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0, 3)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[2])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 1, 2)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 1, 3)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[2]) &&
        ailments.includes(ailmentArr[3])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 2, 3)}
          `;
        teasData[id].display = true;
        break;
      }
    }
  }

  let htmlCard1 = (a, b, c, d) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${checkedArr.get(ailmentArr[d])[1]}</span></div>
            
          </div>
        </a>`;
  };
  if (combination1.size !== 0) {
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[0])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 0)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[1])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 1)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[2])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 2)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[3])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src, teasData[id].name, 3)}
          `;
        teasData[id].display = true;
        break;
      }
    }
  }
};

const displayTea3 = () => {
  if (combination3.size !== 0) {
    for (const [id, ailments] of combination3) {
      if (teasData[id].display === false) {
        teas.innerHTML += `
        <a href=${teasData[id].readMeHref} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${teasData[id].src} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${teasData[id].name}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${capitaliseStr(ailments).slice(0,-2)}</span></div>
            
          </div>
        </a>
          `;

        teasData[id].display = true;
      }
    }
  }

  let ailmentArr = [];
  i = 0;
  for (const [key, value] of checkedArr) {
    ailmentArr[i] = value[0];
    i++;
  }

  let htmlCard2 = (a, b, c, d, e) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${
              checkedArr.get(ailmentArr[d])[1] + ", " + checkedArr.get(ailmentArr[e])[1]
            }</span></div>
            
          </div>
        </a>`;
  };
  if (combination2.size !== 0) {
    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[1])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src,teasData[id].name,0,1)}
          `;
        teasData[id].display = true;
        break;
      }
    }

    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[0]) &&
        ailments.includes(ailmentArr[2])
      ) {
        teas.innerHTML += `
        ${htmlCard2(teasData[id].readMeHref,teasData[id].src,teasData[id].name,0,2)}  
          `;
        teasData[id].display = true;
        break;
      }
    }

    for (const [id, ailments] of combination2) {
      if (
        teasData[id].display === false &&
        ailments.includes(ailmentArr[1]) &&
        ailments.includes(ailmentArr[2])
      ) {
        teas.innerHTML += `        ${htmlCard2(teasData[id].readMeHref,teasData[id].src,teasData[id].name,1,2)}

          `;
        teasData[id].display = true;
        break;
      }
    }
  }

  let htmlCard1 = (a, b, c, d) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${
              checkedArr.get(ailmentArr[d])[1]
            }</span></div>
            
          </div>
        </a>`;
  };

  if (combination1.size !== 0) {

    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[0])) {

        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src,teasData[id].name,0)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[1])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src,teasData[id].name,1)}
          `;
        teasData[id].display = true;
        break;
      }
    }
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[2])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src,teasData[id].name,2)}
          `;
        teasData[id].display = true;
        break;
      }
    }
  }
};
const displayTea2 = () => {
  if (combination2.size !== 0) {
    for (const [id, ailments] of combination2) {
      if (teasData[id].display === false) {
        teas.innerHTML += `
        <a href=${teasData[id].readMeHref} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${teasData[id].src} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${teasData[id].name}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${capitaliseStr(ailments).slice(0,-2)}</span></div>
            
          </div>
        </a>
          `;

        teasData[id].display = true;
      }
    }
  }

  let ailmentArr = [];
  i = 0;
  for (const [key, value] of checkedArr) {
    ailmentArr[i] = value[0];
    i++;
  }
  let htmlCard1 = (a, b, c, d) => {
    return `
  <a href=${a} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
          <div class="card my-card shadow">
            <img src=${b} alt="tea image" class="card-img-top card-img">
            <div class="card-body">
              <h6 class="card-title card-text text-center">${c}</h6>
            </div>
            <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${checkedArr.get(ailmentArr[d])[1]}</span></div>
            
          </div>
        </a>`;
  };
  if (combination1.size !== 0) {
    let count = 0;
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[0])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src,teasData[id].name,0)}
          `;
        teasData[id].display = true;
        count++;
        if(count === 2){break;}
      }
    }
    count = 0;
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false && ailments.includes(ailmentArr[1])) {
        teas.innerHTML += `
        ${htmlCard1(teasData[id].readMeHref,teasData[id].src,teasData[id].name,1)}
          `;
        teasData[id].display = true;
        count++
        if(count === 2){break;}
      }
    }
  }
};
const displayTea1 = () => {
  if (combination1.size !== 0) {
    for (const [id, ailments] of combination1) {
      if (teasData[id].display === false) {
        teas.innerHTML += `
        <a href=${teasData[id].readMeHref} class="tea col-lg-3 col-md-4 col-6 mt-3 ">
        <div class="card my-card shadow">
          <img src=${teasData[id].src} alt="tea image" class="card-img-top card-img">
          <div class="card-body">
            <h6 class="card-title card-text text-center">${teasData[id].name}</h6>
          </div>
          <div class="BestFor card-text mb-2 ms-2">Best For : <span class="bestFor text-center">${capitaliseStr(ailments).slice(0,-2)}</span></div>
          
        </div>
      </a>
          `;

        teasData[id].display = true;
      }
    }
  }
};

heading = document.getElementsByClassName("Tea_heading");

function displayTea() {
  suggested_tea_reset();

  if (checkedArr.size === 0) {
    return;
  }
  findCombination();

  suggested_tea = document.getElementsByClassName("suggested_tea");

  heading[0].style.display = "block";
  heading[0].innerText = `Suggested Teas For You`;

  switch (checkedArr.size) {
    case 4:
      displayTea4();
      break;
    case 3:
      displayTea3();
      break;
    case 2:
      displayTea2();
      break;
    case 1:
      displayTea1();
      break;
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
