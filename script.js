let students = [];

function addStudent() {

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const interests = document.getElementById("interests").value.trim();

    if (!name || !roll || !skills || !interests) {
        alert("Please fill all the fields.");
        return;
    }

    students.push({
        name: name,
        roll: roll,
        skills: skills,
        interests: interests
    });

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("interests").value = "";
}

function displayStudents() {

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {

        list.innerHTML += `
            <div class="student">
                <strong>${index + 1}. ${student.name}</strong><br>
                Roll No: ${student.roll}<br>
                Skills: ${student.skills}<br>
                Interests: ${student.interests}
            </div>
        `;
    });
}

function generateTeams() {

    const teamSize = parseInt(document.getElementById("teamSize").value);

    if (!teamSize || teamSize <= 0) {
        alert("Please enter a valid team size.");
        return;
    }

    if (students.length < teamSize) {
        alert("Not enough students to form a team.");
        return;
    }

    const teamsContainer = document.getElementById("teams");
    teamsContainer.innerHTML = "";

    let teamNumber = 1;

    for (let i = 0; i < students.length; i += teamSize) {

        const team = students.slice(i, i + teamSize);

        teamsContainer.innerHTML += `
            <div class="team">
                <h3>Team ${teamNumber}</h3>
                ${team.map(student => `
                    <p>
                        <strong>${student.name}</strong>
                        - ${student.roll}
                    </p>
                `).join("")}
            </div>
        `;

        teamNumber++;
    }
}
