"use strict";

const idiom_list = {
  "a book worm": "a person who read a lot",
  "a jack of all trades": "someone who can do many different jobs",
  "a little bird told me":
    "used to say that the speaker knows something but prefers to keep the identity of the information a secret",
  "a piece of cake": "something that very easy to do",
  "an early bird":
    "a person who rises, arrives, or acts before the usual or expected time",
  "as easy as pie": "something that very easy to do",
  "be in the same boat": "be in the same unfortunate circumstances as others",
  "be in/of two minds": "to be unable decide about something",
  "be/feel on top of the world": "extremly happy",
  "be second to none": "as good as or better than all others",
  "better left unsaid":
    "something should not be mentioned, usually because it is offensive, inappropriate, or problematic",
  "bored to death": "completely bored",
  "be broke": "having completely run out of money",
  "call it a day":
    "to stop what you are doing because you do not want to do anymore or think you have done enough",
  "cat got your toungue":
    "something you say to someone when you are annoyed because they will not speak",
  "come rain or shine": "whatever happens",
  "cost an arm and a leg": "to cost lot of money",
  "could not agree more": "to strongly agree",
  "don't be a stranger":
    "keep in touch, let's keep in contact even though we're parting",
  "don't make me laugh!":
    "something that you say when someone has suggested something that you think is not at all likely to happen",
  "dress to kill": "dressed very nicely",
  "eat a horse": "extremely hungry",
  "fair enough":
    "something that you say to show that you understand why someone has done or said something",
  "feel under the weather": "to feel ill",
  "get along/on like a house on fire":
    "like each other very much and become friends very quickly",
};

const idiomSection = document.querySelector(".idiom");

for (const [key, value] of Object.entries(idiom_list)) {
  const idiomDiv = document.createElement("div");
  idiomDiv.className = "idiom-div";
  const idiomText = document.createTextNode(key);
  idiomDiv.appendChild(idiomText);

  const explainDiv = document.createElement("div");
  explainDiv.className = "explain-div";
  const explainText = document.createTextNode(value);
  explainDiv.appendChild(explainText);

  document.body.insertBefore(idiomDiv, idiomSection);
  document.body.insertBefore(explainDiv, idiomSection);
}
