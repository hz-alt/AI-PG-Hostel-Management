let studentCount = 0;
let occupied = 8;
let available = 12;

// Live Date & Time
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML =
        "📅 " + now.toLocaleDateString() + " | 🕒 " + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Add Student
function addStudent() {

    const name = document.getElementById("studentName").value.trim();
    const room = document.getElementById("roomSelect").value;

    if(name==""){
        alert("Please enter student name");
        return;
    }

    const feeStatus = Math.random() > 0.5 ? "Paid ✅" : "Pending ❌";

    const li = document.createElement("li");

    li.innerHTML=`
    <strong>${name}</strong><br>
    🛏 Room : ${room}<br>
    💰 ${feeStatus}
    `;

    document.getElementById("studentList").appendChild(li);

    studentCount++;

    document.getElementById("totalStudents").innerText = studentCount;

    occupied++;
    available--;

    if(available<0){
        available=0;
    }

    document.getElementById("occupiedRooms").innerText=occupied;
    document.getElementById("availableRooms").innerText=available;

    updateProgress();

    document.getElementById("studentName").value="";
}

// AI Suggestion

function aiSuggest(){

const suggestions=[

{
room:"101",
reason:"Less Occupancy, Near Washroom"
},

{
room:"102",
reason:"Best Ventilation & AC"
},

{
room:"103",
reason:"Peaceful Environment"
},

{
room:"104",
reason:"Near Exit & Easy Access"
}

];

const random=suggestions[Math.floor(Math.random()*suggestions.length)];

document.getElementById("aiResult").innerHTML=`

<h3>🤖 AI Recommendation</h3>

<p><b>Best Room :</b> ${random.room}</p>

<p>${random.reason}</p>

<p style="color:green;">✔ Recommended by AI</p>

`;

}

// Search Student

function searchStudent(){

const input=document.getElementById("searchInput").value.toLowerCase();

const items=document.querySelectorAll("#studentList li");

items.forEach(item=>{

item.style.display=item.innerText.toLowerCase().includes(input)?"block":"none";

});

}

// Dark Mode

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

// Progress Bar

function updateProgress(){

const total=20;

const percent=(occupied/total)*100;

document.getElementById("progressFill").style.width=percent+"%";

document.getElementById("occupancyText").innerHTML=Math.round(percent)+"% Occupied";

}

updateProgress();