"use strict";

// GLOBAL VARIABLES
let template_bartender = document.querySelector("#bartender_template").content;
let template_beerType = document.querySelector("#beertypes_template").content;
let template_orders = document.querySelector("#order_template").content;
let template_que = document.querySelector("#que_template").content;
let template_storage = document.querySelector("#storage_template").content;
let data;

// WHEN THE SITE LOADS
document.addEventListener("DOMContentLoaded",loadScript);

function loadScript(){

    data = JSON.parse(FooBar.getData());

    //Clear previous data
    document.querySelector("#bartender_reciever").innerHTML = '';
    document.querySelector("#beerInfo_reciever").innerHTML = '';
    document.querySelector("#customerOrder_reciever").innerHTML = '';
    document.querySelector("#que_reciever").innerHTML = '';
    document.querySelector("#storage_reciever").innerHTML = '';

                // BARTENDERS
                data.bartenders.forEach(function(e){
        
                            // CLONING THE TEMPLATES
                            let clone_bartender = template_bartender.cloneNode(true);

                            // PUTTING STUFF INTO THE TEMPLATE
                            clone_bartender.querySelector(".person_name").textContent = e.name;

                            let Person_name = e.name.toLowerCase();
                            clone_bartender.querySelector(".person_img img").src = "img/"+Person_name+".jpg";


                            // IF STATEMED WITH THE DOT STATUS
                            if(e.status == "READY"){
                                clone_bartender.querySelector(".prik_status").style.background = "#21cd92";
                                clone_bartender.querySelector(".status_text").textContent = e.status;
                            }
                            
                            else if(e.status == "WORKING"){
                                clone_bartender.querySelector(".prik_status").style.background = "#ff0000";
                                clone_bartender.querySelector(".status_text").textContent = e.status;
                            }
                            
                            else if (e.status == "BREAK"){
                                clone_bartender.querySelector(".prik_status").style.background = "#d9d9d9";
                                clone_bartender.querySelector(".status_text").textContent = e.status;
                            }


                            // APPENDING THE STUFF TO THE TEMPLATE RECIEVER
                            document.querySelector("#bartender_reciever").appendChild(clone_bartender);
                });


                // BEERTYPES
                data.beertypes.forEach(function(e){

                            // CLONE TEMPLATE FOR ORDERS
                            let clone_beerType = template_beerType.cloneNode(true);

                            // ADDING STUFF TO THE RIGHT PLACE
                            clone_beerType.querySelector(".beer_name").textContent = e.name;
                            clone_beerType.querySelector(".beer_description").textContent = e.description.overallImpression;
                            
                            // ADDING LABELS TO THE BEER TYPE
                            let beerLabel = e.label;
                            clone_beerType.querySelector(".beer_img img").src = "img/new_type/"+beerLabel;

                            // APPENDING IT TO THE HTML
                            document.querySelector("#beerInfo_reciever").appendChild(clone_beerType);
                });


                // SERVING
                data.serving.forEach(function(e){

                            // CLONE TEMPLATE FOR ORDERS
                            let clone_orders = template_orders.cloneNode(true);

                            // ADDING STUFF TO THE RIGHT PLACE
                            clone_orders.querySelector(".ids").textContent = '#'+e.id;
                            clone_orders.querySelector(".beers").textContent = e.order;

                            // ADDING LABELS TO THE BEER TYPE
                            // let beer_label = e.name.toLowerCase();
                            // clone_bartender.querySelector(".beers img").src = "img/"+beer_label+".png";
                            

                            // APPENDING IT TO THE HTML
                            document.querySelector("#customerOrder_reciever").appendChild(clone_orders);

                });


                // QUE
                data.queue.forEach(function(e){

                            let clone_que = template_que.cloneNode(true);

                            clone_que.querySelector(".que_number").textContent = e.id;
                            clone_que.querySelector(".start_time").textContent = e.startTime;

                            document.querySelector("#que_reciever").appendChild(clone_que);

                });

                let peopleInQue = data.queue.length;
                console.log("There are: "+peopleInQue+" in que for a cold beer!");


                // STORAGE
                data.storage.forEach(function(e){

                    let clone_storage = template_storage.cloneNode(true);

                    clone_storage.querySelector(".storage_name").textContent = e.name;
                    clone_storage.querySelector(".storage_mount").textContent = e.amount;


                    document.querySelector("#storage_reciever").appendChild(clone_storage);

                });

                var today = new Date();
                let goalDate = new Date(0, 0, 0, 21, 59, 0, 0);

                document.querySelector(".time_stamp").textContent = (goalDate.getHours() - today.getHours());
                document.querySelector(".minuts").textContent = (goalDate.getMinutes() - today.getMinutes());
}



// var today = new Date();
// let goalDate = new Date(0, 0, 0, 21, 59, 0, 0);

// document.querySelector(".time_stamp").textContent = (goalDate.getHours() - today.getHours());
// document.querySelector(".minuts").textContent = (goalDate.getMinutes() - today.getMinutes());


document.querySelector(".burger-menu").addEventListener("click", function(){

    let menu = document.querySelector(".burger-menu");
    let menu_text = document.querySelector("#menu_info");
    
        menu.classList.toggle("burger-menu--opened");
        menu.classList.toggle("burger-menu--closed");
    
        menu_text.classList.toggle("hide");
    
    });


    // setInterval(function(){ 
    //     loadScript();    
    // }, 10000);

