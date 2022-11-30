<template>
  <div>
  <v-container class="fill-height w-auto p-0 m-0">
    

    <div class="collapse" id="navbarToggleExternalContent">
        <div class=" bg-primary p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bot-gradient ">
        <div class="container-fluid ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>


        <v-row>
          <v-col md="4">
            
            <div class="box arrow-right">
              <v-card class="primary p-2" color="primary">
                {{leftContent}}
              </v-card>
            </div>
              
          </v-col>
          <v-col md="4">
            <div id="bot">
      
                <svg
                  width="307.2pt"
                  height="457.2pt"
                  viewBox="0 0 307.2 307.2"
                  
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="botGroup">
                      <g id="caraGroup">
                          <path
                              id="cara"
                              opacity="0.8"
                              :class="caraClass"
                              :fill="botColor"
                              :stroke="botColor"
                              stroke-width="2"
                              transform="translate(47.0399981118145, 44.6399982081505)"
                              d="M6.24 97.44L0.48 69.6L45.12 64.8L40.32 78.72L58.08 87.84L81.6 79.2L78.72 65.76L60.48 49.92L46.56 60.48L0 63.84L20.16 17.28L67.2 1.92L141.6 0L191.04 24.96L195.36 63.84L149.28 58.08L128.16 42.24L106.56 61.92L116.16 79.2L144.96 81.6L151.68 65.28L195.36 69.6L183.84 98.4Z"
                          />
                          <g id="ojosGroup" :class="ojosGroupClass">
                              <path
                                  id="ojoIzq"
                                  opacity="1"
                                  class="path"
                                  :fill="botColor"
                                  :stroke="botColor"
                                  transform="translate(95.0351496238657, 103.350725215954)" 
                                  d="M4.75176 18.8373L0 8.9944L11.0309 0L20.8738 11.7097L11.7097 20.8738Z" 
                              />
                              <path
                                  id="ojoDer"
                                  opacity="1"
                                  class="path"
                                  :fill="botColor"
                                  :stroke="botColor"
                                  transform="translate(166.141806217437, 94.695738375209)" 
                                  d="M9.50351 20.3647L0 10.352L11.54 0L28.1711 12.3885L20.0253 23.5891Z"
                              />
                          </g>
                      </g>
                    <g id="bocaGroupHover">
                      <g id="bocaGroup" :class="bocaGroupClass" v-on:animationend="removeClass()">
                          <path
                          id="boca"
                          opacity="0.8"
                          class="path"
                          :fill="botColor"
                          :stroke="botColor"
                          transform="matrix(0.999999971671202 0 0 0.999999971671202 45.1199986547914 161.279990730271)"
                          d="M171.933 6.89828L184.08 0L194.88 31.2L144.96 60L46.56 56.16L6.72 27.36L0 0.480005L18.24 5.28L30.24 25.92L41.28 24.96L41.76 5.28L59.52 9.6L63.36 29.28L79.68 30.72L78.72 12.48L95.04 19.68L96.48 34.08L108.48 32.64L103.2 21.12L123.36 14.88L124.8 33.12L144.96 30.24L138.72 12.96L156.48 8.16L159.36 29.76L177.6 20.64Z"
                          />
                          <path
                          id="mandibula"
                          opacity="0.8"
                          class="path"
                          transform="translate(53.8799994906155, 195.279998112409)" 
                          d="M0 0L24.48 42.48L90.24 54.48L158.4 46.32L185.724 3.03794L141.6 34.56L36.96 31.44Z"
                          :fill="botColor"
                          :stroke="botColor"
                          />
                      </g>
                    </g>
                  </g>
                  
                </svg>
                <!--<svg viewBox="0 0 340 333">
                  <path
                    class="path"
                    fill="white"
                    stroke="black"
                    stroke-width="4"
                    d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
                      s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
                      C46.039,146.545,53.039,128.545,66.039,133.545z"
                      <object data="./img/bot.svg" width="300" height="300" class="path"> </object>
                  />
                </svg>
                <svg viewBox="30 30 1 1">
                  <path
                    class="path"
                    fill="transparent"
                    stroke="gray"
                    stroke-width="0.5"
                    d="m 35.412312,115.5918 c -1.442046,0 -2.880739,0.49168 -4.052401,1.4748 -0.705182,0.59173 -1.2502,1.31171 -1.628713,2.10012 -0.05253,-0.005 -0.103652,-0.0164 -0.157588,-0.0164 -0.941869,0 -1.70024,0.75836 -1.70024,1.70021 v 2.10134 c 0,0.94184 0.758371,1.70021 1.70024,1.70021 0.05394,0 0.105059,-0.0117 0.157588,-0.0164 0.06777,0.14047 0.137889,0.27991 0.216918,0.41689 0.308938,0.55139 1.134304,0.0793 0.815588,-0.46655 -1.304955,-2.26029 -0.799571,-5.12447 1.199708,-6.80208 1.999326,-1.67765 4.903352,-1.67765 6.902655,0 1.999326,1.67761 2.50471,4.54174 1.199732,6.80208 l -0.01407,0.0234 -0.0094,0.0234 c 0,0 -0.633799,1.40211 -1.878344,1.40211 l -1.575387,-0.0141 c -0.147739,-0.21575 -0.384191,-0.366 -0.666512,-0.366 h -1.015533 c -0.45534,0 -0.821638,0.36752 -0.821638,0.82286 0,0.28087 0.178225,0.49415 0.586056,0.49415 l 3.493009,2.8e-4 c 1.867604,0 2.675336,-1.8335 2.712107,-1.91835 v -0.005 c 0.07832,-0.13578 0.147269,-0.27521 0.214572,-0.41444 0.05488,0.005 0.108342,0.0164 0.164858,0.0164 0.941869,0 1.700237,-0.75836 1.700237,-1.70021 v -2.10134 c 0,-0.94184 -0.75837,-1.70021 -1.700237,-1.70021 -0.05441,0 -0.105762,0.009 -0.158761,0.0164 -0.377627,-0.78846 -0.921023,-1.50837 -1.6263,-2.10014 -1.171614,-0.98312 -2.616355,-1.47481 -4.058451,-1.47481 z m -2.049205,2.98718 c -0.366019,-0.0239 -0.700354,0.0535 -0.992502,0.36114 -0.779049,0.82018 -1.260325,1.9365 -1.260325,3.12533 0,0.98061 0.327722,2.07941 0.879793,2.11951 0.786511,0.0572 2.027657,-0.45928 3.424676,-0.45928 1.480437,0 2.786843,0.57951 3.561606,0.44232 0.469528,-0.083 0.744064,-1.20536 0.744064,-2.10255 0,-1.18883 -0.482452,-2.30515 -1.261524,-3.12533 -0.779054,-0.82021 -1.855342,0 -3.044146,0 -0.743006,0 -1.441646,-0.32109 -2.051642,-0.36114 z m -0.174473,2.02134 c 0.434305,1.7e-4 0.786345,0.35219 0.786486,0.78651 -1.41e-4,0.43431 -0.352181,0.78633 -0.786486,0.78649 -0.434304,-1.6e-4 -0.786345,-0.35218 -0.786485,-0.78649 1.4e-4,-0.43432 0.352181,-0.78634 0.786485,-0.78651 z m 4.452304,0 c 0.434329,1.7e-4 0.786345,0.35219 0.786509,0.78651 -1.66e-4,0.43431 -0.35218,0.78633 -0.786509,0.78649 -0.434304,-1.6e-4 -0.786321,-0.35218 -0.786485,-0.78649 1.64e-4,-0.43432 0.352181,-0.78634 0.786485,-0.78651 z"
                  />
                </svg>
                -->
              </div>
              <div class="input-group mb-3">
                <input type="text" id="question" class="form-control bg-outline-secondary" placeholder="H Hola, p pre gunta me Algo..." aria-label="Recipient's username" aria-describedby="button-addon2">
                <button class="btn btn-primary" type="button" id="button-addon2" @click="botClick()">Preguntar</button>
              </div>
            </v-col>
            <v-col md="4">
           
            <div class="box arrow-left">
              <v-card class="primary p-2" color="primary">
                {{rightContent}}
              </v-card>
            </div>
              
          
          </v-col>
          <v-col md="12">
            <TableBot></TableBot>
    
          </v-col>
        </v-row>
      
    
    
  </v-container>
</div>
</template>

<style scoped>
.stripe{
    background: rgb(24,24,17);
background: -moz-linear-gradient(90deg, rgba(24,24,17,1) 0%, rgba(117,118,131,1) 37%, rgba(120,88,40,1) 95%);
background: -webkit-linear-gradient(90deg, rgba(24,24,17,1) 0%, rgba(117,118,131,1) 37%, rgba(120,88,40,1) 95%);
background: linear-gradient(90deg, rgba(24,24,17,1) 0%, rgba(117,118,131,1) 37%, rgba(120,88,40,1) 95%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#181811",endColorstr="#785828",GradientType=1);

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.bot-gradient {
    height:100px;
    background: 
      /* Color                         position     / width height */
      linear-gradient(#25dbf3,#25dbf3) center right / 30%   70px, 
     
      linear-gradient(#1fa2ff,#1fa2ff) bottom left  / 40%   70px,
      
      linear-gradient(#5533ff,#5533ff) top left     / 30%   70px,
      linear-gradient(#4553ff,#4553ff) top left     / 60%   70px,
      linear-gradient(#4f40ff,#4f40ff) top left     / 100%  70px,
      /* main background*/
      linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
    background-repeat:no-repeat;
    transform:skewY(-10deg) translateY(-20%);
    transform-origin:left ;
  }

:root {
  --dark-color: #635bff;
  --light-color: #EEBE7B;
}
svg {
  cursor: pointer;
  /**filter: drop-shadow(3px 5px 4px rgb(0 0 0 / 0.2));**/
}


/**
  Animacion de Hover
  */
#caraGroup {
  transition: all 0.4s ease;
}
#ojoIzq {
  transition: all 0.8s ease;
}
#ojoDer {
  transition: all 0.8s ease;
}
#bocaGroupHover {
  transition: all 0.5s ease;
}

svg:hover #bocaGroupHover {
  transform: translateY(-20%);
}
svg:hover #caraGroup {
  transform: translateY(-20%);
}

/**
  Animacion 1
*/
@keyframes abrirIzq {
    100%,
    70%,
    50%,
    30%  {
    transform: rotate(0deg) translateX(15%) translateY(15%);
  }
  20%,
    40%,
    60%,
    80%{
    transform: translateX(35%) translateY(-10%) rotate(30deg);
  }
}

@keyframes abrirIzqOjos {
    100%,
    70%,
    50%,
    30%  {
    transform: rotate(0deg) translateX(-0%) translateY(0%);
  }
  20%,
    40%,
    60%,
    80% {
    transform: translateX(30%) translateY(-30%) rotate(30deg);
  }
}

@keyframes abrirIzqBoca {
    100%,
    70%,
    50%,
    30% {
    transform: rotate(0deg) translateX(-0%) translateY(0%);
  }
  20%,
    40%,
    60%,
    80% {
    transform: translateX(-10%) translateY(30%) rotate(-20deg);
  }
}

/**
  Animacion 2
*/
@keyframes abrirDer {
    100%,
    70%,
    50%,
    30% {
      transform: rotate(0deg) translateX(15%) translateY(15%);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(5%) translateY(20%) rotate(-30deg);
    }
  }
  
  @keyframes abrirDerOjos {
    100%,
    70%,
    50%,
    30% {
      transform: rotate(0deg) translateX(-0%) translateY(0%);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(-15%) translateY(10%) rotate(-25deg);
    }
  }
  
  @keyframes abrirDerBoca {
    100%,
    70%,
    50%,
    30% {
      transform: rotate(0deg) translateX(-0%) translateY(0%);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(20%) translateY(-10%) rotate(20deg);
    }
  }

.reset {
  animation: abrirIzq 0.1s linear forwards alternate;
}

.anim1 {
  animation: abrirIzq 2.5s linear forwards alternate;
}

.anim1ojos {
  animation: abrirIzqOjos 2.5s linear forwards alternate;
  animation-delay: 20ms;
}

.anim1boca {
  animation: abrirIzqBoca 2.5s linear forwards alternate;
  animation-delay: 30ms;
}

.anim2 {
  animation: abrirDer 2s linear forwards alternate;
}

.anim2ojos {
  animation: abrirDerOjos 2s linear forwards alternate;
  animation-delay: 20ms;
}

.anim2boca {
  animation: abrirDerBoca 2s linear forwards alternate;
  animation-delay: 30ms;
}

/**
.path {
  stroke-dasharray: 925;
  stroke-dashoffset: 925;
  animation: stroke 1s linear forwards;
}*/
.path {
    fill-opacity: 0;
    stroke-opacity: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    stroke-dasharray: 925;
    stroke-dashoffset: 925;
    fill: "#EEBE7B";
    stroke: "#EEBE7B";
    animation-name: drawStroke, fadeStroke, fillIn;
    animation-duration: 4s, 1s, 1s;
    animation-delay: 0s, 3.5s, 3.5s;
  }

@keyframes drawStroke {
    to { stroke-dashOffset: 0; }
}

@keyframes fadeStroke {
    to { stroke-opacity: 0; }
  }
  
  @keyframes fillIn {
    from { fill-opacity: 0; }
    to { fill-opacity: 1; }
  }

  .box.arrow-left:after {
    content: " ";
    position: absolute;
    left: -15px;
    top: 25px;
    border-top: 15px solid transparent;
    border-right: 15px solid #4553ff;
    border-left: none;
    border-bottom: 15px solid transparent;
  }

  .box.arrow-right:after {
    content: " ";
    position: absolute;
    right: -15px;
    top: 25px;
    border-top: 15px solid transparent;
    border-right: none;
    border-left: 15px solid  #4553ff;
    border-bottom: 15px solid transparent;
  }

  .box {
    width: 150px;
    border-radius: 25px;
    background-color:  var(--v-primary-base); 
    padding: 20px;
    position: relative;
    margin: 40px;
    float: left;
  }

  .form-control::placeholder { 
    color: rgb(161, 161, 161);
    opacity: 1; /* Firefox */
}

</style>

<script >
  //var path = document.querySelector('.path');

import axios from 'axios'
  //import TableBotVue from ;
import TableBot from '@/components/TableBot.vue'
//  import table-component from '@/components/TableBot.vue'

  export default{
    name: "Bot",

    data: () => ({
      colors: ['red', 'blue', 'green', 'orange', 'DeepPink', 'purple', '#EEBE7B'],
      caraClass: "path",
      ojosGroupClass: "",
      bocaGroupClass: "",
      rightContent: ".",
      leftContent: ".",
      botColor: '#EEBE7B',
    }),
    components: {
      TableBot
    },
    methods: {
      botClick() {
        
        var animations = ['anim1', 'anim2'];
        var clase= animations[Math.floor(Math.random() * animations.length)];
        this.bocaGroupClass = clase+"boca "+this.botColor;
        this.ojosGroupClass = clase+"ojos "+this.botColor;
        this.caraClass = clase+" "+this.botColor;
        const rando = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.botColor = rando;
        console.log("click "+ this.botColor)
        this.getConver();
      },
      removeClass() {
        this.bocaGroupClass = "";
        this.ojosGroupClass = "";
        this.caraClass = "";
      },

      async conversar() {
        try {
          
          var dataReq = '{"input":"Hola"}';
          var headersReq =  {  "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*"};
          const response = await axios({url:'http://127.0.0.1:8000/bot/conversation/', data:dataReq, method:"GET", headers:headersReq})
            .then(response => (this.leftContent = response))
          console.log(response)
          
        } catch (error) {
          console.error(error);
        }
      },

      async getConver() {
      let request = {
        method: "get",
        params: {},
        data: {"input": "hola"},
        url: "http://127.0.0.1:8000/bot/conversation",
      };
      (this.responseTitle = "Respuesta"),
        await this.$store
          .dispatch("request_back", request)
          .then((value) => {
            //this.items_empresa = value.data;
            //this.responseText = "Se han cargado las empresas";
            console.log(value.data)
          })
          .catch(function (error) {
            this.responseText = "No se pudo cargar las empresas: " + error;
          });
    },

    },

  }

</script>