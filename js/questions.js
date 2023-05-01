const questions = [
  /* Category 1 Questions DONE */
  {
    prompt: 'Why is delegation important?',
    options: ['Because I am lazy', 'To be a more effective manager', 'Getting others to work for you is more fun', 'No idea'],
    correctAnswer: 'To be a more effective manager',
    cashPrize: 10
  },
  {
    prompt: 'What is important to convey when delegating a task to someone?',
    options: ['The why', 'That you are the boss', 'Incentives', 'That you will double check the work'],
    correctAnswer: 'The why',
    cashPrize: 50
  },
  {
    prompt: 'In the 2x2 grid for organizing, which of the following tasks need to be done by you?',
    options: ['High importance, high urgency', 'Low importance, high urgency', 'High importance, low urgency', 'Low importance, low urgency'],
    correctAnswer: 'High importance, high urgency',
    cashPrize: 100
  },
  {
    prompt: 'What is a reason why people may not delegate?',
    options: ['Lack experience', 'On a power trip', 'Trust to complete the task', 'I dunno'],
    correctAnswer: 'Trust to complete the task',
    cashPrize: 500
  },
  {
    prompt: 'Chris, when your old manager delegated tasks to you, what did you fail to assess?',
    options: ['His reasons why', 'The deadlines', 'Why he was mean to me', 'My promotions'],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  },
  /* Category 2 Questions DONE */
  {
    prompt: 'Is feedback bad?',
    options: ['Yes', 'YES!!', 'OH GOD PLEASE DO NOT MAKE ME GET FEEDBACK', 'Nah, it is helpful and can help develop your career'],
    correctAnswer: 'Nah, it is helpful and can help develop your career',
    cashPrize: 10
  },
  {
    prompt: 'How can you have empathy while giving feedback?',
    options: ['Watch your tone, body language, and understand the potential dread they have', 'Be upfront about your own feelings', 'Play calming music', 'Empathy is weakness - never give in'],
    correctAnswer: 'Watch your tone, body language, and understand the potential dread they have',
    cashPrize: 50
  },
  {
    prompt: 'As a manager what can you do to help your employees grow more regularly?',
    options: ['Put them through formal training seminars', 'Give feedback continuously', 'They will figure it out', 'Watch YouTube to be a better employee'],
    correctAnswer: 'Give feedback continuously',
    cashPrize: 100
  },
  {
    prompt: 'What is an appropriate question to ask while getting feedback?',
    options: ['Can you keep the bad stuff out of my annual review?', 'Have you asked your boss what they think about me?', 'Can we do this when you have better things to say about me?', 'Can I take notes?'],
    correctAnswer: 'Can I take notes?',
    cashPrize: 500
  },
  {
    prompt: 'Feedback can take time and effort. What is a quality feedback should have?',
    options: ['To be negative', 'To be specific', 'To take as long as humanly possible', 'To feel forced'],
    correctAnswer: 'To be specific',
    cashPrize: 1000
  },
  /* Category 3 Questions DONE */
  {
    prompt: 'What crisis prompted Professor Chugh to make this lesson?',
    options: ['She ran out of coffee', 'Chris the menace joined her class', 'Covid-19', 'The first bullet was not enough, she needs more coffee'],
    correctAnswer: 'Covid-19',
    cashPrize: 10
  },
  {
    prompt: 'Why is managing crises so important as managers?',
    options: ['It amplifies all aspects of being a manager', 'Because your employees will quit', 'Your therapist deals with you every day - that is a crisis already', 'You have to appear smart and prepared'],
    correctAnswer: 'It amplifies all aspects of being a manager',
    cashPrize: 50
  },
  {
    prompt: 'What does it mean to be large in a crisis?',
    options: ['Go through another growth spurt', 'To be seen often and found easily', 'To be the cause of the crisis', 'To be so large as to block people from the crisis'],
    correctAnswer: 'To be seen often and found easily',
    cashPrize: 100
  },
  {
    prompt: 'Is it okay to show emotions during a crisis?',
    options: ['Yes you need to panic too', 'Yes be open, but also know employees will still look to you for answers', 'No. Emotions are bad.', 'Hide your pain so no one else panics'],
    correctAnswer: 'Yes be open, but also know employees will still look to you for answers',
    cashPrize: 500
  },
  {
    prompt: 'What does CALM represent?',
    options: ['Cannot, Apathetic, Lethargic, Mediocre', 'Casing, Always, Loving, Math', 'Capoeira, Aikido, Lua, MMA', 'Compassionate, Authentic, Large, Mostly Transparent'],
    correctAnswer: 'Compassionate, Authentic, Large, Mostly Transparent',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'The Terminal or command line is an example of a?',
    options: ['Interconnected Network', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet'],
    correctAnswer: 'Read-Eval-Print-Loop',
    cashPrize: 10
  },
  {
    prompt: 'What are tailwinds in regards to this lesson?',
    options: ['Something to do with weather?', 'A general trend that can benefit someone in their career', 'When a dog wags their tail fast enough to cause winds', 'When you eat a burrito with a lot of beans'],
    correctAnswer: 'A general trend that can benefit someone in their career',
    cashPrize: 50
  },
  {
    prompt: 'How can we get better at seeing biases?',
    options: ['Use TikTok to educate yourself', 'Practice watching and talk to others', 'Use your gut', 'Just do nothing, someone else will cover it'],
    correctAnswer: 'Practice watching and talk to others',
    cashPrize: 100
  },
  {
    prompt: 'What are some examples of tools to challenge someone?',
    options: ['Question, huh, and emote', 'Defend, counter attack, humor', 'Strike first, Cobra Kai', 'Do nothing'],
    correctAnswer: 'Question, huh, and emote',
    cashPrize: 500
  },
  {
    prompt: 'What is the motto of this lesson to repeat to yourself?',
    options: ['To be the very best that no one ever was', 'Inclusion is too tough so stop trying', 'Do not aim to be good, try to be good-ish so you still learn', 'Being defensive is the only way to protect yourself'],
    correctAnswer: 'Do not aim to be good, try to be good-ish so you still learn',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What is the right MBTI type?',
    options: ['ENFP', 'INTP', 'ESFJ', 'None, there is no right type'],
    correctAnswer: 'None, there is no right type',
    cashPrize: 10
  },
  {
    prompt: 'Is it okay if someone approaches a task different than you?',
    options: ['No', 'Yes since we are all different people', 'Yes but only if I get to micromanage them', 'No, there is one right way and I know that right way'],
    correctAnswer: 'Yes since we are all different people',
    cashPrize: 50
  },
  {
    prompt: 'Why do we create norms?',
    options: ['Not sure, all my management classes do it', 'To establish a shared language and understanding', 'To weed out the people who do not fit in', 'To set ground rules'],
    correctAnswer: 'To establish a shared language and understanding',
    cashPrize: 100
  },
  {
    prompt: 'Are you locked in with your MBTI type?',
    options: ['No, we all use all the skills - it just is our best self right now but it can change', 'Yes, I am stuck as an ENFP forever', 'No, with a lot of luck I can earn a new letter for my collection', 'Not sure'],
    correctAnswer: 'No, we all use all the skills - it just is our best self right now but it can change',
    cashPrize: 500
  },
  {
    prompt: 'How can you cultivate self awareness?',
    options: ['Who needs that?', 'Have someone else give you feedback', 'Take time to check in with yourself and ask yourself questions', 'Hope and pray you get that ability'],
    correctAnswer: 'Take time to check in with yourself and ask yourself questions',
    cashPrize: 1000
  }
];

export default questions;
