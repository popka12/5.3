let input = document.querySelector('.i-4');
let input3 = document.querySelector('.i-3');
let out = document.querySelector('.out');
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.t1')
let btn3 = document.querySelector('.btn-3')
let name = prompt('Input name','');
let position = prompt('Input position','');
let phone = prompt('Input phone','');
let visitcard = ' <TABLE width="100%" border="0">'
    +' <TR>'
    +' <TD align="CENTER" valign="CENTER">'
    +' <IMG src="user.png">'
    +' </TD>'
    +' <TD align="CENTER">'
    +' <B>' + name + '</B><BR>'
    +' <I>' + position + '</I><BR>'
    +' <FONT color="blue">' + phone + '</FONT>'
    +' </TD>'
    +' </TR>'
    +' </TABLE>';
document.write('<TABLE width="100%" border="0" align="CENTER">');
for(let y=0; y<12; y++)
{
    document.write('<TR>');
    for(let x=0; x<3; x++)
    {
        document.write( '<TD align="CENTER" style="border-style: dashed;
        border-width:thin;">');
        document.write( visitcard );
        document.write('</TD>');
    }
    document.write('</TR>');
}
document.write('</TABLE>');
y = function (x) { return Math.pow(Math.cos(x),2); }
y1 = function (x) { return Math.pow(Math.cos(x),2); }
y2 = function (x) { return Math.sin(x) * 3 + (Math.pow(Math.sin(x), 3) * 4) + 1; }
let xmin = -6;
let xmax = 6;
btn.onclick= () =>{
    let x = +input.value;
    if(x === 2){
        for ( xmin ; xmin < xmax; xmin = xmin + 2 ){
            console.log(`x: ${x}, y: ${y(x)}`);
            x++;
        }
    }else if(x > 2){
        for ( xmin ; xmin < xmax; xmin = xmin + 2 ){
            console.log(`x: ${x}, y: ${y1(x)}`);
            x++;
        }
    }else if (x < 2){
        for ( xmin ; xmin < xmax; xmin = xmin + 2 ){
            console.log(`x: ${x}, y: ${y2(x)}`);
            x++;
            if(x < -6)break;
        }
    }
}
// const for 3 task
let out2 = document.querySelector('.out-2');
let btn21 = document.querySelector('.btn-21');
let btn22 = document.querySelector('.btn-22');
let btn23 = document.querySelector('.btn-23');
let btn24 = document.querySelector('.btn-24');
let btn25 = document.querySelector('.btn-25');
let string1 = 'Той, хто не любить своєї країни, нічого любити не може.';
let string2 = 'Кожному мила своя сторона. ';
let string3 = 'Усвідомлена любов до свого народу не поєднується з ненавистю до
інших.';
let string4 = 'Ті, що виїздять за море, міняють небо, а не душу. ';
let string5 = 'Для нас дорогі батьки, дорогі діти, близькі, родичі, але всі
уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».';
btn21.onclick = () =>{
    out2.textContent += string1;
    alert('Цитата Д. Байрон ');
}
btn22.onclick = () => {
    out2.innerHTML = string2;
    alert('Цитата Сковороди');
    btn23.onclick = () => {
        out2.innerHTML = string3;
        alert('Цитата Д. Лихачев');
    }
    btn24.onclick = () => {
        out2.innerHTML = string4;
        alert('Цитата Горацій');
    }
    btn25.onclick = () => {
        out2.innerHTML = string5;
        alert('Цитата Цицерон');
    }
    btn3.onclick = () => {
        console.log('|========КОНСТАНТИ=======|')
        console.log(`1 : ${Math.E}`);
        console.log(`2 : ${Math.PI}`);
        console.log(`3 : ${Math.SQRT2}`);
        console.log(`4 : ${Math.SQRT1_2}`);
        console.log(`5 : ${Math.LN2}`);
        console.log(`6 : ${Math.LN10}`);
        console.log(`7 : ${Math.LOG2E}`);
        console.log(`8 : ${Math.LOG10E}`);
        console.log('|========ФУНКЦИИ=======|');
        console.log((Math.sqrt(-9)));
        console.log(Math.abs(-9));
        console.log(Math.cos(0));
        console.log(Math.cos(180));
        console.log(Math.acos(0));
        console.log(Math.random());
        function getRandomFloat(min, max) {
            return Math.random() * (max - min) + min;
        }
        console.log(getRandomFloat(0, 1));
    }
}