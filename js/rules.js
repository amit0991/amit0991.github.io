//selector buttons
const common = document.getElementById("c1");
const participant = document.getElementById("c2");

//rules container
const common_r = document.getElementById("common-rules");
const participant_r = document.getElementById("rules-for-participants");


common.addEventListener("click", common1);
participant.addEventListener("click", participant1);


function common1() {
    console.log("Common Called!");

    if(common_r.style.display=="none"){
        
        common_r.style.display="block";

    }

    participant_r.style.display="none";

    
}

function participant1() {
    console.log("Participant Called!");
    
   
        
    participant_r.style.display="block";

    
    common_r.style.display="none";

    
}