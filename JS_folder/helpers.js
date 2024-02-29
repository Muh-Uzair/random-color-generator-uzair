"use strict"


export function generate_random_color_values_function()
{

    const all_color_arr = [] ;

    for(let i = 0 ; i < 7 ; i++)
    {
        const color_1 =Math.trunc(Math.random()*256) ;
        const color_2 =Math.trunc(Math.random()*256) ;
        const color_3 =Math.trunc(Math.random()*256) ;

        all_color_arr.push([color_1,color_2,color_3])

    }

    return all_color_arr;

}