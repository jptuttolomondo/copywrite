const { Router } = require("express");
const router = Router();

function invertir (texto){
  if(texto){
      var invertido=''
for (let i=0;i<texto.length;i++) {
  invertido=invertido+(texto[texto.length-i-1]);
}
return invertido
  }
else{ return false}
  
}

router.get("/", async (req, res) => {
let texto=req.query
console.log('llamada')
if (texto.text===undefined) res.status(400).send('{"error":"no text"}')
else  res.status(200).send({"text":invertir(texto.text)})
}
);


module.exports = router;
