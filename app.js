
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel"
const emblemClue3 = 17;


// ==============================
// ========= STEP 1 =============
// ==============================

let partyLocation = "";

if (emblemClue1 === "Eagle") {
    partyLocation = "Forum";
}
else if (emblemClue1 === "Lion") {
    partyLocation = "Colosseum";
}
else {
    partyLocation = "Villa";
}

console.log(partyLocation);

// ==============================
// ========= STEP 2 =============
// ==============================

if (emblemClue2 === "Laurel" && partyLocation === "Forum") {
    partyLocation += " of Augustus";
}
else if (emblemClue2 === "Grapes" || partyLocation === "Villa") {
    partyLocation += " of Pompey";
}

console.log(partyLocation);

// ==============================
// ========= STEP 3 =============
// ==============================

switch (emblemClue3) {
    case 7:
        partyLocation += " North";
        break;
    case 3:
        partyLocation += " South";
        break;
    case 9: 
        partyLocation += " East";
        break;
    case 4:
        partyLocation += " West";
    default:
        console.log('Please try again!');
}

console.log(partyLocation);
// ==============================
// ======== QUESTION ============
// ==============================

// Because the incorrect assignment can be difficult for debugging purposes if 
// there's multiple lines of code
