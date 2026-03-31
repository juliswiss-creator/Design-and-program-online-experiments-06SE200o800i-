/*  we will do canvas drawing using jsPsych
 instruction (right arrow key) -> fixation (1s/2s/3s) -> bunny (until response by pressing spacebar) -> feedback (thumbs up for 1s)
*/

const jsPsych = initJsPsych();
const timeline = [];

// instruction 
const instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        <h2 id='instruction'>Please press the <strong>space bar</strong> as soon as the stimulus appears.</h2>
        <p>Press right arrow key to start!</p>
    `,
    choices: ['ArrowRight']
};
timeline.push(instruction);

// fixation 
const randomDuration = [1000, 2000, 3000];
const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<div style='font-size:40px;'>+</div>",
    choices: "NO_KEYS",
    trial_duration: randomDuration[Math.floor(Math.random() * randomDuration.length)]
};
timeline.push(fixation);

// bunny drawing function
const drawBunnyfn = function(canvas) {
    const context = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    // COLORS
    const fur = "#F2F2F2";
    const stroke = "#B0B0B0";
    const blush = "#F8C8DC";
    const nose = "#E89CA9";

    // EARS
    context.beginPath();
    context.ellipse(x - 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
    context.fillStyle = fur;
    context.fill();
    context.strokeStyle = stroke;
    context.stroke();

    context.beginPath();
    context.ellipse(x + 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
    context.fillStyle = fur;
    context.fill();
    context.strokeStyle = stroke;
    context.stroke();

    // HEAD
    context.beginPath();
    context.arc(x, y, 40, 0, 2 * Math.PI);
    context.fillStyle = fur;
    context.fill();
    context.strokeStyle = stroke;
    context.stroke();

    // EYES
    context.beginPath();
    context.arc(x - 20, y - 10, 5, 0, 2 * Math.PI);
    context.arc(x + 20, y - 10, 5, 0, 2 * Math.PI);
    context.fillStyle = "#444";
    context.fill();

    // BLUSH
    context.beginPath();
    context.arc(x - 30, y + 10, 7, 0, 2 * Math.PI);
    context.arc(x + 30, y + 10, 7, 0, 2 * Math.PI);
    context.fillStyle = blush;
    context.fill();

    // NOSE
    context.beginPath();
    context.moveTo(x - 5, y + 10);
    context.lineTo(x + 5, y + 10);
    context.lineTo(x, y + 18);
    context.closePath();
    context.fillStyle = nose;
    context.fill();
};



// feedback
const end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h2>👍</h2>",
    choices: "NO_KEYS",
    trial_duration: 1000
};
timeline.push(end);

// bunny trial after fixation
const bunny_trial = {
    type: jsPsychCanvasKeyboardResponse,
    stimulus: drawBunnyfn,
    canvas_size: [400, 400],
    choices: [' ']
};
timeline.push(bunny_trial);

// run timeline at the end
jsPsych.run(timeline);