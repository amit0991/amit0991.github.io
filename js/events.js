var events = {
    "Illuminati": {
        "Mini Hackthon": {
            "image": "./event_assets/depositphotos_321405086-stock-illustration-hackathon-signs-round-design-template.jpg"
            


        },
        "Code War": {
            "image": "./event_assets/cexpert.webp"

        },
        "Bring The Beauty": {
            "image": "./event_assets/ui.jpg"

        },
        "Design The Web": {
            "image": "./event_assets/web.jpg"
        }
    },

    "Equinox": {
        "Bug War": {
            "image": "./event_assets/bug.jpg",
            "rule": "/event_assets/DOC-20230429-WA0004._page-0006.jpg"

        },

        "e-Treasure Hunt": {
            "image": "./event_assets/treasure.jpg",
            "rule":"/event_assets/DOC-20230429-WA0004._page-0008.jpg"


        },
        "C Expert": {
            "image": "./event_assets/cExpert.png"


        },
        "Blind Coding": {
            "image": "./event_assets/blind.jpg"
        }

    },
    "Synergy": {
        "Junk Wars": {
            "image": "./event_assets/junk.jpg"


        },
        "Drone Race": {

            "image": "./event_assets/drone-racing-league.webp"


        },
        "Futuristic Techno Plane Game": {
            "image": "./event_assets/technoplane.avif"



        },
        "Drag And Place": {
            "image": "./event_assets/drag.webp"

        }
    },
    "Aeronautics": {
        "Chain Reaction": {
            "image": "./event_assets/chain.png"
        },
        "Glider Plane": {
            "image": "./event_assets/glider.jpg"
        },
        "The Micrones": {
            "image": "./event_assets/micrones.jpg"
        },
        "CAD Tricks": {
            "image": "./event_assets/cad.jpg"
        },
        "Bridge Building": {
            "image": "./event_assets/bridge.jpg"
        }
    },

    "Robotrax": {
        "Line Follower Robot": {
            "image": "./event_assets/lfr.jpg"
        },
        "Robo Race": {
            "image": "./event_assets/robo-race.jpg"
        },
        "Robo War": {
            "image": "./event_assets/robo_war.jpg"
        },
        "Robo Soccer": {
            "image": "./event_assets/robo-soccer.jpg"
        },
        "Maze Solver": {
            "image": "./event_assets/mazesolver.jpg"
        }
    }

    ,
    "Literary": {
        "Shabd-E-Shayrana": {
            "image": "./event_assets/shayar.png"
        },
        "Be the Sherlock Holmes": {
            "image": "./event_assets/sherlock.webp"
        },
        "Jam:Just a Minute": {
            "image": "./event_assets/jam.jpeg"
        },
        "Who Am I ?": {
            "image": "./event_assets/who.jpg"
        },
        "Dumb Charades On Book": {
            "image": "./event_assets/dumb-charades.jpg"
        }




    },
    "Pharmquimica": {
        "Aavishkarak": {
            "image": "./event_assets/avishkara.jpg"
        },
        "Pharma-Desk": {
            "image": "./event_assets/pharma.jpg"
        },
        "Pharma Bins And Recycling": {
            "image": "./event_assets/bins.jpg"
        },
        "Pharma-Minds": {
            "image": "./event_assets/pharma mind.png"
        },
        "Mandala Art Competition": {
            "image": "./event_assets/mandala.webp"
        }
    },

    "Management": {
        "Ad Mad": {
            "image": "./event_assets/advertise.jpg"
        },
        "Business Quiz": {
            "image": "./event_assets/business quiz.jpg"
        },
        "Business Plan": {
            "image": "./event_assets/business-plan-basics.jpg"
        }

    },
    "Design": {
        "Doodle Art": {
            "image": "./event_assets/doodle.jpg"
        },
        "Technical Painting": {
            "image": "./event_assets/technical paint.jpg"
        },
        "Quill The Techvyom": {
            "image": "https://firebasestorage.googleapis.com/v0/b/techvyomproject-166eb.appspot.com/o/how-to-draw-naruto-featured-image-1200.webp?alt=media&token=7c024d3c-c8fa-4197-962b-8c41cf02b18a"
        },
        "Digital Poster Making": {
            "image": "./event_assets/digital poster.png"
        }
    },

    "Media Relation": {
        "Screen Masters": {
            "image": "./event_assets/screen masters.png"
        },
        "Pursue The Market": {
            "image": "./event_assets/marketing ideas.png"
        },
        "Battle Of Memes": {
            "image": "./event_assets/memes.jpg"
        }
    },


    "LAN Games": {
        "Mini-Militia": {
            "image": "./event_assets/mini militia.png"
        },
        "FIFA": {
            "image": "./event_assets/Atalayar_FIFA 21.Jpg"
        }

    },

    "Open Events": {
        "Tech Gallery": {
            "image": "./event_assets/tech gallery.jpg"
        },
        "PLC Designing": {
            "image": "./event_assets/plc design.jpg"
        },
        "Technical Quiz": {
            "image": "./event_assets/technical.jpg"
        },
        "Round The Cube": {
            "image": "./event_assets/cube.webp"
        }
    }

}
var equinox_json = events["Equinox"];
var illuminati_json = events["Illuminati"];
var synergy_json = events["Synergy"];
var aero_json = events["Aeronautics"];
var robotrax_json = events["Robotrax"];
var literary_json = events["Literary"];
var pharmquimica_json = events["Pharmquimica"];
var management_json = events["Management"];
var design_json = events["Design"];
var mediaRelation_json = events["Media Relation"];
var lanGames_json = events["LAN Games"];
var openEvents_json = events["Open Events"];


var equinox_main = document.getElementById("equinox-main");



// create boxex for equinox club

/* <div class="event-main">
<div id="event-name" value="fifa football">FIFA</div>
</div> */


/* <div id="equinox-main">
        <div id="equinox">Equinox Club</div>
        <div id="equinox-line"></div>
    </div> */





// <div class="event-main"
//     style="background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, black 99%),url('/event_assets/bug.jpg'); background-size: cover;background-repeat:no-repeat;">
//     <div id="event-name" value="Bug War">Bug War</div>
// </div>
function generateBox(club, name, main_box,event_name) {
    equinox_box = document.getElementById(main_box);




    const evMain = document.createElement("div");
    const eName = document.createElement("div");
    const para = document.createTextNode(name);
    const imag = club[name]["image"];



    evMain.setAttribute("class", "event-main");


    evMain.setAttribute("value",event_name);

    evMain.setAttribute("style", "background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, black 99%),url(\'" + imag + "\'); background-size: cover;background-repeat:no-repeat;");
    eName.setAttribute("id", "event-name");
    eName.setAttribute("value", name);


    equinox_box.appendChild(evMain);
    evMain.appendChild(eName);
    eName.appendChild(para);


}

//equinox club
for (key in equinox_json) {


    generateBox(equinox_json, key, "equinox-box",key);
}

//illuminati
for (key in illuminati_json) {


    generateBox(illuminati_json, key, "illuminati-box",key);
}



//synergy
for (key in synergy_json) {


    generateBox(synergy_json, key, "synergy-box",key);
}

//aeronautics
for (key in aero_json) {


    generateBox(aero_json, key, "aero-box",key);
}



//robotrax
for (key in robotrax_json) {


    generateBox(robotrax_json, key, "robotrax-box",key);
}

//literary
for (key in literary_json) {


    generateBox(literary_json, key, "literary-box",key);
}



//pharmquimica
for (key in pharmquimica_json) {


    generateBox(pharmquimica_json, key, "pharmquimica-box",key);
}




//management
for (key in management_json) {


    generateBox(management_json, key, "management-box",key);
}



//design
for (key in design_json) {


    generateBox(design_json, key, "design-box",key);
}



//media relation
for (key in mediaRelation_json) {


    generateBox(mediaRelation_json, key, "media-box",key);
}


// LAN Games
for (key in lanGames_json) {


    generateBox(lanGames_json, key, "lan-box",key);
}


// open events
for (key in openEvents_json) {


    generateBox(openEvents_json, key, "open-box",key);
}






// const pop_box = document.getElementById("popup-box");
// var close2 = document.getElementById("close");

// function close1() {
//     console.log("close called");
//     var imgNode=document.getElementById("pop-img");
//     if (imgNode){
//         imgNode.remove();
//     }
    
//     pop_box.style.display = "none";
// }
// close2.addEventListener("click", close1);




// function popup(club1,event) {
//     for(key in events){
//         if (club1.includes(key.toLowerCase())){
//             var data=events[key][event];
//             window.open(data["rule"]);
//             console.log(data);

//         }
        
//     }
//     pop_box.style.display = "block";
//     console.log("pop up function clicked!")

//     const imgTag = document.createElement("img");
//      imgTag.src = data["rule"];
//     imgTag.setAttribute("id", "pop-img");
//     pop_box.appendChild(imgTag);


// }




// const event_main= document.querySelectorAll('.event-main');
// event_main.forEach(event => {
//     event.addEventListener('click', function handleClick(event) {
//       console.log('event clicked', event);
//       console.log(event.srcElement.parentElement.attributes[0].value);
//         console.log(event.target.attributes[1].value);
//         var eventName=event.target.attributes[1].value;
//         var club1=event.srcElement.parentElement.attributes[0].value;
//         popup(club1,eventName);
//     //   event.setAttribute('style', 'background-color: yellow;');
//     });
//   });











