"use strict" ;


import {div_colors_display , all_color_div} from "../config.js" ;


export function add_event_listener_function_button_cross(recieved_control_cross_button_working_function)
{

    div_colors_display.addEventListener("click" ,
    function(event_info_object)
    {
             // 1 : using event deligation to make an event happen on cross button 
     const cross_btn = event_info_object.target.closest(".div_cross_button") ;
     // console.log(cross_btn)
     //console.log(cross_btn.classList.value.slice(-1))
     if(!cross_btn) return ;

     const cross_btn_number = +cross_btn.classList.value.slice(-1) ;
     if(!cross_btn_number) return ;
    //  console.log(cross_btn_number)



     // 2 : if user did not clicked on cross button then return 

     // console.log(`cross_button_clicked`) ;
        
        recieved_control_cross_button_working_function(cross_btn_number) ;
    })
 
}







export function removing_colors_function(cross_btn_number)
{



     // 3 : storing all the color divs when user click on cross button 
     let all_div_arr = [... document.querySelectorAll(".div_color")];
     // console.log(all_div_arr)



     // 4 : removing 1 div from it 
     all_div_arr.splice(cross_btn_number-1,1) ;
     // console.log(all_div_arr)
     all_div_arr.forEach((val,i) =>
     {
         val.classList=[] ;
         val.classList.add(`div_color`);
         val.classList.add(`color_${i+1}`) ;
         var new_cross_btn =val.querySelector(".div_cross_button") ;
         new_cross_btn.classList = [] ;
         new_cross_btn.classList.add("div_cross_button") ;
         new_cross_btn.classList.add(`cross_button_${i+1}`)
         
     })
     // console.log(" ")

     



     let html_markup = ""
     all_div_arr.forEach(val=>
     {
         html_markup+=val.outerHTML ;
     })


     document.querySelector('.div_colors_display').innerHTML = "" ;
     document.querySelector('.div_colors_display').insertAdjacentHTML("afterbegin" , html_markup)


}