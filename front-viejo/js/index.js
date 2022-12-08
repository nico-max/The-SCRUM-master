var path = document.querySelector('.path');
var length = path.getTotalLength();
console.log(path+ "  "+ length)


const svg = document.getElementById('botGroup');
  
svg.onclick = (e) => {
    const colors = ['red', 'blue', 'green', 'orange', 'DeepPink', 'purple', '#EEBE7B']
    const rando = () => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `
    --dark-color: ${rando()};
    --light-color: ${rando()}; 
    `
    const animations = ['anim1', 'anim2']
    var clase= animations[Math.floor(Math.random() * animations.length)];
    const cara = document.getElementById('cara')
    const ojos = document.getElementById('ojosGroup')
    const boca = document.getElementById('bocaGroup')
    recargarAnimacionObjeto(cara, clase);
    recargarAnimacionObjeto(ojos, clase+"ojos");
    recargarAnimacionObjeto(boca, clase+"boca");



}

function recargarAnimacionObjeto(obj, clase){
    obj.removeAttribute('class'); // reset animation
    //void element.offsetWidth; 
    void obj.getBoundingClientRect();// trigger reflow
    obj.classList.add(clase); // start animation
}

const pregunta = async () =>{
    var preg = document.getElementById("question").value;
    //alert("pregunta "+preg)
    const response = await fetch('http://4621-34-91-1-27.ngrok.io/bot', {
    method: 'POST',
    //mode: "no-cors",
    body: "{Body: 'sdadsa'}", // string or object
    form_data: preg,
    headers: {
      //'Content-Type': 'application/json',
      'Content-Type': 'text/plain',
      "Access-Control-Allow-Origin": "*",
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  alert (myJson);
}