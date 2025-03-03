document.getElementById("theme-btn").addEventListener("click", function (event) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(1);
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
});


document.getElementById("discover").addEventListener("click", function (event) {
    window.location.href = "blogs.html";
});


const today = new Date();
const day = { weekday: "short" };
const date = { month: "short", day: "2-digit", year: "numeric" };
const formattedDate = today.toLocaleDateString("en-US", date).replace(",", "");
const formattedDay = today.toLocaleDateString("en-US", day);
document.getElementById("current-day").innerText = formattedDay;
document.getElementById("current-date").innerText = formattedDate;


document.querySelectorAll(".task-btn").forEach((button) => {
    button.addEventListener("click", function () {
        const pendingTask = document.getElementById("pending-task");
        const pendingTaskValue = parseInt(pendingTask.innerText) - 1;
        const completedTasks = document.getElementById("completed-tasks");
        const completedTasksValue = parseInt(completedTasks.innerHTML) + 1;
        alert("Board updated successfully.");
        pendingTask.innerHTML = pendingTaskValue;
        completedTasks.innerHTML = completedTasksValue;
        this.disabled = true;
        if (pendingTaskValue === 0) {
            alert("Congratulations! You have completed all the tasks.")
        }

        const container = this.closest("div").parentNode;
        const title = container.querySelector("h1").innerText;
        const time = formatTime(today);
        const newDiv = `
        <div class="bg-[#F4F7FF] p-3 rounded-lg mb-3">
            <p class="opacity-70">
              You have Complete The ${title} at ${time}
            </p>
        </div>
        `;
        const div = document.getElementById("history");
        div.innerHTML += newDiv;
    });
});


document.getElementById("clear-history").addEventListener("click", function (event) {
    document.getElementById("history").innerHTML = "";
});