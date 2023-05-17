// userName
let userName = prompt('Enter your name:');
console.log(userName);

// Gender
let gender = prompt('Enter your gender: (male or female)');
console.log(gender);
let gender_state = false;
if (gender === 'male') {
    gender_state = true;
} else if (gender === 'female') {
    gender_state = true;
} else {
    gender_state = false;
    alert('invalid gender');
}

// Age
let age = parseInt(prompt('Enter your age:'));
console.log('age = ' + age);
let age_state = false;
if (age <= 0) {
    age_state = false;
    alert('Invalid age');
} else {
    age_state = true;
}

// Welcome Message
let confirm_message = confirm('Do you want to skip the welcoming message?');
if (gender_state === false) {
    if (confirm_message === false) {
        alert('Hello ' + userName + ' !');
    }
} else if (gender_state === true) {
    if (confirm_message === false) {
        if (gender === 'male') {
            alert('Hello Mr. ' + userName + '!');
        } else if (gender === 'female') {
            alert('Hello Ms. ' + userName + '!');
        }
    }
}

let q1 = prompt('Do you love reading?');
let q1_ans = false;
if (q1 === 'yes') {
    alert('Wow, you are awesome!');
    q1_ans = true;
} else if (q1 === 'no') {
    alert('I recommend you to start reading books, it\s good for you brain.');
    q1_ans = false;
} else {
    q1_ans = 'invalid';
    alert('Invalid answer.');
}

let q2 = prompt('Do you finish your work in time?');
let q2_ans = false;
if (q2 === 'yes') {
    alert('Great Job, you are awesome!');
    q2_ans = true;
} else if (q2 === 'no') {
    alert('Adding time management to your life has a huge impact on you.');
    q2_ans = false;
} else {
    q2_ans = 'invalid';
    alert('Invalid answer.');
}

let q3 = prompt('Do you drink water every morning?');
let q3_ans = false;
if (q3 === 'yes') {
    alert('Great Job, you are on the way to a healthy life!');
    q3_ans = true;
} else if (q3 === 'no') {
    alert('Thats not good, you need to stay hydrated!');
    q3_ans = false;
} else {
    q3_ans = 'invalid';
    alert('Invalid answer.');
}
let answers = [];
answers.push(q1_ans, q2_ans, q3_ans);
printAnswers(answers);

function printAnswers(ans_arr) {
    console.log('The user answers on the extra questions');
    for (let i = 0; i < ans_arr.length; i++) {
        console.log(ans_arr[i]);
    }
}

function rewardUser(ans_arr) {
    let counter = 0
    for (let j = 0; j < ans_arr.length; j++) {
        if (ans_arr[j] === true) {
            counter++;
        }
    }

    switch (counter) {
        case 1: console.log('You are on the right path, keep pushing forward!');
            break
        case 2: console.log('Great Job, Keep the good work!');
            break;
        case 3: console.log('You are awesome!, you should give your self a break like watching a movie for example...');
            break;
        default: console.log('😕😕😕');
    }

    thankYouMessage();
}

function thankYouMessage() {
    alert('Thank you for taking the time to answer the questions. Hope you enjoyed your time with us!');
}