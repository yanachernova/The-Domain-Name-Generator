/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let divYana = document.querySelector("#yana");
  for (let i = 0; i < pronoun.length; i++) {
    //console.log(pronoun[i]);
    for (let j = 0; j < adj.length; j++) {
      //console.log(adj[j]);
      for (let k = 0; k < noun.length; k++) {
        //console.log(noun[k]);
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        divYana.append(pronoun[i] + adj[j] + noun[k] + ".com ");
      }
    }
  }
};
