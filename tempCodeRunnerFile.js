"use strict";
function gre(name) { return "oi" + name; }
function wawa(f, userName) {
    const greet = f(userName);
    console.log(greet);
}
wawa(gre, "we");
