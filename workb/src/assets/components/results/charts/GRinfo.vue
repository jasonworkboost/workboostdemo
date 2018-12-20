<template>
    <div class="col-md-12" id="groverall">
        <div class="col-md-4 col-sm-12" id="groveralp1">
            <div class="col-sm-4" 
            id="gropen" 
            :style="{borderColor: colorsWB.color1, color: shadowcolor1}"
            @mouseover="shadowcolor1 = colorsWB.color2" 
            @mouseleave="shadowcolor1 = 'whitesmoke'">
                <div class="row">
                    <p class="grlabels">{{labelsWB.resultsStatus}}</p>
                </div>
                <!-- if statement wheter open or closed -->
                <div class="row">
                    <svg id="grclose" :style="{fill: colorsWB.color1}" viewBox="0 0 270.32 239.08">
                        <path d="M200.92,76.18h-7.13V63.91A58,58,0,0,0,135.87,6c-32,0-58.19,26-58.19,57.91V76.18H69.12A27.27,27.27,0,0,0,42,103.28V206a27.27,27.27,0,0,0,27.1,27.1H201.2A27.27,27.27,0,0,0,228.3,206V103.28A27.33,27.33,0,0,0,200.92,76.18ZM142.15,176.59v12a7.13,7.13,0,1,1-14.26,0v-12a16.76,16.76,0,0,1-10-15.69,17.12,17.12,0,1,1,34.23,0A16.76,16.76,0,0,1,142.15,176.59ZM179.52,76.18H91.94V63.91a43.79,43.79,0,0,1,87.58,0Z"/>
                    </svg>
                </div>
            </div>
            <div class="col-sm-8" 
            id="grcode" 
            :style="{borderColor: colorsWB.color1, color: shadowcolor2}"
            @mouseover="shadowcolor2 = colorsWB.color2" 
            @mouseleave="shadowcolor2 ='whitesmoke'">
                <div class="row">
                    <p class="grlabels">{{labelsWB.resultsCode}}</p>
                </div>
                <div class="row col-md-12">
                    <h2 id="grlabelcode">{{resultsWB.event}}</h2>
                </div>
            </div>
            <div class="col-sm-12" 
            id="grname"
            :style="{borderColor: colorsWB.color1, color: shadowcolor3}"
            @mouseover="shadowcolor3 = colorsWB.color2" 
            @mouseleave="shadowcolor3 ='whitesmoke'">
                <div class="row">
                    <p class="grlabels">{{labelsWB.resultsName}}</p>
                </div>
                <div class="row col-md-12">
                    <h2 id="grlabelname">{{resultsWB.name}}</h2>
                </div>
            </div>
        </div>
        <div class="col-sm-8" id="groveralp2">
            <div class="col-sm-9" 
            id="grdescrip"
            :style="{borderColor: colorsWB.color1, color: shadowcolor4}"
            @mouseover="shadowcolor4 = colorsWB.color2" 
            @mouseleave="shadowcolor4='whitesmoke'">
                <div class="row">
                    <p class="grlabels">{{labelsWB.resultsDescr}}</p>
                </div>
                <div class="row col-md-12" id="descriptext">{{resultsWB.descrip}}</div>
                 <div class="row col-md-12" id="createdtext"> {{labelsWB.resultsCreated}}{{resultsWB.startdate}}</div>
            </div>
            <div class="col-sm-3">
                <div class="col-sm-12"
                    id="targetbox" 
                    :style="{borderColor: colorsWB.color1, color: shadowcolor5}"
                    @mouseover="shadowcolor5 = colorsWB.color2" 
                    @mouseleave="shadowcolor5 = 'whitesmoke'">
                    <div class="row">
                        <p class="grlabels">{{labelsWB.resultsTarg}}</p>
                    </div>
                    <div class="row col-md-12">
                    <h2 class="grvalues" :style="{color: colorsWB.color1}">{{resultsWB.target}}</h2>
                </div>
                </div>
                <div class="col-sm-12"
                    id="completedbox" 
                    :style="{borderColor: colorsWB.color1, color: shadowcolor6}"
                    @mouseover="shadowcolor6 = colorsWB.color2" 
                    @mouseleave="shadowcolor6 = 'whitesmoke'">
                    <div class="row">
                        <p class="grlabels">{{labelsWB.resultsComp}}</p>
                    </div>
                    <div class="row col-md-12">
                    <h2 class="grvalues" :style="{color: colorsWB.color1}">{{resultsWB.completed}}</h2>
                </div>
                </div>
            </div>
        </div>
<!-- mobile coding  in store var aangemaakt-->
        <div class="col-xs-12" id="grinfomob">
            <div class="col-xs-12 grmobtext">
                <h2 id="grmobtexth2">{{labelsWB.resultsPressIcon}}</h2>
            </div>
            <div class="col-xs-4 grmobicons" @click="selectDetails(1);">
                <div class="grinfoiconc" :style="{backgroundColor: bgcol1, color: shcol1}">
                   <svg class="grinfomobicon" viewBox="0 0 1024 1280" :style="{fill: fillcol1, stroke: fillcol1}" style="margin-top: 10px;">
                       <path d="M879.674 544.51l-158.254-0.221c-8.534 2.287-17.305-2.776-19.588-11.307l-23.862-75.877-74.742 350.891c0 0-1.523 18.507-11.518 18.507s-26.9 0.281-26.9 0.281c-8.259 2.213-16.748-2.687-18.961-10.949l-92.741-457.648-70.305 330.634c-2.261 8.291-11.94 15.206-20.385 12.986l-24.876 0.339c-8.723 2.293-17.685-2.789-20.023-11.349L270.629 544.51 143.993 544.51c-8.831 0-15.993-7.159-15.993-15.993l0-31.986c0-8.831 7.162-15.993 15.993-15.993l157.429-0.516c9.565-0.304 17.685 0.788 20.023 9.351l24.386 76.092 68.642-358.907c0 0 3.4-10.894 14.397-10.894 10.994 0 34.107-0.448 34.107-0.448 8.262-2.213 16.751 2.687 18.965 10.949l91.912 454.126 67.948-326.182c2.213-8.262 8.707-15.161 16.965-12.948l27.316-0.333c8.531-2.287 17.301 2.776 19.588 11.31l46.665 148.4 127.337 0c8.835 0 15.993 7.162 15.993 15.993l0 31.986C895.667 537.352 888.508 544.51 879.674 544.51z"/>
                    </svg> 
                </div>
            </div>
            <div class="col-xs-4 grmobicons" @click="selectDetails(2);">
                <div class="grinfoiconc" :style="{backgroundColor: bgcol2, color: shcol2}">
                   <svg class="grinfomobicon" viewBox="0 0 100 100" :style="{fill: fillcol2, stroke: fillcol2}">
                        <!-- <path d="M50,4.8l0,7h0c20.8,0,37.8,16.9,38,37.6l0,30.3c0,2.1-0.8,4.1-2.3,5.7c-1.5,1.5-3.5,2.3-5.7,2.3l-31.1,0  c-10.2-0.3-19.7-4.6-26.7-12.1C15.2,68.1,11.6,58.3,12,48c0.9-19.5,16.9-35.4,36.4-36.2c0.5,0,1.1,0,1.6,0L50,4.8 M50,4.8  c-0.6,0-1.3,0-1.9,0C25,5.7,6.1,24.5,5,47.7C3.9,73,23.8,94,48.7,94.7l31.2,0c0,0,0,0,0,0c8.3,0,15-6.7,15-15l0-30.4  C94.8,24.7,74.7,4.8,50,4.8L50,4.8z"/> -->
                        <path d="M56.5,66.1H44v-1.7c0.5-0.2,0.9-0.4,1.4-0.6c0.5-0.2,1-0.3,1.6-0.5V46.6l-3-0.4v-1.7c0.5-0.2,1-0.4,1.7-0.5   c0.7-0.2,1.4-0.3,2.2-0.5c0.8-0.1,1.5-0.3,2.2-0.4c0.7-0.1,1.4-0.2,1.9-0.2h1.5v20.4c0.6,0.2,1.1,0.3,1.6,0.5   c0.5,0.2,0.9,0.4,1.4,0.6V66.1z M46.3,36c0-1.1,0.4-1.9,1.1-2.5c0.7-0.6,1.6-0.9,2.8-0.9c1.1,0,2.1,0.3,2.8,0.9   c0.7,0.6,1.1,1.4,1.1,2.5c0,1-0.4,1.8-1.1,2.5c-0.7,0.6-1.6,0.9-2.8,0.9c-1.1,0-2.1-0.3-2.8-0.9C46.6,37.9,46.3,37,46.3,36z"/>
                    </svg> 
                </div>
            </div>
            <div class="col-xs-4 grmobicons" @click="selectDetails(3);">
                <div class="grinfoiconc" :style="{backgroundColor: bgcol3, color: shcol3}">
                   <svg class="grinfomobicon" viewBox="0 0 100 125" :style="{fill: fillcol3, stroke: fillcol3}" style="margin-top: 5px; strokeWidth: 3px">
                        <path d="M33,76.93H19a1,1,0,0,1-1-1V39.07a1,1,0,0,1,1-1H33a1,1,0,0,1,1,1V75.93A1,1,0,0,1,33,76.93Zm-13-2H32V40.07H20V74.93Z"/>
                        <path d="M57,76.93H43a1,1,0,0,1-1-1V51.07a1,1,0,0,1,1-1H57a1,1,0,0,1,1,1V75.93A1,1,0,0,1,57,76.93Zm-13-2H56V52.07H44V74.93Z"/>
                        <path d="M81,76.93H67a1,1,0,0,1-1-1V24.07a1,1,0,0,1,1-1H81a1,1,0,0,1,1,1V75.93A1,1,0,0,1,81,76.93Zm-13-2H80V25.07H68V74.93Z"/>
                    </svg> 
                </div>
            </div>
            <div class="col-xs-4" @click="selectDetails(1);">
                   <p class="grinfomobicontext" :style="{backgroundColor: bgcol1, color: fillcol1}">{{labelsWB.resultsAct}}</p>
            </div>
            <div class="col-xs-4" @click="selectDetails(2);"> 
                   <p class="grinfomobicontext" :style="{backgroundColor: bgcol2, color: fillcol2}">{{labelsWB.resultsInfo}}</p>
            </div>
            <div class="col-xs-4" @click="selectDetails(3);">
                   <p class="grinfomobicontext" :style="{backgroundColor: bgcol3, color: fillcol3}">{{labelsWB.resultsStat}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return{
            shadowcolor1: 'whitesmoke',
            shadowcolor2: 'whitesmoke',
            shadowcolor3: 'whitesmoke',
            shadowcolor4: 'whitesmoke',
            shadowcolor5: 'whitesmoke',
            shadowcolor6: 'whitesmoke',
            bgcol1: 'white',
            bgcol2: 'white',
            bgcol3: 'white',
            shcol1: 'whitesmoke',
            shcol2: 'whitesmoke',
            shcol3: 'whitesmoke',
            fillcol1: 'black',
            fillcol2: 'black',
            fillcol3: 'black',
        }
    },
    computed: {
            ...mapGetters([
            'labelsWB',
            'colorsWB',
            'resultsWB'
            ]),
        },
    methods: {
        selectDetails: function(a){
            this.$store.state.resultDetailsSelect = a;
            switch (this.$store.state.resultDetailsSelect){
                case 1:
                    this.bgcol1 = this.colorsWB.color1;
                    this.bgcol2 = 'white';
                    this.bgcol3 = 'white';
                    this.shcol1 = this.colorsWB.color2;
                    this.shcol2 = 'whitesmoke';
                    this.shcol3 = 'whitesmoke';
                    this.fillcol1 = 'white';
                    this.fillcol2 = this.colorsWB.color1;
                    this.fillcol3 = this.colorsWB.color1;
                    break;
                case 2:
                    this.bgcol2 = this.colorsWB.color1;
                    this.bgcol1 = 'white';
                    this.bgcol3 = 'white';
                    this.shcol2 = this.colorsWB.color2;
                    this.shcol1 = 'whitesmoke';
                    this.shcol3 = 'whitesmoke';
                    this.fillcol2 = 'white';
                    this.fillcol1 = this.colorsWB.color1;
                    this.fillcol3 = this.colorsWB.color1;
                    break;
                case 3:
                    this.bgcol3 = this.colorsWB.color1;
                    this.bgcol2 = 'white';
                    this.bgcol1 = 'white';
                    this.shcol3 = this.colorsWB.color2;
                    this.shcol2 = 'whitesmoke';
                    this.shcol1 = 'whitesmoke';
                    this.fillcol3 = 'white';
                    this.fillcol2 = this.colorsWB.color1;
                    this.fillcol1 = this.colorsWB.color1;
                    break;
                default:
                    this.bgcol1 = 'white';
                    this.bgcol2 = 'white';
                    this.bgcol3 = 'white';
                    this.shcol1 = 'whitesmoke';
                    this.shcol2 = 'whitesmoke';
                    this.shcol3 = 'whitesmoke';
                    this.fillcol1 = this.colorsWB.color1;
                    this.fillcol1 = this.colorsWB.color1;
                    this.fillcol1 = this.colorsWB.color1;
                    break;
            }
        }
    },
    created(){
        this.selectDetails(1)
    } 
}
</script>
<style>
#gropen, #grcode, #grname, #grdescrip, #targetbox, #completedbox{
    border: solid 1px;
    margin-top: 3vh;
    box-shadow: 5px 8px;
}
#groverall{
    margin-top: 20px;
}
#groveralp1, #groveralp2{
    display: block;
}
#gropen, #grcode, #grname, #targetbox, #completedbox{
    height: 10vh;
}
#targetbox, #completedbox{
    margin-left: 15px;
}
#gropen {
    margin-right: 5%;
    width: 30%;
}
#targetbox{
    margin-right: 0%;
}
#grcode {
    width: 60%;
}
#grname{
    width: 95%;
}
#grdescrip{
    height: 23vh;
    margin-left: -15px;
}
#descriptext{
    height: 16vh;
    font-size: 14px;
    color:black;
}
#createdtext{
    color:gray;
    font-style: italic;
}
#grclose{
    margin-left: 50%;
    -ms-transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
}
#grlabelname, #grlabelcode{
    color: black;
    line-height: 20px;
    font-size: 30px;
    margin-top: 2vh;
}
.grlabels{
    margin-left: 10px;
    padding-top: 5px;
    color:gray;
}
.grvalues{
    font-size: 36px;
    line-height: 30px;
    font-weight: 600;
    margin-top: 1vh;
    margin-right: -30px;
    text-align: right;
}
#grinfomob{
    display: none;
    height: 25vh;
}
.grmobtext{
    height: 10vh;
}
.grmobicons{
    height: 15vh;
}
.grinfoiconc{
    margin-left: 50%;
    -ms-transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    width: 100%;
    height: 100%;
    border-bottom-style: solid;
    border: solid 1px;
    border-color: grey;
    box-shadow: 5px 8px;
    color: whitesmoke;
}
.grinfoiconc:hover{
    cursor: pointer;
}
.grinfomobicon{
    height: 100%;
    margin-left: 50%;
    -ms-transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
}
.grinfomobicontext{
    margin-top: 1vh;
    text-align: center;
}
@media only screen and (min-width: 992px) and (max-width: 1200px){
    #descriptext{
        font-size: 12px;
    }
    #grlabelname, #grlabelcode, .grvalues {
    line-height: 30px;
    font-size: 30px;
    margin-top: 2vh;
    }
}
@media only screen and (min-width: 576px) and (max-width: 991px) {
    #groveralp1, #groveralp2{
        display: none
    }
    #grinfomob{
        display:block;
    }
}
@media only screen and (min-width: 376px) and (max-width: 576px) {
    #groveralp1, #groveralp2{
        display: none
    }
    #grinfomob{
        width: 100vw;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        margin-top: -20px;
        display: block;
    }
    #grmobtexth2{
        font-size: 24px;
    }
    .grinfomobicontext{
        font-size: 18px;
    }
}
@media only screen and (max-width: 375px) {
    #groveralp1, #groveralp2{
        display: none
    }
    #grinfomob{
        display: block;
        margin-left: 50%;
        -ms-transform: translate(-50%);
        -webkit-transform: translate(-50%);
        -moz-transform: translate(-50%);
        -o-transform: translate(-50%);
        transform: translate(-50%);
        width: 100vw;
        margin-top: -20px;
    }
    #grmobtexth2{
        font-size: 18px;
    }
    .grinfomobicontext{
        font-size: 12.5px;
    }
}
</style>
