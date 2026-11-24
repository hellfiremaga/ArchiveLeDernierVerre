import React, { useEffect, useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function Persos(In) {
    //FIN DE MON CODE
    
      const [activeTab, setActiveTab] = useState('');

      useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash.substring(1);
          if (hash) {
            const [tabId] = hash.split('-');
            //console.log('activeTab avant appel :'+activeTab)
            setActiveTab(tabId); // Activer le bon onglet
            //console.log('activeTab après appel :'+activeTab)
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        };
    
        handleHashChange(); // Appel initial pour gérer les ancres lors du chargement de la page
        window.addEventListener('hashchange', handleHashChange);
    
        return () => window.removeEventListener('hashchange', handleHashChange);
      }, []);
    
     
    
    // DEBUT DE MON CODE
    var htmlstring;
    htmlstring = "<div id=\""+In.id+"\"><Tabs queryString=\""+In.id+"\">";
    //console.log('queryString : '+In.id)

    In.perso.forEach(personnage => {
        
        var nom_lien = In.id+"_"+personnage.nom.replaceAll(' ','').replaceAll('"','');

        // Initialisation du TabItem
        htmlstring += "<TabItem label='"+personnage.nom.replaceAll("'","&#39")+"' value=\""+personnage.nom.replaceAll(' ','').replaceAll('"','')+"\">";
        //console.log('item value : '+personnage.nom.replaceAll(' ','').replaceAll('"','').toLowerCase())

        // Création du code
        htmlstring += 
        "<div style=\"display:flex; flexWrap:wrap\">"+
            "<div>"+
                "<div class=\"alignCenter\" style=\"paddingTop:10px; paddingBottom:10px; paddingLeft:10px; paddingRight:10px\">"+
                    "<img style=\"height:250px; width:150px; objectFit:cover; border:1px solid #000\""+
                         "src=\""+personnage.image+"\" title=\""+personnage.nom.replaceAll('"','')+"\" alt=\""+personnage.nom.replaceAll('"','')+"\"/>"+
                "</div>"+
            "</div>"+
            "<div style=\"width:400px; paddingTop:20px; paddingBottom:20px; paddingLeft:5px; paddingRight:5px\">";

        // Création du nom (HTML)
        var tmp1 = "";
        var tmp2 = "";
        if(personnage.dep_arr.length % 2 == 0){
            tmp1="<i>";
            tmp2="</i>";
        }
        htmlstring += "<h3 id=\""+nom_lien+"\">"+tmp1+personnage.nom+tmp2+'</h3>';

        // Création du statut (HTML)
        for (let i = 0; i < personnage.dep_arr.length; ++i) {
            var date = personnage.dep_arr[i];
            if(i % 2 == 0){
                htmlstring +="Fiche validée le "+date+"<br/>"
                if(i == personnage.dep_arr.length - 1){
                    htmlstring += "Statut : <span style=\"color: #0b0\">actif</span><br/>";
                }
            }else{
                htmlstring += "Statut : <span style=\"color: #b00\">"+date+"</span><br/>";
            }
        }

        //finalisation par le bouton (si fiche présente)
        if(personnage.lien){
            htmlstring += "<form action=\""+personnage.lien+"\" target=\"_blank\">"+
                            "<button "+
                                "style=\""+
                                "backgroundColor:#7289da; "+
                                "borderRadius:30px; "+
                                "color:white; "+
                                "cursor:pointer; "+
                                "margin:20px; "+
                                "padding:10px; "+
                                "\">Lien vers la fiche</button>"+
                        "</form>";
        }
        if(personnage.tag){
          htmlstring += "<form action=\""+"/ArchiveLeDernierVerre/docs/tags/"+personnage.tag+"\" target=\"_blank\">"+
                        "<button "+
                            "style=\""+
                            "backgroundColor:#7289da; "+
                            "borderRadius:30px; "+
                            "color:white; "+
                            "cursor:pointer; "+
                            "margin:20px; "+
                            "padding:10px; "+
                            "\">Voir ses RP</button>"+
                      "</form>";
        }else{
          var lien_local = personnage.nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll(' ','').replaceAll('"','')
          htmlstring += "<form action=\""+"/ArchiveLeDernierVerre/docs/tags/"+lien_local+"\" target=\"_blank\">"+
                        "<button "+
                            "style=\""+
                            "backgroundColor:#7289da; "+
                            "borderRadius:30px; "+
                            "color:white; "+
                            "cursor:pointer; "+
                            "margin:20px; "+
                            "padding:10px; "+
                            "\">Voir ses RP</button>"+
                      "</form>";
        }

        // Finalisation
        htmlstring += "</div></div>";
        

        // Initialisation du TabItem
        htmlstring += "</TabItem>";

    });
    htmlstring += "</Tabs></div>";

    // renvoi du code qui convient
    //return htmlstring;
    //return parse(htmlstring);

    //console.log('htmlstring : '+htmlstring)

    const options = {
        replace: domNode => {
          if (domNode.name === 'tabs') {
            //console.log('attrib'+JSON.stringify(domNode.attribs))
            return <Tabs queryString={In.id} {...domNode.attribs}>{domToReact(domNode.children, options)}</Tabs>;
          }
          if (domNode.name === 'tabitem') {
            return <TabItem {...domNode.attribs}>{domToReact(domNode.children, options)}</TabItem>;
          }
        }
    };

    return parse(htmlstring, options);
}

export default Persos;