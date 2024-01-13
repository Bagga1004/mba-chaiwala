import React from 'react';

const Footer = () => {

const footerLinks = (element)=>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");

    switch(element){
        case 0:
            allFooterLinks.forEach((item , index) =>
            index === 0 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
            );
            break;
          
        case 1:
             allFooterLinks.forEach((item , index) =>
                index === 1 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
                );
                break;
        case 2:
                 allFooterLinks.forEach((item , index) =>
                    index === 2 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
                    );
                    break;  
                    
        case 3:
             allFooterLinks.forEach((item , index) =>
             index === 3 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
              );
             break;    
             
         case 4:
            allFooterLinks.forEach((item , index) =>
            index === 4 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
            );
            break;

         case 5:
             allFooterLinks.forEach((item , index) =>
                index === 5 ? (item.style.opacity = 1):(item.style.opacity = 0.2)
                );
                break;   
                

         default:
            allFooterLinks.forEach((item ) =>
               (item.style.opacity = 1)
                );
            break;   
    }

}

 const linkBackToNormal = ()=>{
    const allFooterLinks = document.querySelectorAll(".footerLinks");
    allFooterLinks.forEach((item) => (item.style.opacity = 1));
}

  return (
    <>
    <footer>
        <h1>
            Lets'
            <br/>
            #ConnectOnCutting?
        </h1>

   <aside onMouseLeave={linkBackToNormal}>
    <a href="/" className="footerLinks" onMouseOver={()=>footerLinks(0)}>Home</a>
    <a href="/story" className="footerLinks"  onMouseOver={()=>footerLinks(1)}>Story</a>
    <a href="/media" className="footerLinks"  onMouseOver={()=>footerLinks(2)}>Media</a>
    <a href="/franchise" className="footerLinks"  onMouseOver={()=>footerLinks(3)}>Franchise</a>
    <a href="/events" className="footerLinks"  onMouseOver={()=>footerLinks(4)}>Events</a>
    <a href="/chaiwalacares" className="footerLinks"  onMouseOver={()=>footerLinks(5)}>Chai Wala Cares</a>
   </aside>

   <div>

<h5>Email</h5>
<a href='mailto: info@mbachaiwala.com'>info@mbachaiwala.com</a>
</div>

   <div>

    <h5>Phone</h5>
    <a href='tel: +919650485254'>+919650485254</a>
   </div>

<p>COPYRIGHT 2024 MBA CHAIWALA</p>
    </footer>

    <div className="footer"></div>
    </>
  );
}

export default Footer;
