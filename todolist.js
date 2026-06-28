function addText() {
  let text = document.getElementById("inputbox").value;

  if (text) {
    let li = document.createElement("li");
    let taskText = document.createElement("span");
    taskText.innerText = text + " ";
    li.appendChild(taskText);

    // simple rule
    // 1. create btn variable with get elementid
    // 2. add inner text
    // 3. make onlick function

    let btn = document.createElement("button");
    btn.innerText = "delete";
    btn.onclick = function () {
      li.remove();
    };
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "completed";
    li.appendChild(completeBtn);

    completeBtn.onclick = function () {
      // cutting line onclick function

      if (taskText.style.textDecoration === "line-through") {
        //If completed → remove line → show Complete
        taskText.style.textDecoration = "none";
        completeBtn.innerText = "complete";
      } else {
        taskText.style.textDecoration = "line-through"; //Else → add line → show Undo
        completeBtn.innerText = "undo";
      }
    };

    li.appendChild(document.createTextNode("    ")); // adding space bw butons
    li.appendChild(completeBtn);

    document.getElementById("inputbox").value = ""; // input filed empty after adding value
    document.getElementById("inputbox").focus(); //cursor back to input field after adding value
  }
}
