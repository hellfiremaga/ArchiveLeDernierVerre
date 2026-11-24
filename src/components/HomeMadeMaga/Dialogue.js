import React from 'react';

function Dialogue(In) {

    const activeId = [
        700441970136580126,
        404058152716206081,
        309407350538895361,
        492339786447585280,
        816024440651382804,
        173512619242684416,
        325677786360709121,
        548633661940039702,
        716320935988166656,
        1029331781670948944,
        189026049995177984,
        643435052692275228,
        1059541254003753020,
        340109497072615425,
        117608997833539590,
        343131915517427712,
        343832806985826309,
        393870471369719809,
        759063129949995099,
        318853974260318208,
        305426696247443459,
        497110008597708810,
        336125681647747074,
        292753929027190785,
        714899165372743721,
        1065376214270885989,
        762791543270408213,
        979793173645787176,
        651887413563621387,
        1254937809035464706,
        580346083478077440,
        1124971279506747463,
        810562658881372181,
    ]

    const hasId = activeId.includes(parseInt(In.id));
    //console.log("id:"+hasId);
    const href_path = hasId ? "/ArchiveLeDernierVerre/docs/FicheDePersonnage/": "/ArchiveLeDernierVerre/docs/FicheDePersonnage/";
    const nom = (In.ficheNom || In.nom).normalize().replaceAll(' ','').replaceAll('"','');
    const href = href_path+"?"+In.id+"="+nom+"#"+In.id;

    /*{hasId && "<a href="+{href}+">"}*/
    return(
        <div class="dialogue">
            <span class="avatar_dialogue">
                {In.id && <a href={href}><img src={In.img}/></a>}
                {!In.id && <img src={In.img}/>}
            </span>
            <h4>
                <span>
                    {In.id && <span class="nom_dialogue"><a href={href}>{In.nom}</a></span>}
                    {!In.id && <span class="nom_dialogue">{In.nom}</span>}
                    <br/>
                </span>
                <br/>
                <span class="heure_dialogue">{In.date}</span><br/>
            </h4>
            <hr/>
            {React.Children.map(In.children, child => {
                return React.cloneElement(child);
            })}
        </div>
    );
}

export default Dialogue;