import React, { useState } from "react";
import "./App.css";

const scenarios = [
  {
    id: 1,
    title: "Academic Burnout & Depression",
    summary:
      "Student feels overwhelmed, exhausted, and unmotivated due to excessive academic pressure and personal issues.",
    questions: [
      {
        id: 1,
        question: "How often do you feel exhausted from studying?",
        options: [
          { text: "Almost every day", next: 2 },
          { text: "Sometimes", next: 3 },
          { text: "Rarely", next: 4 },
          { text: "Never", next: 5 },
        ],
      },
      {
        id: 2,
        question: "Do you find it hard to concentrate on your work?",
        options: [
          { text: "Yes, always", next: 6 },
          { text: "Sometimes", next: 7 },
          { text: "No", next: 8 },
          { text: "Not sure", next: 9 },
        ],
      },
      {
        id: 3,
        question: "Do you feel motivated to complete your tasks?",
        options: [
          { text: "Not at all", next: 6 },
          { text: "Sometimes", next: 7 },
          { text: "Mostly yes", next: 8 },
          { text: "Completely", next: 10 },
        ],
      },
      {
        id: 4,
        question: "Do you manage your time effectively?",
        options: [
          { text: "No, often procrastinate", next: 6 },
          { text: "Sometimes", next: 7 },
          { text: "Yes, usually", next: 8 },
          { text: "Always", next: 10 },
        ],
      },
      {
        id: 5,
        question: "Are you satisfied with your current study habits?",
        options: [
          { text: "No", next: 6 },
          { text: "Somewhat", next: 7 },
          { text: "Yes", next: 11 },
          { text: "Completely", next: 10 },
        ],
      },
      {
        id: 6,
        question: "Do you often feel anxious about exams?",
        options: [
          { text: "Yes, very much", next: 12 },
          { text: "Sometimes", next: 13 },
          { text: "Rarely", next: 14 },
          { text: "No", next: 15 },
        ],
      },
      {
        id: 7,
        question: "Do you seek help when struggling academically?",
        options: [
          { text: "Never", next: 12 },
          { text: "Sometimes", next: 13 },
          { text: "Often", next: 14 },
          { text: "Always", next: 15 },
        ],
      },
      {
        id: 8,
        question: "Are you able to maintain balance between studies and relaxation?",
        options: [
          { text: "Not at all", next: 12 },
          { text: "Sometimes", next: 13 },
          { text: "Mostly yes", next: 14 },
          { text: "Always", next: 15 },
        ],
      },
      {
        id: 9,
        question: "Do you find your workload manageable?",
        options: [
          { text: "No", next: 12 },
          { text: "Sometimes", next: 13 },
          { text: "Yes", next: 14 },
          { text: "Definitely", next: 15 },
        ],
      },
      {
        id: 10,
        question: "Do you feel supported by your peers and teachers?",
        options: [
          { text: "No", next: 12 },
          { text: "Somewhat", next: 13 },
          { text: "Yes", next: 14 },
          { text: "Strongly", next: 15 },
        ],
      },
      {
        id: 11,
        question: "Are you confident in your academic skills?",
        options: [
          { text: "No", next: 12 },
          { text: "Somewhat", next: 13 },
          { text: "Yes", next: 14 },
          { text: "Very confident", next: 15 },
        ],
      },
      {
        id: 12,
        question: "Do you feel hopeless or helpless about academics?",
        options: [
          { text: "Yes", next: 101 },
          { text: "Sometimes", next: 102 },
          { text: "Rarely", next: 103 },
          { text: "No", next: 104 },
        ],
      },
      {
        id: 13,
        question: "Would talking to a counsellor help you?",
        options: [
          { text: "Definitely", next: 101 },
          { text: "Maybe", next: 102 },
          { text: "Not sure", next: 103 },
          { text: "No", next: 104 },
        ],
      },
      {
        id: 14,
        question: "Do you have strategies to manage stress?",
        options: [
          { text: "No", next: 101 },
          { text: "Some", next: 102 },
          { text: "Yes", next: 103 },
          { text: "Very effective ones", next: 104 },
        ],
      },
      {
        id: 15,
        question: "Do you believe you can improve your academic performance?",
        options: [
          { text: "No", next: 101 },
          { text: "Maybe", next: 102 },
          { text: "Yes", next: 103 },
          { text: "Definitely", next: 104 },
        ],
      },
    ],
    outcomes: {
      101: {
        title: "Severe Academic Burnout",
        description:
          "You are feeling severely burnt out, hopeless, and overwhelmed. Your academic motivation is very low.",
        feelings:
          "You might feel emotionally drained, anxious, and disconnected from your studies.",
        guidance:
          "Counsellors should provide empathetic listening, encourage breaks, and suggest professional support.",
      },
      102: {
        title: "Moderate Academic Stress",
        description:
          "You experience moderate stress but still retain some hope and motivation.",
        feelings:
          "You feel tired but optimistic enough to seek help and try stress management techniques.",
        guidance:
          "Counsellors should promote coping strategies, time management, and peer support.",
      },
      103: {
        title: "Mild Academic Pressure",
        description:
          "You are under some pressure but have effective ways to cope and maintain balance.",
        feelings:
          "You feel challenged but confident and able to manage your academics well.",
        guidance:
          "Counsellors should reinforce current positive habits and encourage continued self-care.",
      },
      104: {
        title: "Healthy Academic Balance",
        description:
          "You maintain a good balance between studies and personal wellbeing.",
        feelings: "You feel motivated, confident, and in control of your academic life.",
        guidance:
          "Counsellors should support your strengths and suggest advanced goal setting.",
      },
    },
  },

  // ---------------------------
  // You would add similarly 7 more scenarios here,
  // Each with its own questions (15) and outcomes (12+)
  // For brevity, I include 2 more short example scenarios below.

  {
    id: 2,
    title: "Attention Deficit Hyperactivity Disorder (ADHD) Challenges",
    summary:
      "Student struggles with focus, hyperactivity, and impulsiveness affecting academic performance.",
    questions: [
      {
        id: 1,
        question: "Do you find it difficult to stay focused during lectures?",
        options: [
          { text: "Always", next: 2 },
          { text: "Often", next: 3 },
          { text: "Sometimes", next: 4 },
          { text: "Rarely", next: 5 },
        ],
      },
      {
        id: 2,
        question: "Do you feel restless or fidgety during study time?",
        options: [
          { text: "Yes, constantly", next: 6 },
          { text: "Sometimes", next: 7 },
          { text: "Rarely", next: 8 },
          { text: "No", next: 9 },
        ],
      },
      // ...
      {
        id: 12,
        question: "Do you find structured schedules helpful?",
        options: [
          { text: "No", next: 201 },
          { text: "Sometimes", next: 202 },
          { text: "Mostly", next: 203 },
          { text: "Always", next: 204 },
        ],
      },
      {
        id: 13,
        question: "Are you able to ask for help when overwhelmed?",
        options: [
          { text: "Never", next: 201 },
          { text: "Sometimes", next: 202 },
          { text: "Often", next: 203 },
          { text: "Always", next: 204 },
        ],
      },
      // More questions as needed...
    ],
    outcomes: {
      201: {
        title: "Severe ADHD Impact",
        description:
          "Your ADHD symptoms significantly affect your academic focus and productivity.",
        feelings:
          "You might feel frustrated, overwhelmed, and discouraged often.",
        guidance:
          "Counsellors should recommend structured routines, breaks, and possibly medical evaluation.",
      },
      202: {
        title: "Moderate ADHD Challenges",
        description:
          "You face difficulties but can manage some symptoms with effort.",
        feelings:
          "You sometimes feel restless but can focus with support and strategies.",
        guidance:
          "Counsellors should teach organizational skills and encourage regular check-ins.",
      },
      203: {
        title: "Mild ADHD Symptoms",
        description:
          "Your symptoms cause minor disruption, but you maintain good academic progress.",
        feelings:
          "You generally feel in control with some occasional distractions.",
        guidance:
          "Counsellors should reinforce coping techniques and positive habits.",
      },
      204: {
        title: "Well-managed ADHD",
        description:
          "You effectively manage your symptoms and academic responsibilities.",
        feelings:
          "You feel confident, organized, and motivated.",
        guidance:
          "Counsellors should support your self-management and goal planning.",
      },
    },
  },

  {
    id: 3,
    title: "Trauma Impact on Academic Performance",
    summary:
      "Student has experienced trauma affecting emotional wellbeing and academic focus.",
    questions: [
      {
        id: 1,
        question: "Do you find yourself distracted or upset while studying?",
        options: [
          { text: "Often", next: 2 },
          { text: "Sometimes", next: 3 },
          { text: "Rarely", next: 4 },
          { text: "Never", next: 5 },
        ],
      },
      {
        id: 2,
        question: "Do you avoid certain subjects or tasks due to trauma?",
        options: [
          { text: "Yes", next: 6 },
          { text: "Sometimes", next: 7 },
          { text: "No", next: 8 },
          { text: "Not sure", next: 9 },
        ],
      },
      // ...
      {
        id: 12,
        question: "Do you have a trusted person to talk about your feelings?",
        options: [
          { text: "No", next: 301 },
          { text: "Sometimes", next: 302 },
          { text: "Yes", next: 303 },
          { text: "Strongly Yes", next: 304 },
        ],
      },
      {
        id: 13,
        question: "Do you use any coping strategies to manage stress?",
        options: [
          { text: "No", next: 301 },
          { text: "Some", next: 302 },
          { text: "Often", next: 303 },
          { text: "Always", next: 304 },
        ],
      },
      // More questions as needed...
    ],
    outcomes: {
      301: {
        title: "Severe Trauma Impact",
        description:
          "Your trauma severely affects your emotional health and academics.",
        feelings:
          "You may feel isolated, anxious, and unable to focus.",
        guidance:
          "Counsellors should provide trauma-informed care, referrals to therapy, and build safety.",
      },
      302: {
        title: "Moderate Trauma Impact",
        description:
          "Trauma affects you but you have some support and coping skills.",
        feelings:
          "You feel vulnerable but capable of some academic engagement.",
        guidance:
          "Counsellors should encourage support networks and gradual coping skill development.",
      },
      303: {
        title: "Mild Trauma Effects",
        description:
          "You experience some trauma-related symptoms but maintain steady academics.",
        feelings:
          "You feel mostly stable with occasional difficulties.",
        guidance:
          "Counsellors should reinforce resilience and healthy coping strategies.",
      },
      304: {
        title: "Resilience and Recovery",
        description:
          "You effectively manage trauma impact and maintain healthy functioning.",
        feelings:
          "You feel empowered, hopeful, and balanced.",
        guidance:
          "Counsellors should support ongoing growth and positive mental health.",
      },
    },
  },
];

function App() {
  const [step, setStep] = useState("selectScenario");
  const [selectedScenarioId, setSelectedScenarioId] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [outcome, setOutcome] = useState(null);

  const scenario = scenarios.find((sc) => sc.id === selectedScenarioId);

  // Start scenario
  const startScenario = (id) => {
    setSelectedScenarioId(id);
    setStep("showSummary");
  };

  // Start questions after summary
  const startQuestions = () => {
    if (!scenario) return;
    setCurrentQuestionId(1);
    setAnswers([]);
    setOutcome(null);
    setStep("questions");
  };

  // Handle answer selection
  const handleAnswer = (nextId, selectedOption) => {
    setAnswers((prev) => [...prev, { questionId: currentQuestionId, answer: selectedOption }]);
    // If nextId is outcome (>=100), show outcome
    if (nextId >= 100) {
      setOutcome(scenario.outcomes[nextId]);
      setStep("outcome");
      setCurrentQuestionId(null);
    } else {
      setCurrentQuestionId(nextId);
    }
  };

  // Restart or go back to scenario selection
  const restart = () => {
    setStep("selectScenario");
    setSelectedScenarioId(null);
    setCurrentQuestionId(null);
    setAnswers([]);
    setOutcome(null);
  };

  // Get current question object
  const currentQuestion =
    scenario && scenario.questions.find((q) => q.id === currentQuestionId);

  return (
    <div className="App">
      <header>
        <h1>Comparative Study Of Guidance & Counselling Services On Academics</h1>
      </header>

      {step === "selectScenario" && (
        <div className="scenario-selection">
          <h2>Select a Scenario to Begin</h2>
          <ul>
            {scenarios.map((sc) => (
              <li key={sc.id}>
                <button onClick={() => startScenario(sc.id)}>{sc.title}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {step === "showSummary" && scenario && (
        <div className="scenario-summary">
          <h2>{scenario.title}</h2>
          <p>{scenario.summary}</p>
          <button onClick={startQuestions}>Start Questions</button>
          <button onClick={restart} className="back-btn">Back to Scenarios</button>
        </div>
      )}

      {step === "questions" && currentQuestion && (
        <div className="questions">
          <h3>Question {currentQuestion.id}:</h3>
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.next, opt.text)}
              >
                {opt.text}
              </button>
            ))}
          </div>
          <button onClick={restart} className="back-btn">Back to Scenarios</button>
        </div>
      )}

      {step === "outcome" && outcome && (
        <div className="outcome">
          <h2>Outcome: {outcome.title}</h2>
          <p><strong>Description:</strong> {outcome.description}</p>
          <p><strong>Student's Feelings:</strong> {outcome.feelings}</p>
          <p><strong>Counselling Guidance:</strong> {outcome.guidance}</p>
          <button onClick={restart}>Back to Scenarios</button>
        </div>
      )}

      <footer>
        <p>© 2025 Guidance & Counselling Study</p>
      </footer>
    </div>
  );
}

export default App;
