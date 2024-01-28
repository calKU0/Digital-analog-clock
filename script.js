function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hands = [
    { id: "hourHand", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 75 },
    { id: "hourHand1", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 60 },
    { id: "hourHand2", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 45 },
    { id: "hourHand3", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 30 },
    { id: "hourHand4", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 15 },
    { id: "hourHand5", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: 0 },
    { id: "hourHand6", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: -15 },
    { id: "hourHand7", deg: (360 / 12) * hours + (360 / 12) * (minutes / 60), value: hours, top: -30 },
    { id: "minuteHand", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 75 },
    { id: "minuteHand1", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 60 },
    { id: "minuteHand2", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 45 },
    { id: "minuteHand3", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 30 },
    { id: "minuteHand4", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 15 },
    { id: "minuteHand5", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: 0 },
    { id: "minuteHand6", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: -15 },
    { id: "minuteHand7", deg: (360 / 60) * minutes + (360 / 60) * (seconds / 60), value: minutes, top: -30 },
    { id: "secondHand", deg: (360 / 60) * seconds, value: seconds, top: 75 },
    { id: "secondHand1", deg: (360 / 60) * seconds, value: seconds, top: 60 },
    { id: "secondHand2", deg: (360 / 60) * seconds, value: seconds, top: 45 },
    { id: "secondHand3", deg: (360 / 60) * seconds, value: seconds, top: 30 },
    { id: "secondHand4", deg: (360 / 60) * seconds, value: seconds, top: 15 },
    { id: "secondHand5", deg: (360 / 60) * seconds, value: seconds, top: 0 },
    { id: "secondHand6", deg: (360 / 60) * seconds, value: seconds, top: -15 },
    { id: "secondHand7", deg: (360 / 60) * seconds, value: seconds, top: -30 }
  ];

  const clock = document.getElementById("clock");
  clock.innerHTML = '';

  hands.forEach(hand => {
    const handElement = document.createElement("div");
    handElement.classList.add("hand");
    handElement.id = hand.id;
    clock.appendChild(handElement);
    updateHand(hand);
  });

  const dot = document.createElement("div");
  dot.classList.add("dot");
  clock.appendChild(dot);
  clock.offsetHeight;
}

function updateHand(hand) {
  const element = document.getElementById(hand.id);
  const deg = hand.deg;
  const value = hand.value;

  element.style.transform = `translate(-50%, -100%) rotate(${deg}deg)`;
  element.innerHTML = `<div class="number" style="top: ${hand.top}%">${value}</div>`;
}

setInterval(updateClock, 1000);

updateClock();