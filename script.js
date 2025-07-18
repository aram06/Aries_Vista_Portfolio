const topics = {
  algebra: {
    title: "Algebra",
    lesson: `
      <p>Algebra is all about using letters (like x or y) to represent unknown numbers. We can use algebra to solve problems and to understand patterns.</p>
      <p>Here are some key concepts:</p>
      <ul>
        <li><b>Variables:</b> These are the letters that represent numbers.</li>
        <li><b>Expressions:</b> These are combinations of numbers, variables, and operations (like +, -, *, /). For example, 2x + 5 is an expression.</li>
        <li><b>Equations:</b> These are two expressions that are equal to each other. For example, 2x + 5 = 15 is an equation.</li>
      </ul>
    `,
    quiz: [
      { question: "What is the value of x in the equation 2x + 5 = 15?", answer: "5" },
      { question: "Simplify the expression 3a + 2b + 5a - b.", answer: "8a + b" }
    ]
  },
  geometry: {
    title: "Geometry",
    lesson: `
      <p>Geometry is the study of shapes, sizes, and positions of figures.</p>
      <p>Here are some key concepts:</p>
      <ul>
        <li><b>Angles:</b> An angle is the space between two intersecting lines. Angles are measured in degrees.</li>
        <li><b>Triangles:</b> A triangle is a polygon with three sides and three angles. The sum of the angles in a triangle is always 180 degrees.</li>
        <li><b>Circles:</b> A circle is a shape where all points are the same distance from the center.</li>
      </ul>
    `,
    quiz: [
      { question: "What is the sum of the angles in a triangle?", answer: "180" },
      { question: "What is the name of a polygon with 5 sides?", answer: "pentagon" }
    ]
  },
  number: {
    title: "Number",
    lesson: `
      <p>Number is a fundamental concept in mathematics. We use numbers to count, measure, and compare.</p>
      <p>Here are some key concepts:</p>
      <ul>
        <li><b>Integers:</b> These are whole numbers, both positive and negative, including zero.</li>
        <li><b>Fractions:</b> These are parts of a whole. A fraction is written as one number over another, like 1/2.</li>
        <li><b>Decimals:</b> These are another way of writing fractions. For example, 1/2 can be written as 0.5.</li>
      </ul>
    `,
    quiz: [
      { question: "What is 1/2 as a decimal?", answer: "0.5" },
      { question: "What is the next prime number after 7?", answer: "11" }
    ]
  },
  trigonometry: {
    title: "Trigonometry",
    lesson: `
      <p>Trigonometry is the study of the relationships between the sides and angles of triangles.</p>
      <p>Here are some key concepts:</p>
      <ul>
        <li><b>Sine (sin):</b> The ratio of the length of the side opposite an angle to the length of the hypotenuse.</li>
        <li><b>Cosine (cos):</b> The ratio of the length of the adjacent side to the length of the hypotenuse.</li>
        <li><b>Tangent (tan):</b> The ratio of the length of the opposite side to the length of the adjacent side.</li>
      </ul>
    `,
    quiz: [
      { question: "In a right-angled triangle, if the side opposite angle A is 3 and the hypotenuse is 5, what is sin(A)?", answer: "3/5" },
      { question: "What is the value of cos(60 degrees)?", answer: "0.5" }
    ]
  }
};

const topicLinks = document.querySelectorAll("#topics a");
const currentTopic = document.getElementById("current-topic");
const lessonDiv = document.getElementById("lesson");
const quizDiv = document.getElementById("quiz");

topicLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const topic = e.target.hash.substring(1);
    loadTopic(topic);
  });
});

function loadTopic(topic) {
  currentTopic.textContent = topics[topic].title;
  lessonDiv.innerHTML = topics[topic].lesson;
  loadQuiz(topic);
}

function loadQuiz(topic) {
  const quiz = topics[topic].quiz;
  quizDiv.innerHTML = "";
  quiz.forEach((q, i) => {
    const questionEl = document.createElement("div");
    questionEl.innerHTML = `
      <p><b>Question ${i + 1}:</b> ${q.question}</p>
      <input type="text" id="answer${i}">
    `;
    quizDiv.appendChild(questionEl);
  });
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit Answers";
  submitButton.addEventListener("click", () => checkAnswers(topic));
  quizDiv.appendChild(submitButton);
}

function checkAnswers(topic) {
  const quiz = topics[topic].quiz;
  let correct = 0;
  quiz.forEach((q, i) => {
    const userAnswer = document.getElementById(`answer${i}`).value;
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      correct++;
    }
  });
  alert(`You got ${correct} out of ${quiz.length} correct!`);
}
