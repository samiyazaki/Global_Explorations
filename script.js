// List of 30 unique events with modifiers for all ship types
const events = [
  { 
    name: 'All for Oil and Oil for All',
    prompt: "A nearby planet was discovered that has vast reserves of oil. We must get it. Unfortunately the inhabitants don't realize how important this resource is and will be relocated to a much more pleasant planet nearby so we can proceed to extract this valuable liquid. There are some disputes over who discovered it first since we all share our exploration information so a minor war has broken out over the ownership of this planet.",
    modifiers: { Defense: 50, Trade: 0, Exploration: 5, Mining: 50 }
  }
];

document.getElementById('generateEventBtn').addEventListener('click', () => {
  const randomEvent = events[Math.floor(Math.random() * events.length)];

  // Debugging log to check if event is selected correctly
  console.log("Selected Event:", randomEvent);

  // Debugging log to check if modifiers exist
  console.log("Modifiers Object:", randomEvent.modifiers);

  // Ensure the keys exist before displaying (prevents 'undefined' issues)
  const defense = randomEvent.modifiers && "Defense" in randomEvent.modifiers ? randomEvent.modifiers.Defense : 0;
  const trade = randomEvent.modifiers && "Trade" in randomEvent.modifiers ? randomEvent.modifiers.Trade : 0;
  const exploration = randomEvent.modifiers && "Exploration" in randomEvent.modifiers ? randomEvent.modifiers.Exploration : 0;
  const mining = randomEvent.modifiers && "Mining" in randomEvent.modifiers ? randomEvent.modifiers.Mining : 0;

  console.log("Extracted Modifiers:", { defense, trade, exploration, mining });

  document.getElementById('eventDisplay').innerHTML = `
    <h2>Event: ${randomEvent.name}</h2>
    <p>${randomEvent.prompt}</p>
    <h3>Modifiers:</h3>
    <ul>
      <li><strong>Defense:</strong> ${defense}</li>
      <li><strong>Trade:</strong> ${trade}</li>
      <li><strong>Exploration:</strong> ${exploration}</li>
      <li><strong>Mining:</strong> ${mining}</li>
    </ul>
  `;
});

