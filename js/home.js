function filter() {
    var value, songInfo, item, i;

    value = document.getElementById("value").value.toLowerCase();
    item = document.getElementsByClassName("image-container");

    for (i = 0; i < item.length; i++) {
        songInfo = item[i].getElementsByClassName("song-info")[0];
        if (songInfo.innerHTML.toLowerCase().indexOf(value) > -1) {
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }
    }
}