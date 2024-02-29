"use strict" ;

import * as view from "./view_folder/view.js"
import * as view_cross_button from "./view_folder/view_cross_button.js"

import * as model from "./model.js"
import { generate_random_color_values_function } from "./helpers.js";













function control_generate_button_working_function()
{
    // console.log(`click generate button`) ;
    const all_color_arr = generate_random_color_values_function() ;   

    view.display_all_colors_function(all_color_arr)    
}
function control_cross_button_working_function(cross_btn_number)
{
    view_cross_button.removing_colors_function(cross_btn_number);       
}












function init()
{
    view.add_event_listener_function_button_generate(control_generate_button_working_function)
    view_cross_button.add_event_listener_function_button_cross(control_cross_button_working_function)
}
init();