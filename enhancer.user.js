// ==UserScript==
// @name         Wayfarer Enhancer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  enhancer
// @author       Ms300
// @match        https://wayfarer.nianticlabs.com/review
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     UIEnhance();
     function UIEnhance(){
         var map_star = document.querySelector("#map-card .five-stars");
         var map_header = document.querySelector("#map-card .card-header__top");
         map_header.appendChild(map_star)


         document.getElementById("duplicates-card").id = "map-card-tmp";
         document.getElementById("map-card").id = "duplicates-card";
         document.getElementById("map-card-tmp").id = "map-card";

         document.getElementById("supporting-card").id = "three-card-container-tmp";
         document.getElementById("three-card-container").id = "supporting-card";
         document.getElementById("three-card-container-tmp").id = "three-card-container";

     }
    
})();