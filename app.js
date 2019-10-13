const BASE = "http://192.168.1.81"

const sonarrURL = `${BASE}:8989`;
const radarrURL = `${BASE}:7878`; 
const plexURL = `${BASE}:32400/web`;
const hassURL = `${BASE}:8123/`;

const sonarBtn = document.getElementById('sonarrBtn');
const radarrBtn = document.getElementById('radarrBtn');
const plexBtn = document.getElementById('plexBtn');
const hassBtn = document.getElementById('hassBtn');

sonarBtn.onclick = () => {
    window.location = sonarrURL;
}
radarrBtn.onclick = () => {
    window.location = radarrURL;
}
plexBtn.onclick = () => {
    window.location = plexURL;
}
hassBtn.onclick = () => {
    windows.location = hassURL;
}