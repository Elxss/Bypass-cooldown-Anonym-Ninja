// ==UserScript==
// @name         Anonym Ninja Bypasser
// @namespace    https://github.com/Elxss
// @version      0.1
// @description  Just a bypasser for Anonym Ninja
// @author       Elxss
// @match        https://anonym.ninja/*
// @icon         https://avatars.githubusercontent.com/u/121466211?s=400&u=e6018d225103ed4be48117d0341d74a212d0b607&v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // check for the download button
    var downloadButton = document.getElementById("downloadfile");
    console.log(" [ Anonym.Ninja Bypass ] Made by Elxss , you can find project like this one here : https://github.com/Elxss");
    if (downloadButton) {
        console.log(" [ Anonym.Ninja Bypass ] Download Button found !");

        // get download link and text
        const script = Array.from(document.getElementsByTagName('script')).find(s => s.textContent.includes("DOWN_URL"));
        const DOWN_URL = script.textContent.match(/const DOWN_URL\s+=\s+"([^"]+)"/)[1];
        const DOWN_TXT = script.textContent.match(/const DOWN_TXT\s+=\s+"([^"]+)"/)[1];
        console.log(" [ Anonym.Ninja Bypass ] url: "+DOWN_URL);
        console.log(" [ Anonym.Ninja Bypass ] Have a good time !");

        var newButton = document.createElement('a');
        newButton.href = DOWN_URL;
        newButton.id = "DownloadForce";
        newButton.className = "downloadfile download_btn btn w-100 btn-green";
        newButton.textContent = DOWN_TXT;
        downloadButton.parentNode.replaceChild(newButton, downloadButton);
    }
})();
