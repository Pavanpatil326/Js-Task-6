/*let monts = ["January", "july", "march", "april"];

let bloked = monts.shift();

*/

/*let game = [['x','o','o'], [null,'x',null], ['o',null,'x']];

console.log(game);
*/

//for(let i = 1; i<=100000; i++){
//    console.log(i)
//

/*for(let i=2; i<=10; i = i+2 )
{
    console.log(i);
}
    */

/*for (let i =1; ; i++)
{
    console.log(i)
}
    */

/*for (let i=5; i<=50; i = i+5)
{
    console.log(i)
}
    */

const favmovie = "KGF2";

let gusse = prompt("Please Gusse a movie");

while( (gusse != favmovie) && (gusse != "quite"))
{
    gusse=prompt("This Is Wrong Please Try Again");

}

    if(gusse == favmovie)
    {
        console.log("congratulation");
    }else
    {
        console.log("Quite");
    }