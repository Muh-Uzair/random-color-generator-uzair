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

        // 2 : if user did not clicked on cross button then return 
        if(!cross_btn) return ;
        // console.log(`cross_button_clicked`) ;

        // 3 : storing all the color divs when user click on cross button 
        let all_div_arr = [... document.querySelectorAll(".div_color")];
        // console.log(all_div_arr)


        // 4 : removing 1 div from it 
        all_div_arr.pop() ;
        let html_markup = ""
        for(let i = 0 ; i < all_div_arr.length ; i++ )
        {
            if(i === +all_div_arr.length - 1)
            {
                all_div_arr[i].classList.add("last_color_div") ;
                // console.log(all_div_arr[i])
            }
            
            html_markup += all_div_arr[i].outerHTML;
        }
        // console.log(html_markup)

        document.querySelector('.div_colors_display').innerHTML = "" ;
        document.querySelector('.div_colors_display').insertAdjacentHTML("afterbegin" , html_markup)

        recieved_control_cross_button_working_function() ;


    
    })
 
}

