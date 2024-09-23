import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import waffledesktop from './assets/waffledesktop.jpg';
import Mobilewaffleimg from './assets/Mobilewaffleimg.jpg';
import wafflethumbnail from './assets/wafflethumbnail.jpg';
import bruleedesktop from './assets/bruleedesktop.jpg';
import Mobilecremebruleeimg from './assets/Mobilecremebruleeimg.jpg';
import bruleethumbnail from './assets/bruleethumbnail.jpg';
import macarondesktop from './assets/macarondesktop.jpg';
import Mobilemacaronimg from './assets/Mobilemacaronimg.jpg';
import macaronthumbnail from './assets/macaronthumbnail.jpg';
import tiramisudesktop from './assets/tiramisudesktop.jpg';
import Mobiletiramisuimg from './assets/Mobiletiramisuimg.jpg';
import tiramisuthumbnail from './assets/tiramisuthumbnail.jpg';
import pistachiodesktop from './assets/pistachiodesktop.jpg';
import Mobilepistachioimg from './assets/Mobilepistachioimg.jpg';
import pistachiothumbnail from './assets/pistachiothumbnail.jpg';
import meringuedesktop from './assets/meringuedesktop.jpg';
import Mobilemeringueimg from './assets/Mobilemeringueimg.jpg';
import meringuethumbnail from './assets/meringuethumbnail.jpg';
import desktopcake from './assets/desktopcake.jpg';
import Mobilecakeimg from './assets/Mobilecakeimg.jpg';
import velvetthumbnail from './assets/velvetthumbnail.jpg';
import desktopbrownie from './assets/desktopbrownie.jpg';
import Mobilebrownieimg from './assets/Mobilebrownieimg.jpg';
import browniethumbnail from './assets/browniethumbnail.jpg';
import pannadesktop from './assets/pannadesktop.jpg';
import Mobilepannaimg from './assets/Mobilepannaimg.jpg';
import pannathumbnail from './assets/pannathumbnail.jpg';
import Emptycart from './assets/Emptycart.svg';
import Carbonneutral from './assets/Carbonneutral.svg';
import Orderconfirmedimg from './assets/Orderconfirmedimg.svg';
import Cart from './assets/Cart.svg';

function Productlist(){
    const[count1, setCount1] = useState(0);
    const[text, setText] = useState("");
    let waffle =  "@ $6.50";
    let wafflePrice = 6.50*count1;
    let newWafflePrice = +wafflePrice.toFixed(2);
    
    const[count2, setCount2] = useState(0);
    const[text2, setText2] = useState("");
    let bulee =  "@ $7.00";
    let buleePrice = 7.00*count2;
    let newbuleePrice = +buleePrice.toFixed(2);

    const[count3, setCount3] = useState(0);
    const[text3, setText3] = useState("");
    let macaron =  "@ $8.00";
    let macaronPrice = 8.00*count3;
    let newmacaronPrice = +macaronPrice.toFixed(2);

    const[count4, setCount4] = useState(0);
    const[text4, setText4] = useState("");
    let tiramisu =  "@ $5.50";
    let tiramisuPrice = 5.50*count4;
    let newtiramisuPrice = +tiramisuPrice.toFixed(2);

    const[count5, setCount5] = useState(0);
    const[text5, setText5] = useState("");
    let pistachio =  "@ $4.00";
    let pistachioPrice = 4.00*count5;
    let newpistachioPrice = +pistachioPrice.toFixed(2);

    const[count6, setCount6] = useState(0);
    const[text6, setText6] = useState("");
    let meringue =  "@ $5.00";
    let meringuePrice = 5.00*count6;
    let newmeringuePrice = +meringuePrice.toFixed(2);

    const[count7, setCount7] = useState(0);
    const[text7, setText7] = useState("");
    let velvet =  "@ $4.50";
    let velvetPrice = 4.50*count7;
    let newvelvetPrice = +velvetPrice.toFixed(2);

    const[count8, setCount8] = useState(0);
    const[text8, setText8] = useState("");
    let brownie =  "@ $5.50";
    let browniePrice = 5.50*count8;
    let newbrowniePrice = +browniePrice.toFixed(2);

    const[count9, setCount9] = useState(0);
    const[text9, setText9] = useState("");
    let panna =  "@ $6.50";
    let pannaPrice = 6.50*count9;
    let newpannaPrice = +pannaPrice.toFixed(2); 

        // calculate total number of desserts in the cart
        let totalCount = count1+count2+count3+count4+count5+count6+count7+count8+count9;

        // calculate total order price
        let totalPrice = newWafflePrice + newbuleePrice + newmacaronPrice + newtiramisuPrice + newpistachioPrice + newmeringuePrice + newvelvetPrice + newbrowniePrice + newpannaPrice;
    
        let newtotalPrice = +totalPrice.toFixed(2); 

        const brownieCart = document.getElementById('purchasesdiv8');
        const velvetCart = document.getElementById('purchasesdiv7');    
        const meringueCart = document.getElementById('purchasesdiv6');    
        const pistachioCart = document.getElementById('purchasesdiv5');    
        const tiramisuCart = document.getElementById('purchasesdiv4');    
        const macaronCart = document.getElementById('purchasesdiv3');    
        const bruleeCart = document.getElementById('purchasesdiv2');    
        const waffleCart = document.getElementById('purchasesdiv');
        const pannaCart = document.getElementById('purchasesdiv9');

        // Select all elements with the class name
const elements = document.querySelectorAll('.removeitem');

    // function to handle the increase of dessert order and also add them to cart
    const increment = (id) => {
        document.getElementById("emptycartimg").style.display = "none";
        document.getElementById("emptycartp").style.display = "none";
        document.getElementById("carttotal").style.display = "flex";
        document.getElementById("carbondiv").style.display = "flex";
        document.getElementById("confirmorder").style.display = "flex";
        if(id === "waffleadd"){
            setCount1(c => c+1);
            setText("Waffle with Berries");
            document.getElementById("waffleorder").style.display = "flex";
            document.getElementById("purchasesdiv").style.display = "flex";
            document.getElementById("cartcount").innerText = count1+1+"x";
        }
        else if(id === "cremeadd"){
            setCount2(c => c+1);
            setText2("Vanilla Bean Creme Bulee");
            document.getElementById("cremeorder").style.display = "flex";
            document.getElementById("purchasesdiv2").style.display = "flex";
            document.getElementById("cartcount2").innerText = count2+1+"x";
        }
        else if(id === "macaronadd"){
            setCount3(c => c+1);
            setText3("Macaron Mix of Five");
            document.getElementById("macaronorder").style.display = "flex";
            document.getElementById("purchasesdiv3").style.display = "flex";
            document.getElementById("cartcount3").innerText = count3+1+"x";
        }
        else if(id === "tiramisuadd"){
            setCount4(c => c+1);
            setText4("Classic Tiramisu");
            document.getElementById("tiramisuorder").style.display = "flex";
            document.getElementById("purchasesdiv4").style.display = "flex";
            document.getElementById("cartcount4").innerText = count4+1+"x";
        }
        else if(id === "pistachioadd"){
            setCount5(c => c+1);
            setText5("Pistachio Baklava");
            document.getElementById("pistachioorder").style.display = "flex";
            document.getElementById("purchasesdiv5").style.display = "flex";
            document.getElementById("cartcount5").innerText = count5+1+"x";
        }
        else if(id === "meringueadd"){
            setCount6(c => c+1);
            setText6("Lemon Meringue Pie");
            document.getElementById("meringueorder").style.display = "flex";
            document.getElementById("purchasesdiv6").style.display = "flex";
            document.getElementById("cartcount6").innerText = count6+1+"x";
        }
        else if(id === "velvetadd"){
            setCount7(c => c+1);
            setText7("Red Velvet Cake");
            document.getElementById("velvetorder").style.display = "flex";
            document.getElementById("purchasesdiv7").style.display = "flex";
            document.getElementById("cartcount7").innerText = count7+1+"x";
        }
        else if(id === "carameladd"){
            setCount8(c => c+1);
            setText8("Salted Caramel Brownie");
            document.getElementById("brownieorder").style.display = "flex";
            document.getElementById("purchasesdiv8").style.display = "flex";
            document.getElementById("cartcount8").innerText = count8+1+"x";
        }
        else if(id === "pannaadd"){
            setCount9(c => c+1);
            setText9("Vanilla Panna Cotta");
            document.getElementById("pannaorder").style.display = "flex";
            document.getElementById("purchasesdiv9").style.display = "flex";
            document.getElementById("cartcount9").innerText = count9+1+"x";
        }
    };

    // function to handle decrease of dessert order and remove them from cart
    const decrement = (id) => {
        if(id === "wafflesubtract" && count1 != 0){
            setCount1(c => c-1);
            document.getElementById("cartcount").innerText = count1-1+"x";
        }else if(id === "cremesubtract" && count2 != 0){
            setCount2(c => c-1);
            document.getElementById("cartcount2").innerText = count2-1+"x";
        }else if(id === "macaronsubtract" && count3 != 0){
            setCount3(c => c-1);
            document.getElementById("cartcount3").innerText = count3-1+"x";
        }else if(id === "tiramisusubtract" && count4 != 0){
            setCount4(c => c-1);
            document.getElementById("cartcount4").innerText = count4-1+"x";
        }else if(id === "pistachiosubtract" && count5 != 0){
            setCount5(c => c-1);
            document.getElementById("cartcount5").innerText = count5-1+"x";
        }else if(id === "meringuesubtract" && count6 != 0){
            setCount6(c => c-1);
            document.getElementById("cartcount6").innerText = count6-1+"x";
        }else if(id === "velvetsubtract" && count7 != 0){
            setCount7(c => c-1);
            document.getElementById("cartcount7").innerText = count7-1+"x";
        }else if(id === "caramelsubtract" && count8 != 0){
            setCount8(c => c-1);
            document.getElementById("cartcount8").innerText = count8-1+"x";
        }else if(id === "pannasubtract" && count9 != 0){
            setCount9(c => c-1);
            document.getElementById("cartcount9").innerText = count9-1+"x";
        }

    };


      function selectImg() {
        document.getElementById("mobileimg").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p1").style.marginTop = "-4rem";
        document.getElementById("amountdiv").style.display = "flex"
    } 

    function selectImg2() {
        document.getElementById("mobileimg2").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p2").style.marginTop = "-4rem";
        document.getElementById("amountdiv2").style.display = "flex"
    }

    function selectImg3() {
        document.getElementById("mobileimg3").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p3").style.marginTop = "-4rem";
        document.getElementById("amountdiv3").style.display = "flex"
    }

    function selectImg4() {
        document.getElementById("mobileimg4").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p4").style.marginTop = "-4rem";
        document.getElementById("amountdiv4").style.display = "flex"
    }

    function selectImg5() {
        document.getElementById("mobileimg5").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p5").style.marginTop = "-4rem";
        document.getElementById("amountdiv5").style.display = "flex"
    }

    function selectImg6() {
        document.getElementById("mobileimg6").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p6").style.marginTop = "-4rem";
        document.getElementById("amountdiv6").style.display = "flex"
    }

    function selectImg7() {
        document.getElementById("mobileimg7").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p7").style.marginTop = "-4rem";
        document.getElementById("amountdiv7").style.display = "flex"
    }

    
    function selectImg8() {
        document.getElementById("mobileimg8").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p8").style.marginTop = "-4rem";
        document.getElementById("amountdiv8").style.display = "flex"
    }

    function selectImg9() {
        document.getElementById("mobileimg9").style.border = "2px solid hsl(14, 86%, 42%)"
        document.getElementById("p9").style.marginTop = "-4rem";
        document.getElementById("amountdiv9").style.display = "flex"
    } 

    function removeItem(id){
        if(id === "removeitem1"){
            document.getElementById("purchasesdiv").style.display = "none";
            document.getElementById("waffleorder").style.display = "none";
            newWafflePrice=0;
            setCount1(0);
        }else if(id === "removeitem2"){
            document.getElementById("purchasesdiv2").style.display = "none";
            document.getElementById("cremeorder").style.display = "none";
            newbuleePrice = 0;
            setCount2(0);
        }else if(id === "removeitem3"){
            document.getElementById("purchasesdiv3").style.display = "none";
            document.getElementById("macaronorder").style.display = "none";
            newmacaronPrice = 0;
            setCount3(0);
        }else if(id === "removeitem4"){
            document.getElementById("purchasesdiv4").style.display = "none";
            document.getElementById("tiramisuorder").style.display = "none";
            newtiramisuPrice = 0;
            setCount4(0);
        }else if(id === "removeitem5"){
            document.getElementById("purchasesdiv5").style.display = "none";
            document.getElementById("pistachioorder").style.display = "none";
            newpistachioPrice= 0;
            setCount5(0);
        }else if(id === "removeitem6"){
            document.getElementById("purchasesdiv6").style.display = "none";
            document.getElementById("meringueorder").style.display = "none";
            newmeringuePrice= 0;
            setCount6(0);
        }else if(id === "removeitem7"){
            document.getElementById("purchasesdiv7").style.display = "none";
            document.getElementById("velvetorder").style.display = "none";
            newvelvetPrice= 0;
            setCount7(0);
        }else if(id === "removeitem8"){
            document.getElementById("purchasesdiv8").style.display = "none";
            document.getElementById("brownieorder").style.display = "none";
            newbrowniePrice= 0;
            setCount8(0);
        }else if(id === "removeitem9"){
            document.getElementById("purchasesdiv9").style.display = "none";
            document.getElementById("pannaorder").style.display = "none";
            newpannaPrice= 0;
            setCount9(0);
        }
    }
    
    function confirmOrder() {
      // Loop through the NodeList and remove each element
      elements.forEach((element) => {
        element.remove();
      });

      if(window.innerWidth <=1440){
      document.getElementById("overlay").style.display = "flex";
      document.getElementById("cartdiv").style.position = "fixed";
      document.getElementById("cartdiv").style.bottom = "0";
      document.getElementById("cartdiv").style.left = "0";
      document.getElementById("cartdiv").style.width = "calc(100vw)";
      document.getElementById("cartdiv").style.height = "70vh";
      document.getElementById("cartdiv").style.overflowY = "auto";
      document.getElementById("cartdiv").style.padding = "1rem";
      document.getElementById("cartdiv").style.boxSizing = "border-box";
      document.getElementById("cartdiv").style.zIndex = "1000";
      document.getElementById("orderconfirmimg").style.display = "flex";
      document.getElementById("confirmp").style.display = "flex";
      document.getElementById("enjoyp").style.display = "flex";
      document.getElementById("carth1").style.display = "none";
      document.getElementById("confirmorder").style.display = "none";
      document.getElementById("startneworder").style.display = "flex";
      }else {
        document.getElementById("overlay").style.display = "flex";
        document.getElementById("cartdiv").style.position = "fixed";
        document.getElementById("cartdiv").style.top = "50%";
        document.getElementById("cartdiv").style.left = "50%";
        document.getElementById("cartdiv").style.transform = "translate(-50%, -50%)";
        document.getElementById("cartdiv").style.height = "50vh"; 
        document.getElementById("cartdiv").style.width = "22vw";
        document.getElementById("cartdiv").style.overflowY = "auto";  
        document.getElementById("cartdiv").style.overflowX = "hidden";  
        document.getElementById("cartdiv").style.borderTopRightRadius = "20px";  
        document.getElementById("cartdiv").style.padding = "1rem";
        document.getElementById("cartdiv").style.boxSizing = "border-box";
        document.getElementById("cartdiv").style.zIndex = "1000";
        document.getElementById("orderconfirmimg").style.display = "flex";
        document.getElementById("confirmp").style.display = "flex";
        document.getElementById("enjoyp").style.display = "flex";
        document.getElementById("carth1").style.display = "none";
        document.getElementById("confirmorder").style.display = "none";
        document.getElementById("startneworder").style.display = "flex";
        document.getElementById("startneworder").style.marginLeft = "0.7rem";
        document.getElementById("carbonneutralp").style.display = "none";
        document.getElementById("carbonneutralimg").style.display = "none";
      }

      if(waffleCart){
        const computedStyle = window.getComputedStyle(waffleCart);
        const ids = ["cartcount", "waffleprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('wafflethumbnail').style.display = "flex";
            document.getElementById('wafflethumbnail').style.marginBottom = "-2rem";
            document.getElementById('waffleorder').style.position = "relative";
            document.getElementById('waffleorder').style.left = "4rem";
            document.getElementById('waffleorder').style.bottom = "2.5rem";
            document.getElementById('waffleprice').style.position = "relative";
            document.getElementById('waffleprice').style.left = "10rem";
            document.getElementById('waffleprice').style.bottom = "2.5rem";
            
        }
      }

      if(bruleeCart){
        const computedStyle = window.getComputedStyle(bruleeCart);
        const ids = ["cartcount2", "buleeprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('bruleethumbnail').style.display = "flex";
            document.getElementById('bruleethumbnail').style.marginBottom = "-2rem";
            document.getElementById('cremeorder').style.position = "relative";
            document.getElementById('cremeorder').style.left = "4rem";
            document.getElementById('cremeorder').style.bottom = "2.5rem";
            document.getElementById('buleeprice').style.position = "relative";
            document.getElementById('buleeprice').style.left = "10rem";
            document.getElementById('buleeprice').style.bottom = "2.5rem";
            
        }
      }

      if(macaronCart){
        const computedStyle = window.getComputedStyle(macaronCart);
        const ids = ["cartcount3", "macaronprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('macaronthumbnail').style.display = "flex";
            document.getElementById('macaronthumbnail').style.marginBottom = "-2rem";
            document.getElementById('macaronorder').style.position = "relative";
            document.getElementById('macaronorder').style.left = "4rem";
            document.getElementById('macaronorder').style.bottom = "2.5rem";
            document.getElementById('macaronprice').style.position = "relative";
            document.getElementById('macaronprice').style.left = "10rem";
            document.getElementById('macaronprice').style.bottom = "2.5rem";
            
        }
      }

      if(tiramisuCart){
        const computedStyle = window.getComputedStyle(tiramisuCart);
        const ids = ["cartcount4", "tiramisuprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('tiramisuthumbnail').style.display = "flex";
            document.getElementById('tiramisuthumbnail').style.marginBottom = "-2rem";
            document.getElementById('tiramisuorder').style.position = "relative";
            document.getElementById('tiramisuorder').style.left = "4rem";
            document.getElementById('tiramisuorder').style.bottom = "2.5rem";
            document.getElementById('tiramisuprice').style.position = "relative";
            document.getElementById('tiramisuprice').style.left = "10rem";
            document.getElementById('tiramisuprice').style.bottom = "2.5rem";
            
        }
      }

      if(pistachioCart){
        const computedStyle = window.getComputedStyle(pistachioCart);
        const ids = ["cartcount5", "pistachioprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('pistachiothumbnail').style.display = "flex";
            document.getElementById('pistachiothumbnail').style.marginBottom = "-2rem";
            document.getElementById('pistachioorder').style.position = "relative";
            document.getElementById('pistachioorder').style.left = "4rem";
            document.getElementById('pistachioorder').style.bottom = "2.5rem";
            document.getElementById('pistachioprice').style.position = "relative";
            document.getElementById('pistachioprice').style.left = "10rem";
            document.getElementById('pistachioprice').style.bottom = "2.5rem";
            
        }
      }

      if(meringueCart){
        const computedStyle = window.getComputedStyle(meringueCart);
        const ids = ["cartcount6", "meringueprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('meringuethumbnail').style.display = "flex";
            document.getElementById('meringuethumbnail').style.marginBottom = "-2rem";
            document.getElementById('meringueorder').style.position = "relative";
            document.getElementById('meringueorder').style.left = "4rem";
            document.getElementById('meringueorder').style.bottom = "2.5rem";
            document.getElementById('meringueprice').style.position = "relative";
            document.getElementById('meringueprice').style.left = "10rem";
            document.getElementById('meringueprice').style.bottom = "2.5rem";
            
        }
      }

      if(velvetCart){
        const computedStyle = window.getComputedStyle(velvetCart);
        const ids = ["cartcount7", "velvetprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('velvetthumbnail').style.display = "flex";
            document.getElementById('velvetthumbnail').style.marginBottom = "-2rem";
            document.getElementById('velvetorder').style.position = "relative";
            document.getElementById('velvetorder').style.left = "4rem";
            document.getElementById('velvetorder').style.bottom = "2.5rem";
            document.getElementById('velvetprice').style.position = "relative";
            document.getElementById('velvetprice').style.left = "10rem";
            document.getElementById('velvetprice').style.bottom = "2.5rem";
            
        }
      }

      if(brownieCart){
        const computedStyle = window.getComputedStyle(brownieCart);
        const ids = ["cartcount8", "brownieprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.bottom = "2.5rem";
                }
            })
            document.getElementById('browniethumbnail').style.display = "flex";
            document.getElementById('browniethumbnail').style.marginBottom = "-2rem";
            document.getElementById('brownieorder').style.position = "relative";
            document.getElementById('brownieorder').style.left = "4rem";
            document.getElementById('brownieorder').style.bottom = "2.5rem";
            document.getElementById('brownieprice').style.position = "relative";
            document.getElementById('brownieprice').style.left = "10rem";
            document.getElementById('brownieprice').style.bottom = "2.5rem";
            
        }
      }

      if(pannaCart){
        const computedStyle = window.getComputedStyle(pannaCart);
        const ids = ["cartcount9", "pannaprice1"];

        if(computedStyle.display === 'flex'){

            ids.forEach(id => {
                const element = document.getElementById(id);
                if(element){
                    element.style.position = "relative";
                    element.style.left = "4rem";
                    element.style.top = "1rem";
                }
            })

            document.getElementById('pannathumbnail').style.display = "flex";
            document.getElementById('pannaorder').style.position = "relative";
            document.getElementById('pannaorder').style.left = "4rem";
            document.getElementById('pannaorder').style.top = "1.5rem";
            document.getElementById('pannaprice').style.position = "relative";
            document.getElementById('pannaprice').style.left = "10rem";
            document.getElementById('pannaprice').style.top = "1rem";
        }
      }
    }

    return(
        <>
        <h1 className="heading">Desserts</h1>
        <div className='maindiv' id='dessertoptions'>
            <div  className="dessert">
                <img className='desktopimg' src={waffledesktop} alt="waffle" />
                <img id='mobileimg' className='mobile_pic' src={Mobilewaffleimg} alt="Waffle-mobile"/>
                <div id='first-add' onClick={selectImg} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv' className='amountdiv'>
                <FontAwesomeIcon id='wafflesubtract' onClick={() => decrement("wafflesubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count1}</p>
                <FontAwesomeIcon id='waffleadd' onClick={() => increment("waffleadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p1' className='p1'>Waffle</p>
                <p className='p2'>Waffle with Berries</p>
                <p className='p3'>$6.50</p>
            </div>

            <div className="dessert">
                <img className='desktopimg' src={bruleedesktop} alt="brulee" />
                <img id='mobileimg2' className='mobile_pic' src={Mobilecremebruleeimg} alt="Cremebulee-img"/>
                <div onClick={selectImg2} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv2' className='amountdiv'>
                <FontAwesomeIcon id='cremesubtract' onClick={() => decrement("cremesubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count2}</p>
                <FontAwesomeIcon id='cremeadd' onClick={() => increment("cremeadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p2' className='p1'>Creme Brulee</p>
                <p className='p2'>Vanilla Bean Creme Brulee</p>
                <p className='p3'>$7.00</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={macarondesktop} alt="macaron" />
                <img id='mobileimg3' className='mobile_pic' src={Mobilemacaronimg} alt="Macaron-img"/>
                <div onClick={selectImg3} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv3' className='amountdiv'>
                <FontAwesomeIcon onClick={() => decrement("macaronsubtract")} id='macaronsubtract' className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count3}</p>
                <FontAwesomeIcon onClick={() => increment("macaronadd")} id='macaronadd' className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p3' className='p1'>Macaron</p>
                <p className='p2'>Macaron Mix of Five</p>
                <p className='p3'>$8.00</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={tiramisudesktop} alt="tiramisu" />
                <img id='mobileimg4' className='mobile_pic' src={Mobiletiramisuimg} alt="Tiramisu-img"/>
                <div onClick={selectImg4} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv4' className='amountdiv'>
                <FontAwesomeIcon onClick={() => decrement("tiramisusubtract")} id='tiramisusubtract' className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count4}</p>
                <FontAwesomeIcon onClick={() => increment("tiramisuadd")} id='tiramisuadd' className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p4' className='p1'>Tiramisu</p>
                <p className='p2'>Classic Tiramisu</p>
                <p className='p3'>$5.50</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={pistachiodesktop} alt="pistachio" />
                <img id='mobileimg5' className='mobile_pic' src={Mobilepistachioimg} alt="Pistachio-img"/>
                <div onClick={selectImg5} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv5' className='amountdiv'>
                <FontAwesomeIcon id='pistachiosubtract' onClick={() => decrement("pistachiosubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count5}</p>
                <FontAwesomeIcon id='pistachioadd' onClick={() => increment("pistachioadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p5' className='p1'>Baklava</p>
                <p className='p2'>Pistachio Baklava</p>
                <p className='p3'>$4.00</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={meringuedesktop} alt="meringue" />
                <img id='mobileimg6' className='mobile_pic' src={Mobilemeringueimg} alt="Meringue-img"/>
                <div onClick={selectImg6} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv6' className='amountdiv'>
                <FontAwesomeIcon id='meringuesubtract' onClick={() => decrement("meringuesubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count6}</p>
                <FontAwesomeIcon id='meringueadd' onClick={() => increment("meringueadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p6' className='p1'>Pie</p>
                <p className='p2'>Lemon Meringue Pie</p>
                <p className='p3'>$5.00</p>
            </div>

            <div className="dessert">
                <img className='desktopimg' src={desktopcake} alt="velvetcake" />
                <img id='mobileimg7' className='mobile_pic' src={Mobilecakeimg} alt="Meringue-img"/>
                <div onClick={selectImg7} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv7' className='amountdiv'>
                <FontAwesomeIcon id='velvetsubtract' onClick={() => decrement("velvetsubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count7}</p>
                <FontAwesomeIcon id='velvetadd' onClick={() => increment("velvetadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p7' className='p1'>Cake</p>
                <p className='p2'>Red Velvet Cake</p>
                <p className='p3'>$4.50</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={desktopbrownie} alt="brownie" />
                <img id='mobileimg8' className='mobile_pic' src={Mobilebrownieimg} alt="Brownie-img"/>
                <div onClick={selectImg8} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv8' className='amountdiv'>
                <FontAwesomeIcon id='caramelsubtract' onClick={() => decrement("caramelsubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count8}</p>
                <FontAwesomeIcon id='carameladd' onClick={() => increment("carameladd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p8' className='p1'>Brownie</p>
                <p className='p2'>Salted Caramel Brownie</p>
                <p className='p3'>$5.50</p>
            </div>

            <div className="dessert">
            <img className='desktopimg' src={pannadesktop} alt="panna" />
                <img id='mobileimg9' className='mobile_pic' src={Mobilepannaimg} alt="Panna-img"/>
                <div onClick={selectImg9} className='addcartdiv'>
                    <img className='cartimg' src={Cart} alt="Add" /> 
                    <p className='addtext'>Add to cart</p>
                </div>
                <div id='amountdiv9' className='amountdiv'>
                <FontAwesomeIcon id='pannasubtract' onClick={() => decrement("pannasubtract")} className='minus' icon={faCircleMinus} size='lg' color='white' />
                <p className='amount'>{count9}</p>
                <FontAwesomeIcon id='pannaadd' onClick={() => increment("pannaadd")} className='plus' icon={faCirclePlus} size='lg' color='white'/>
                </div>
                <p id='p9' className='p1'>Panna Cotta</p>
                <p className='p2'>Vanilla Panna Cotta</p>
                <p className='p3'>$6.50</p>
            </div>
        </div>

        <div id='overlay' className='overlay'></div>

        <div id='cartdiv' className='cartdiv'>
        <img className='orderimg' id='orderconfirmimg' src={Orderconfirmedimg} alt="Order confirmed" />
        <p id='confirmp' className='confirmp'>Order Confirmed</p>
        <p id='enjoyp' className='enjoyp'>We hope you enjoy your food!</p>

            <h1 id='carth1' className='cartamount'>Your Cart ({totalCount})</h1>
            <img className='emptycartimg' id='emptycartimg' src={Emptycart} alt="Empty cart" />
            <p className='emptycartp' id='emptycartp'>Your items will appear here</p>

            <img className='thumbnail' id='wafflethumbnail' src={wafflethumbnail} alt="thumbnail" />
            <p id='waffleorder' className='dessertname'>{text}</p>
            <div id='purchasesdiv' className='purchasesdiv'>
            <p className='cartcount' id='cartcount'></p>
            <p id='waffleprice1' className='waffleprice1'>{waffle}</p>
            <p id='waffleprice' className='waffleprice'>${newWafflePrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem1")} id='removeitem1' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='bruleethumbnail' src={bruleethumbnail} alt="thumbnail" />
            <p id='cremeorder' className='dessertname'>{text2}</p>
            <div id='purchasesdiv2' className='purchasesdiv2'>
            <p className='cartcount2' id='cartcount2'></p>
            <p id='buleeprice1' className='buleeprice1'>{bulee}</p>
            <p id='buleeprice' className='buleeprice'>${newbuleePrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem2")} id='removeitem2' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='macaronthumbnail' src={macaronthumbnail} alt="thumbnail" />
            <p id='macaronorder' className='dessertname'>{text3}</p>
            <div id='purchasesdiv3' className='purchasesdiv3'>
            <p className='cartcount3' id='cartcount3'></p>
            <p id='macaronprice1' className='macaronprice1'>{macaron}</p>
            <p id='macaronprice' className='macaronprice'>${newmacaronPrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem3")} id='removeitem3' className='removeitem' icon={faXmark} />
            </div>
            
            <img className='thumbnail' id='tiramisuthumbnail' src={tiramisuthumbnail} alt="thumbnail" />
            <p id='tiramisuorder' className='dessertname'>{text4}</p>
            <div id='purchasesdiv4' className='purchasesdiv4'>
            <p className='cartcount4' id='cartcount4'></p>
            <p id='tiramisuprice1' className='tiramisuprice1'>{tiramisu}</p>
            <p id='tiramisuprice' className='tiramisuprice'>${newtiramisuPrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem4")} id='removeitem4' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='pistachiothumbnail' src={pistachiothumbnail} alt="thumbnail" />
            <p id='pistachioorder' className='dessertname'>{text5}</p>
            <div id='purchasesdiv5' className='purchasesdiv5'>
            <p className='cartcount5' id='cartcount5'></p>
            <p id='pistachioprice1' className='pistachioprice1'>{pistachio}</p>
            <p id='pistachioprice' className='pistachioprice'>${newpistachioPrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem5")}  id='removeitem5' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='meringuethumbnail' src={meringuethumbnail} alt="thumbnail" />
            <p id='meringueorder' className='dessertname'>{text6}</p>
            <div id='purchasesdiv6' className='purchasesdiv6'>
            <p className='cartcount6' id='cartcount6'></p>
            <p id='meringueprice1' className='meringueprice1'>{meringue}</p>
            <p id='meringueprice' className='meringueprice'>${newmeringuePrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem6")}  id='removeitem6' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='velvetthumbnail' src={velvetthumbnail} alt="thumbnail" />
            <p id='velvetorder' className='dessertname'>{text7}</p>
            <div id='purchasesdiv7' className='purchasesdiv7'>
            <p className='cartcount7' id='cartcount7'></p>
            <p id='velvetprice1' className='velvetprice1'>{velvet}</p>
            <p id='velvetprice' className='velvetprice'>${newvelvetPrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem7")} id='removeitem7' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='browniethumbnail' src={browniethumbnail} alt="thumbnail" />
            <p id='brownieorder' className='dessertname'>{text8}</p>
            <div id='purchasesdiv8' className='purchasesdiv8'>
            <p className='cartcount8' id='cartcount8'></p>
            <p id='brownieprice1' className='brownieprice1'>{brownie}</p>
            <p id='brownieprice' className='brownieprice'>${newbrowniePrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem8")} id='removeitem8' className='removeitem' icon={faXmark} />
            </div>

            <img className='thumbnail' id='pannathumbnail' src={pannathumbnail} alt="thumbnail" />
            <p id='pannaorder' className='dessertname'>{text9}</p>
            <div id='purchasesdiv9' className='purchasesdiv9'>
            <p className='cartcount9' id='cartcount9'></p>
            <p id='pannaprice1' className='pannaprice1'>{panna}</p>
            <p id='pannaprice' className='pannaprice'>${newpannaPrice}</p>
            <FontAwesomeIcon onClick={() => removeItem("removeitem9")} id='removeitem9' className='removeitem' icon={faXmark} /> 
            </div>
          
            
            <div id='carttotal' className='carttotal'>
            <p className='order'>Order Total</p>
            <p id='ordertotal' className='ordertotal'>${newtotalPrice}</p>
            </div>

            <button onClick={() => {
                location.reload();
            }} id='startneworder' className='neworderbtn'>Start New Order</button>
        </div>

        <div id='carbondiv' className='carbondiv'>
        <img id='carbonneutralimg' src={Carbonneutral} alt="Carbon neutral" />
            <p id='carbonneutralp'>This is a carbon-neutral delivery</p>
        </div>

        <button onClick={confirmOrder} id='confirmorder' className='confirmbtn'>Confirm Order</button>
        </>
    );
}

export default Productlist;