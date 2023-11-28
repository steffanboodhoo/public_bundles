console.log('SCRIPT INCLUDED');
window.onload = ev => {
    // console.log('test.js loaded')
    testPrint();
}

const testPrint = () => {
    console.log(' EXTERNAL SCRIPT LOADED AND OWRKING !!!');
    setTimeout(() => {
        testPrint();
    }, 2000)
}