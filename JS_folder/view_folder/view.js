"use strict"


import {button_generate,all_color_div} from "../config.js"


export function add_event_listener_function_button_generate(recieved_control_generate_button_working_function)
{
    button_generate.addEventListener("click" , 
    function(event_info_object)
    {
        
        recieved_control_generate_button_working_function() ;
    })    
}



function rgbToHex(red, green, blue) {
    // Ensure that the input values are within the valid range (0 - 255)
    const clamp = (value) => Math.max(0, Math.min(255, value));
  
    // Clamp RGB values to ensure they are within the valid range
    const clampedRed = clamp(red);
    const clampedGreen = clamp(green);
    const clampedBlue = clamp(blue);
  
    // Convert RGB to hexadecimal
    const hexRed = clampedRed.toString(16).padStart(2, '0');
    const hexGreen = clampedGreen.toString(16).padStart(2, '0');
    const hexBlue = clampedBlue.toString(16).padStart(2, '0');
  
    // Combine the hexadecimal values
    const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;
  
    return hexColor;
  }

export function display_all_colors_function(recieved_all_colors_arr)
{

    let all_div_arr = [... document.querySelectorAll(".div_color")] ;

    // console.log([... document.querySelectorAll(".div_color")])
    
    

    for(let i = 0 ; i < all_div_arr.length ; i++)
    {
        
        const val_1 = recieved_all_colors_arr[i][0] ;
        const val_2 = recieved_all_colors_arr[i][1] ;
        const val_3 = recieved_all_colors_arr[i][2] ;


        all_div_arr[i].style.backgroundColor = `rgb(${val_1},${val_2},${val_3})`

        let hex_color = rgbToHex(val_1, val_2, val_3) ;
        hex_color = hex_color.toUpperCase()
        
        // console.log(document.querySelector(`.color_${i+1}`))
        document.querySelector(`.color_${i+1} .text_hex_vlue`).textContent = hex_color ;
    }
    // console.log(" ")
}