// code your solution here
function saturdayFun(funThing="roller-skate"){
    return `This Saturday, I want to ${funThing}!`
}

function mondayWork(boringThing='go to the office'){
    return `This Monday, I will ${boringThing}.`
}

function wrapAdjective(flair='*'){
    return function(adj ='special'){
        return `You are ${flair}${adj}${flair}!`
    }
}