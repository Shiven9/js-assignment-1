const nouns = ["cat", "dog", "house", "tree", "car"];
const verbs = ["runs", "jumps", "sleeps", "eats", "walks"];
const adjectives = ["happy", "big", "red", "beautiful", "friendly"];
const adverbs = ["quickly", "slowly", "happily", "loudly", "quietly"];
const prepositions = ["over", "under", "on", "in", "behind"];

let nounIndex = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let adverbIndex = 0;
let prepositionIndex = 0;

function updateButtonText() {
  document.getElementById("nounBtn").innerText = nouns[nounIndex];
  document.getElementById("verbBtn").innerText = verbs[verbIndex];
  document.getElementById("adjectiveBtn").innerText = adjectives[adjectiveIndex];
  document.getElementById("adverbBtn").innerText = adverbs[adverbIndex];
  document.getElementById("prepositionBtn").innerText = prepositions[prepositionIndex];
}

updateButtonText();

document.getElementById("nounBtn").addEventListener("click", function() {
  nounIndex = (nounIndex + 1) % nouns.length;
  updateButtonText();
});

document.getElementById("verbBtn").addEventListener("click", function() {
  verbIndex = (verbIndex + 1) % verbs.length;
  updateButtonText();
});

document.getElementById("adjectiveBtn").addEventListener("click", function() {
  adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
  updateButtonText();
});

document.getElementById("adverbBtn").addEventListener("click", function() {
  adverbIndex = (adverbIndex + 1) % adverbs.length;
  updateButtonText();
});

document.getElementById("prepositionBtn").addEventListener("click", function() {
  prepositionIndex = (prepositionIndex + 1) % prepositions.length;
  updateButtonText();
});

document.getElementById("generateStoryBtn").addEventListener("click", function() {
  const output = document.getElementById("output");
  output.innerHTML = `<p>${nouns[nounIndex]} ${verbs[verbIndex]} ${adjectives[adjectiveIndex]} ${adverbs[adverbIndex]} ${prepositions[prepositionIndex]}</p>`;
});
