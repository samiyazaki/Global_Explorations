// List of 30 random events with modifiers
const events = [
  {
    name: 'Alien Attack',
    prompt: "A hostile group of unknown origin has attacked your mining and trade routes. Your exploration ships rush out to scout the area and pinpoint the threats so that your defense ships can efficiently respond to the problem.",
      modifiers: {
        defense: " + 40 per Defense Ship",
        trade: " - 10 per Trade ship",
        exploration: " + 10 per Exploration Ship",
        mining: "-10 per Mining ship"
      }
  }
  
// Generate a random event and display its modifier
document.getElementById('generateEventBtn').addEventListener('click', () => {
  const randomEvent = events[Math.floor(Math.random() * events.length)];
  
 document.getElementById('eventDisplay').innerHTML = `
   <h2>Event: ${randomEvent.name}</h2>
   <p>${randomEvent.prompt}</p>
   <h3>Modifiers:</h3>
   <ul>
     <li><strong>Defense:</strong> ${randomEvent.modifiers.defense}</li>
     <li><strong>Trade:</strong> ${randomEvent.modifiers.trade}</li>
     <li><strong>Exlporation:</strong> ${randomEvent.modifiers.exploration}</li>
     <li><strong>mining:</strong> ${randomEvent.modifiers.mining}</li>
    </ul>
  `;
});
