/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const adjectiveList = [
  "Cloud",
  "Serverless",
  "Secure",
  "Scalable",
  "Modern",
  "Persistent",
  "Analytical",
  "Enterprise",
  "Hybrid",
  "Active",
  "Asynchronous",
  "Eventually-Consistent",
  "Realtime",
  "Data-Driven",
  "Streamlined",
  "Discoverable",
  "Maintainable",
  "Resilient",
  "Conditional",
  "Logical",
  "Minimum Viable",
  "Deployable",
  "Accelerated",
  "Transformational",
  "Monolithic",
  "Multicloud",
  "Advanced",
  "Generative",
  "High-Performance",
  "Globally-Distributed",
  "Binary",
  "Insightful",
  "Non-Relational",
  "Synchronously-Replicated",
  "Multi-Version",
  "Balanced",
  "Unified",
  "Simple",
  "Service-Oriented",
  "Anonymous"
];

const animalList = [
  "Alligator",
  "Anteater",
  "Armadillo",
  "Auroch",
  "Axolotl",
  "Badger",
  "Bat",
  "Bear",
  "Beaver",
  "Buffalo",
  "Camel",
  "Capybara",
  "Chameleon",
  "Cheetah",
  "Chinchilla",
  "Chipmunk",
  "Chupacabra",
  "Cormorant",
  "Coyote",
  "Crow",
  "Dingo",
  "Dinosaur",
  "Dog",
  "Dolphin",
  "Duck",
  "Elephant",
  "Ferret",
  "Fox",
  "Frog",
  "Giraffe",
  "Gopher",
  "Grizzly",
  "Hedgehog",
  "Hippo",
  "Hyena",
  "Ibex",
  "Ifrit",
  "Iguana",
  "Jackal",
  "Kangaroo",
  "Koala",
  "Kraken",
  "Lemur",
  "Leopard",
  "Liger",
  "Lion",
  "Llama",
  "Loris",
  "Manatee",
  "Mink",
  "Monkey",
  "Moose",
  "Narwhal",
  "Nyan Cat",
  "Orangutan",
  "Otter",
  "Panda",
  "Penguin",
  "Platypus",
  "Pumpkin",
  "Python",
  "Quagga",
  "Rabbit",
  "Raccoon",
  "Rhino",
  "Sheep",
  "Shrew",
  "Skunk",
  "Squirrel",
  "Tiger",
  "Turtle",
  "Walrus",
  "Wolf",
  "Wolverine",
  "Wombat",
];

export const generateName = (): string => {
  const randomColor = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  const randomAnimal = animalList[Math.floor(Math.random() * animalList.length)];
  return `${randomColor} ${randomAnimal}`
} 