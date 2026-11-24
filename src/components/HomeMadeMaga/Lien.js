import React from 'react';

export default function lien({personnage, date, repertoire}) {
    var jour = date.split('/')[0];
    var mois = date.split('/')[1];
    var annee = date.split('/')[2];

    var nom_fichier = "/ArchiveLeDernierVerre/docs/Archives/"+repertoire+"/"+annee+"-"+mois+"-"+jour;
    var nom_persos = "";
    for (let p = 0; p < personnage.length; ++p){
        nom_fichier += "_"+personnage[p].normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ")[0];
        if(p==0){
            nom_persos += personnage[p];
        }else{
            nom_persos += " x "+personnage[p];
        }
    }
    return (<span data-c1={personnage[0]} data-c2={personnage[1]} hidden>
        <br/><br/>
        <a href={nom_fichier}>{date} - {nom_persos}</a>
    </span>);
}