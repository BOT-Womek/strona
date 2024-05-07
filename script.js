// Sample random text generator (replace with your desired logic)
function generateRandomText() {
    const paragraphs = [
      "W technikum zdobywam wiedzę i umiejętności niezbędne do rozpoczęcia kariery w informatyce. Uczę się programowania, sieci komputerowych, baz danych i innych istotnych zagadnień.",
      "Interesuję się również nowymi technologiami i stale śledzę trendy w branży IT. W wolnym czasie lubię programować hobbystycznie i tworzyć własne projekty.",
      "Moim celem jest zdobycie wykształcenia i doświadczenia, które pozwolą mi na pracę w prężnie rozwijającej się firmie IT. Chcę wykorzystać swoje umiejętności do tworzenia innowacyjnych rozwiązań i wpływania na rozwój technologiczny.",
    ];
  
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    const randomText = paragraphs[randomIndex];
  
    return randomText;
  }
  
  // Replace existing text with random text on page load
  document.addEventListener('DOMContentLoaded', () => {
    const randomText = generateRandomText();
    const randomTextElement = document.getElementById('random-text');
    randomTextElement.textContent = randomText;
  });
  