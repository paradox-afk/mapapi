//importar express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const lugares=[
    {
        name:"UABCS",
        lat:"24.102744",
        alt:"-110.315969",
        descripcion:"Institución pública que ofrece programas educativos de calidad.",
        imagen:"https://elinformantebcs.mx/wp-content/uploads/2016/08/elinformantebcs.mx_uabcs-1.jpg"
    },
    {
        name:"TEC",
        lat:"24.119680",
        alt:"-110.309086",
        descripcion:"institución pública de educación superior localizada en La Paz, Baja California Sur. Es considerada como la primera institución educativa de nivel licenciatura en el Estado de Baja California Sur.",
        imagen:"https://www.diarioelindependiente.mx/noticias/2018/10/original/153969314933905.jpg"
    },
    {
        name:"PARADOX",
        lat:"24.136510",
        alt:"-110.340388",
        descripcion:"Casa del paradox.",
        imagen:"https://p7.hiclipart.com/preview/987/879/610/drawing-line-art-my-hero-academia-toga-anime.jpg"
    },
    {
        name:"CET MAR",
        lat:"24.143829",
        alt:"-110.345621",
        descripcion:"El Centro de Estudios Tecnológicos del Mar.",
        imagen:"data:image/jpeg;base64,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"
    },
    {
        name:"MALECON",
        lat:"24.155606",
        alt:"-110.322703",
        descripcion:"agua yupi yupi.",
        imagen:"https://www.diarioelindependiente.mx/noticias/2019/12/original/15752758251ec61.jpg"
    },
    {
        name:"BANDIDOS",
        lat:"24.153059",
        alt:"-110.326613",
        descripcion:"Comercio de hamburgesas bastante buenas.",
        imagen:"https://media-cdn.tripadvisor.com/media/photo-s/10/3c/d5/c9/restaurant.jpg"
    },
    {
        name:"JAMMIN HOT",
        lat:"24.140861",
        alt:"-110.315036",
        descripcion:"Rip jammin los extrañaremos.",
        imagen:"data:image/jpeg;base64,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"
    },
    {
        name:"AMNESIA",
        lat:"24.160921",
        alt:"-110.316230",
        descripcion:"Mens Club",
        imagen:"https://2.bp.blogspot.com/_chot05UE8d0/SOA362Pg6yI/AAAAAAAAAtY/GZJilOHlSqE/s320/100_9999.JPG"
    },
    {
        name:"WALMART",
        lat:"24.118650",
        alt:"-110.343115",
        descripcion:"Centro Comercial",
        imagen:"https://www.elpulsolaboral.com.mx/img/articles/cunde-huelga-en-el-pais-ahora-la-proyecta-en-walmart-en-la-paz-wTe94/CzEo7_pqz.jpg"
    },
    {
        name:"TECOLOTE",
        lat:"24.336337",
        alt:"-110.315316",
        descripcion:"Playuca tuca tuca",
        imagen:"https://i.ytimg.com/vi/LBHrnagq34Y/maxresdefault.jpg"
    }
]

app.use(bodyParser.urlencoded({extended: false}));//el tipo de codificacion que utilizara la salida
app.use(bodyParser.json());//el formato de la salida

//levantar el servidor
app.listen(3000,() =>{
    //set up 
    console.log("el servidor esta corriendo en el puerto http://localhost:3000/");
} );

app.get("/", (req, res) =>{
    res.send("incio");
})

/**
 * busqueda
 * hace la busqueda de los lugares
 * @param {JSON}query
 * @param {String}query.search
 */
app.get("/Busqueda", (req, res) =>{
    const response={
      data: [],
      message: []  
    }
    let statusCode = null;
    const {search}= req.query;
    if(search && search.trim()){
        //filtrar en el JSON
        response.data=lugares.filter(lugar =>{
            //si retorna true
            return lugar.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
        statusCode=200;
    }else{
        //ENVIAR TODO LOS REGISTROS(JSON)
        response.data=lugares;
        statusCode=200;
    }
    res.status(statusCode).send(response);
})