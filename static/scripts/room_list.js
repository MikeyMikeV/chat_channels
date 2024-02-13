console.log('Sanity check of JS.')

let roomInput = document.getElementById('roomInput')
let roomConnect = document.getElementById('roomConnect')
let roomSelect = document.getElementById("roomSelect")
roomInput.focus();

// submit if the user presses the enter key
roomInput.onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter key
        roomConnect.click();
    }
};

roomConnect.onclick = function() {
    let roomName = roomInput.value;
    window.location.pathname = roomName + "/";
}

roomSelect.onchange = function() {
    let roomName = roomSelect.value.split(" ")[0];
    window.location.pathname = roomName + "/";
}