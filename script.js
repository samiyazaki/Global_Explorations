// Event list with multipliers, bonus thresholds, and prompts for each event
const events = [
  { 
    name: 'Alien Attack', shipType: 'defense', multiplier: 30, bonusThreshold: 10, bonusPoints: 50,
    prompt: "An unknown alien fleet approaches your planet. Your defense ships are the only thing standing between your civilization and complete devastation. Each ship in your fleet strengthens your defenses, but how many will it take to fend them off completely?"
  },
  { 
    name: 'Resource-Rich Asteroid', shipType: 'mining', multiplier: 25, bonusThreshold: 8, bonusPoints: 40,
    prompt: "A massive asteroid has been detected in your sector, rich with precious metals and resources. Only your mining ships can extract these resources to boost your planet's economy and fuel further expansion."
  },
  { 
    name: 'Neighboring Planet Discovered', shipType: 'trade', multiplier: 20, bonusThreshold: 6, bonusPoints: 30,
    prompt: "An uninhabited, resource-rich planet has been discovered nearby. Your trade ships can establish lucrative trade routes, but only if they're well-equipped to traverse the vast distances and handle the logistics of interplanetary trade."
  },
  { 
    name: 'Uncharted Lands', shipType: 'exploration', multiplier: 35, bonusThreshold: 5, bonusPoints: 25,
    prompt: "Sensors have detected uncharted lands on a distant world. Only your exploration ships can safely navigate this unknown territory, discovering new resources and expanding your planet's reach."
  },
  { 
    name: 'Solar Flare', shipType: 'defense', multiplier: 15, bonusThreshold: 7, bonusPoints: 20,
    prompt: "A massive solar flare is heading toward your planet, threatening power and communication systems. Your defense ships can shield vital infrastructure, but will it be enough to withstand the sun's fury?"
  },
  { 
    name: 'Galactic Trade Boom', shipType: 'trade', multiplier: 40, bonusThreshold: 10, bonusPoints: 60,
    prompt: "The galaxy is experiencing a surge in trade, with new markets opening up daily. This is an unprecedented opportunity for your trade ships to generate enormous profit for your planet if you can deploy them in time."
  },
  { 
    name: 'Unobtanium Meteor Discovered', shipType: 'mining', multiplier: 45, bonusThreshold: 12, bonusPoints: 70,
    prompt: "An incredibly rare unobtanium meteor has been found drifting nearby. This material is worth its weight in gold—literally. Mining ships can extract it, but the effort is resource-intensive and requires a substantial fleet."
  },
  { 
    name: 'Black Hole Avoidance', shipType: 'exploration', multiplier: 50, bonusThreshold: 9, bonusPoints: 80,
    prompt: "A previously uncharted black hole has been discovered dangerously close to your fleet's exploration path. Only the best-equipped exploration ships can detect and avoid its gravitational pull, ensuring your fleet’s safety and your mission’s success."
  }
];

// Store group data
let groups = [];

function addGroup() {
  const groupContainer = document.createElement('div');
  groupContainer.classList.add('group-container');
  
  const groupIndex = groups.length + 1;
  groupContainer.innerHTML = `
    <h3>Group ${groupIndex}</h3>
    <label>Group Name: <input type="text" id="group-name-${groupIndex}" placeholder="Enter group name"></label><br>
    <label>Defense Ships: <input type="number" id="defense-${groupIndex}" min="0" value="0"></label><br>
    <label>Trade Ships: <input type="number" id="trade-${groupIndex}" min="0" value="0"></label><br>
    <label>Exploration Ships: <input type="number" id="exploration-${groupIndex}" min="0" value="0"></label><br>
    <label>Mining Ships: <input type="number" id="mining-${groupIndex}" min="0" value="0"></label>
  `;
  document.getElementById('groupInputs').appendChild(groupContainer);

  // Add to groups array
  groups.push({
    name: `Group ${groupIndex}`,
    fleet: { defense: 0, trade: 0, exploration: 0, mining: 0 },
    points: { 'Alien Attack': 0, 'Resource-Rich Asteroid': 0, 'Neighboring Planet Discovered': 0, 'Uncharted Lands': 0, total: 0 }
  });
}

// Capture group data from input
function captureGroupData() {
  groups.forEach((group, index) => {
    const groupIndex = index + 1;
    group.name = document.getElementById(`group-name-${groupIndex}`).value || `Group ${groupIndex}`;
    group.fleet.defense = parseInt(document.getElementById(`defense-${groupIndex}`).value) || 0;
    group.fleet.trade = parseInt(document.getElementById(`trade-${groupIndex}`).value) || 0;
    group.fleet.exploration = parseInt(document.getElementById(`exploration-${groupIndex}`).value) || 0;
    group.fleet.mining = parseInt(document.getElementById(`mining-${groupIndex}`).value) || 0;
  });
}

// Generate a random event and calculate points
document.getElementById('generateEventBtn').addEventListener('click', () => {
  captureGroupData(); // Capture data from input fields

  // Select a random event
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  document.getElementById('eventDisplay').textContent = `Event: ${randomEvent.name} - ${randomEvent.prompt}`;
  
  // Calculate and display points for each group
  groups.forEach(group => {
    const shipCount = group.fleet[randomEvent.shipType] || 0;
    let baseScore = shipCount * randomEvent.multiplier;
    
    // Check if bonus points apply
    if (shipCount >= randomEvent.bonusThreshold) {
      baseScore += shipCount * randomEvent.bonusPoints;
    }
    
    // Update event points and total points
    group.points[randomEvent.name] = baseScore;
    group.points.total += baseScore;
  });

  // Display the results
  displayResults();
});

function displayResults() {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = '';
  groups.forEach(group => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${group.name}</td>
      <td>${group.points['Alien Attack'] || 0}</td>
      <td>${group.points['Resource-Rich Asteroid'] || 0}</td>
      <td>${group.points['Neighboring Planet Discovered'] || 0}</td>
      <td>${group.points['Uncharted Lands'] || 0}</td>
      <td>${group.points.total}</td>
    `;
    resultsBody.appendChild(row);
  });
}
