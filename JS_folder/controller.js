"use strict" ;

import * as view from "./view.js"
import * as model from "./model.js"
import { generate_random_color_values_function } from "./helpers.js";



function control_generate_button_working_function()
{
    const all_color_arr = generate_random_color_values_function() ;   

    view.display_all_colors_function(all_color_arr)    
}


function init()
{
    view.add_event_listener_function_button_generate(control_generate_button_working_function)
}
init();