// ########################################
// #### closure task 1: counter        ####
// ########################################

'use strict'

function createCounter() {
    let count = 0;
    return () => {
        return ++count;
    }
}
