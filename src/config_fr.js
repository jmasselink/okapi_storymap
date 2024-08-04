var config = {
    style: 'mapbox://styles/jmasselink/cldzeoc0g005e01lc5830y7pr',
    accessToken: 'pk.eyJ1Ijoiam1hc3NlbGluayIsImEiOiJjbGU3eWllcmcwYTJnM29taG51dnV4NDhxIn0.fvnE_Pf3T6kKOt7TUeuubw',
    NICFI_API_KEY: 'PLAK4a3933f7143c4215ba8d61bf91d397d4',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',//'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Une mine grandit dans la forêt...',
    // subtitle: '...and no one pays attention',
    byline: 'par Joël Masselink',
    footer: 'Sources: Planet Imagery (NICFI), Global Forest Watch, World Database on Protected Areas, OpenStreetMap contributors, DRC Mining Cadastre<br> Crée en utilisant <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> exemplaire. Source de l\'icône du drapeau: <a href="https://www.freeflagicons.com">Free Flag Icons</a>',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'RDC : une nation mégadiverse aux contrastes abondants',
            // image: './path/to/image/source.png',
            description: "La République Démocratique du Congo est bénie par sa biodiversité, ses ressources naturelles abondantes et ses écosystèmes diversifiés. Accueillant environ 100 millions de personnes, la RDC a une population jeune et en croissance rapide, représentant des centaines de groupes ethniques. Malgré ces caractéristiques, la RDC se classe presque au bas du <a href='https://hdr.undp.org/data-center/specific-country-data#/countries/COD'>Indice de Développement Humain</a> (179/191) et la majorité de sa population vit dans une pauvreté extrême.",
            location: {
                center: [21, -3],
                zoom: 4,
                pitch: 20,
                bearing: 0
            },
            // mosaic: 'Jun 2021',
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'admin-1-boundary',
                    opacity: 0,
                },
                {
                    layer: 'admin-1-boundary-bg',
                    opacity: 0,
                },
                {
                    layer: 'active-exploitation-line',
                    opacity: 0,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0,
                },
                {
                    layer: 'research-application',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0,
                },
                {
                    layer: 'rfo-cami',
                    opacity: 0,
                },
                {
                    layer: 'settlement-major-label',
                    opacity: 0.0,
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.0,
                },
                {
                    layer: 'unesco-sites',
                    opacity: 0.0,
                },
                {
                    layer: 'unesco-sites-label',
                    opacity: 0.0,
                },
                {
                    layer: 'poi-label',
                    opacity: 0.0,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-sw-tracks',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2020',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2023',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 0.0,
                },
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.3, 
                },
                {
                    layer: 'label-drc',
                    opacity: 0.0, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 0.0, 
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            hidden: false,
            title: 'La Forêt de l\'Ituri et les Communautés Autochtones',
            image: '../assets/JoelMasselink_Mbuti_Girls2.JPG',
            description: "La forêt d'Ituri, située au nord-est de la RDC, est le foyer des communautés indigènes Mbuti et Efe, qui y vivent depuis des dizaines de milliers d'années. Ils pratiquent des cérémonies culturelles et des rites, et subsistent principalement grâce à la chasse et à la cueillette. Les Mbuti et Efe vivent dans des camps temporaires se déplaçant entre les périphéries des villages et le cœur de la forêt. Ces communautés ont un profond respect pour l'okapi, un proche parent de la girafe, qui habite principalement les zones denses et basses de la forêt d'Ituri. Malgré leurs compétences en chasse, ils évitent de chasser l'okapi par révérence pour cet animal.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 7,
                pitch: 5,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            // mosaic: 'Jun 2021',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.4, 
                },
                {
                    layer: 'label-drc',
                    opacity: 1, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 1, 
                },
            ],
            onChapterExit: [
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.3, 
                },
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: 'Création de la Réserve de Faune à Okapis',
            image: '../assets/JoelMasselink_Okapi.JPG',
            description: "La Réserve de Faune à Okapis (RFO) a été créée en 1992 pour protéger le mode de vie unique des peuples autochtones, la faune et l'écosystème de la forêt d'Ituri. Zone protégée à usage mixte, la Réserve protège 13 726 km² (5 125 milles carrés). Cette réserve importante protège également les droits d'accès aux terres arables pour les communautés horticoles bantoues autochtones. <p>En 1996, la RFO a été inscrite au patrimoine mondial de l'UNESCO, en raison de ses habitats naturels les plus importants et significatifs pour la conservation in situ de la biodiversité des espèces menacées. La Réserve abrite des populations importantes d'éléphants de forêt africains, d'okapis et de chimpanzés de l'est, ainsi que 12 autres espèces de primates diurnes et quatre espèces de primates nocturnes, la classant comme la principale zone protégée en Afrique subsaharienne en termes de diversité des primates (17 espèces au total).",
            location: {
                center: [28.131101, 1.531721],
                zoom: 7.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poi-label',
                    opacity: 1.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.6,
                },
                {
                    layer: 'landcover',
                    opacity: 0.2, 
                },
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.4,
                },


                {
                    layer: 'waterway',
                    opacity: 0.2,
                },
            ]
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: 'Défis dans la Réserve',
            image: '../assets/JoelMasselink_ForestElephant.JPG',
            description: "La Réserve contient de nombreux petits villages, et la gestion de la réserve a la tâche délicate d'impliquer les communautés dans la conservation tout en limitant l'utilisation des terres et des ressources non compatibles. L'histoire de la réserve a été marquée par des épisodes de braconnage militarisé des éléphants, de l'exploitation minière et des contacts armés entre les gardes du parc et les groupes de milices, et les communautés à l'intérieur de la Réserve restent très pauvres. L'utilisation des terres et des ressources à l'intérieur de la réserve limite la migration humaine et vise à soutenir l'agriculture de subsistance et la chasse durable et sélective. Malgré ces politiques et une gestion forte, les perspectives de conservation pour la réserve restent critiques puisqu'elle est inscrite sur la Liste du patrimoine mondial en péril de l'UNESCO depuis 1997.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.8,
                },
                {
                    layer: 'waterway',
                    opacity: 0.4,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 1.0,
                },    
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch5',
            alignment: 'left',
            hidden: false,
            title: 'Frontières naturelles et artificielles',
            // image: './path/to/image/source.png',
            description: "Bien que le décret ministériel créant la Réserve décrive en détail ses limites, certaines portions suivent des lignes artificielles, comme la limite occidentale suivant le méridien de 28 degrés Est, une ligne imaginaire à travers la forêt. La plupart des limites suivent des caractéristiques naturelles, comme la rivière Nepoko au nord, ou des limites visibles et artificielles comme la route Mambasa-Andudu à l'est.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.8,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.8,
                },                  
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.6,
                },   
            ]
        },
        {
            id: 'ch6',
            alignment: 'left',
            hidden: false,
            title: 'Une carte erronée change l\'équilibre',
            // image: './path/to/image/source.png',
            description: "La province de l'Ituri, qui abrite la Réserve de Faune à Okapis, est renommée pour sa richesse minérale, notamment les ceintures aurifères qui ont attiré des spéculateurs locaux et internationaux. Tout au long des années 2010, l'exploitation minière artisanale à petite échelle a posé un défi persistant dans la gestion du bloc sud-ouest de la Réserve, les gardes du parc négociant occasionnellement pour évacuer des milliers de mineurs des profondeurs de la forêt. <p>Depuis au moins 2011, le Cadastre Minier (CAMI) de la RDC, responsable de l'attribution des licences de prospection minière, utilise une version considérablement réduite des limites de la Réserve. Cette version réduit la taille réelle d'environ un tiers, déplaçant la limite occidentale vers l'est de plus de 22 kilomètres (14 miles), la limite nord vers le sud de plus de 25 kilomètres (16 miles), et la limite sud vers le nord de plus de 12 kilomètres (8 miles).",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-cami',
                    opacity: 0.8,
                },                
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.6,
                // },  
            ]
        },
        {
            id: 'ch7',
            alignment: 'left',
            hidden: false,
            title: 'L\'incongruité des concessions minières dans un site du Patrimoine Mondial',
            // image: './path/to/image/source.png',
            description: "La représentation du CAMI de la Réserve de Faune à Okapis totalise seulement 9 107 km², contre la superficie réelle de la Réserve de 13 726,25 km² selon la <a href='https://www.protectedplanet.net/37043/'> Base de données mondiale des aires protégées</a> - une réduction de 33%. Cette divergence a conduit le CAMI à attribuer et renouveler des concessions de recherche, d'exploration et d'extraction qui tombent techniquement à l'intérieur des limites décrétées de la Réserve. Ces concessions sont particulièrement présentes le long de la rivière Ituri dans la partie sud de la Réserve et le long de sa limite occidentale, qui suit le méridien de 28 degrés Est depuis la confluence des rivières Lenda et Ituri jusqu'à la rivière Agamba.<p>Les données des concessions minières sont disponibles sur le <a href='http://drclicences.cami.cd/EN/'>Portail cartographique du cadastre minier de la RDC</a>, bien que les données des limites des aires protégées du CAMI ne soient pas accessibles au public. <p><i>*La représentation numérisée des limites de la Réserve de Faune à Okapis par le CAMI semble fragmentée en raison de la pratique du CAMI de conformer les concessions à une grille de 30 secondes d'arc.</i>",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-cami',
                    opacity: 0.6,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.4,
                },
                {
                    layer: 'waterway',
                    opacity: 0.4,
                }, 
                {
                    layer: 'road-simple',
                    opacity: 0.4,
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.4,
                },
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.8,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.8,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'active-exploitation',
                    opacity: 0.2,
                },
                {
                    layer: 'research-application',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.2,
                },
            ]
        },
        {
            id: 'ch8',
            alignment: 'right',
            hidden: false,
            title: 'Le défi persistant de conservation face à l\'exploitation minière artisanale',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Imagery de mosaïque Planet de juin à décembre 2017</b></i><p>Tout au long des années 2010, l'exploitation minière artisanale à petite échelle a posé un défi persistant dans la gestion du bloc sud-ouest de la Réserve. En raison de sa nature non réglementée et illicite, l'exploitation minière artisanale entraîne des dommages environnementaux, y compris la déforestation et la pollution de l'eau. De plus, dans le contexte délicat de la Réserve, le contrôle des zones minières exacerbe les conflits entre différents groupes. L'exploitation minière artisanale impacte également les populations animales car les mineurs ont tendance à consommer la viande de brousse disponible, cequi décourage la chasse durable dans la Réserve. À quelques occasions, la direction du parc a dégagé des mines artisanales situées au cœur de la forêt, ainsi que des acteurs semi-industriels empiétant sur la Réserve en draguant la rivière Ituri.",
            location: {
                center: [28.14, 1.31603],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Jun 2017 - Dec 2017', //2017?
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.1,
                },               
            ],
            onChapterExit: [
                {
                    layer: 'label-drc',
                    opacity: 0.0, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 0.0, 
                },
            ]
        },
        {
            id: 'ch9',
            alignment: 'right',
            hidden: false,
            title: 'Développement d\'un complexe minier semi-industriel dans la Réserve de Faune à Okapis',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Imagery de mosaïque Planet de décembre 2020</b></i><p>En 2020, les images satellites montrent qu'environ 24 kilomètres de nouvelles routes ont été ouvertes pour faciliter l'accès direct à Muchacha, une grande mine dans la partie sud de la Réserve, et à des sites plus petits au sud de la rivière Ituri. Ces routes ont permis de déplacer des équipements pour étendre rapidement ce site minier et d'autres. Le défrichage massif de la forêt et l'apparition de bassins de décantation sont clairement visibles sur les images. Ce défrichement a permis à davantage de dragues d'accéder et d'exploiter la rivière Ituri.",
            location: {
                center: [28.14, 1.31603],
                zoom: 13, //12
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Dec 2020', // image too saturated
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.2,
                },
                {
                    layer: 'research-application',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2020',
                    opacity: 0.3,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 0.0,
                },                 
            ],
            onChapterExit: [
                // {
                //     layer: 'gfw-alerts',
                //     opacity: 0.5,
                // },
            ]
        },
        {
            id: 'ch10',
            alignment: 'right',
            hidden: false,
            title: 'Plus de nouvelles routes et expansion massive en 2021',
            // image: './assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Imagery de mosaïque Planet d'octobre 2021</b></i><p>En 2021, un schéma similaire a été reproduit du côté nord de la rivière Ituri, où environ 17 kilomètres de nouvelles routes ont été ouvertes pour faciliter l'accès, le développement et l'expansion des sites miniers. <p>Notez la déclaration suivante de l'UNESCO en 2021, concernant la <a href='https://whc.unesco.org/en/decisions/7705'>décision</a> de maintenir la Réserve de Faune à Okapis sur la Liste du patrimoine mondial en péril : <p><i>`Tout en notant les efforts entrepris pour fermer les mines artisanales, exprime une sérieuse inquiétude quant au fait que l'exploitation minière illégale dans la propriété semble s'intensifier avec une complicité signalée de certaines autorités locales, les petites exploitations minières artisanales évoluant vers des opérations semi-industrielles à grande échelle, et le développement d'un établissement permanent sur le site minier de Muchacha.`</i>",
            location: {
                center: [28.14, 1.31603],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Oct 2021',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'settlement-minor-label',
                    opacity: 1,
                },  
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.3,
                },             
            ],
            onChapterExit: [
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-sw-tracks',
                    opacity: 0.8,
                },
            ]
        },
        {
            id: 'ch11',
            alignment: 'right',
            hidden: false,
            title: 'Les images satellitaires révèlent des dommages étendus',
            image: '../assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Imagery de mosaïque Planet d'avril 2023<p>Les points sur la carte principale sont des alertes intégrées de déforestation de Global Forest Watch entre 2019-2023</b></i>",
            location: {
                center: [28.10756, 1.32350],
                zoom: 10.8,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Apr 2023',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gfw-alerts',
                    opacity: 0.5,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.2,
                },  
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },             
            ],
            onChapterExit: [
                {
                    layer: 'gfw-alerts',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.0,
                },    
            ]
        },
        {
            id: 'ch12',
            alignment: 'center',
            hidden: false,
            title: 'L\'expansion minière se poursuit sans relâche, causant des dommages permanents',
            // image: '../assets/rfo_gfw_alerts_confidence.gif',
            description: 'À la fin de 2023, le complexe minier continue de s\'étendre, causant des dommages permanents à la forêt, ainsi qu\'à la rivière Ituri pour les résidents locaux en aval. Il faudra sans aucun doute des efforts de restauration étendus et, espérons-le, un arrêt total de l\'exploitation minière semi-industrielle, pour garantir que la Réserve de Faune à Okapis continue de soutenir sa faune et ses peuples autochtones.<p><i>Dans la fenêtre de comparaison ci-dessous, vous pouvez sélectionner des images de deux époques différentes dans les menus déroulants. Vous pouvez également zoomer et vous déplacer pour vous concentrer sur des zones spécifiques.</i>' + '<br/><div class="video-container"><iframe src="nicfi-compare.html" frameborder="0" scrolling="no" /></div>',
            location: {
                center: [28.06, 1.27003],//center: [28.00, 1.55003],
                zoom: 11,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Oct 2023',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [            
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch13',
            alignment: 'center',
            hidden: false,
            title: 'Une nouvelle frontière d\'exploitation minière semi-industrielle s\'ouvre en 2023',
            // image: '../assets/rfo_gfw_alerts_confidence.gif',
            description: 'À la mi-2023, les opérations minières ont fait de nouvelles incursions dans une nouvelle zone de la Réserve le long de la limite occidentale. Ces mines s\'étendent depuis une zone fortement prospectée juste à l\'extérieur des limites réelles de la Réserve de Faune à Okapis. Une autre entreprise chinoise et titulaire de concession, Ding Sheng, a commencé l\'exploitation minière alluviale et a rapidement déforesté le long d\'une rivière, comme on le voit dans les mises à jour mensuelles des images satellites de Planet. Ce cas met encore en évidence la nécessité urgente de résoudre le problème de ces concessions illégales. <p><i>Dans la fenêtre de comparaison ci-dessous, vous pouvez sélectionner des images de deux époques différentes dans les menus déroulants. Vous pouvez également zoomer et vous déplacer pour vous concentrer sur des zones spécifiques.</i>' + '<br/><div class="video-container"><iframe src="nicfi-compare-west.html" frameborder="0" scrolling="no" /></div>',
            // location: {
            //     center: [28.05570, 1.34050],
            //     zoom: 10.0,
            //     pitch: 8.01,
            //     bearing: 0.00
            // },
            location: {
                center: [28.0, 1.703],
                zoom: 10,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Oct 2023',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.2,
                },  
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },              
            ],
            onChapterExit: [
                {
                    layer: 'rfo-sw-tracks',
                    opacity: 0.0,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.0,
                },  
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.0,
                },  
            ]
        },
        {
            id: 'unesco',
            alignment: 'left',
            hidden: false,
            title: 'Patrimoine Mondial en Péril',
            // image: './path/to/image/source.png',
            description: 'Depuis la première publication de cette carte narrative en avril 2023, le mécanisme qui a permis l\'expansion de l\'exploitation minière à l\'intérieur d\'une aire protégée légale, ainsi que les implications sociales, environnementales, juridiques et sécuritaires associées, ont été détaillés par deux publications importantes.<br> Tout d\'abord, Mongabay a publié un article le 13 octobre 2023 intitulé : <a href="https://news.mongabay.com/2023/10/its-a-real-mess-mining-and-deforestation-threaten-unparalleled-drc-wildlife-haven">C\'est un vrai désordre : l\'exploitation minière et la déforestation menacent un refuge pour la faune sans pareil en RDC</a> a partagé un aperçu complet de la situation actuelle.<br>Deuxièmement, l\'International Peace Information Service (IPIS), une ONG belge, a publié un rapport le 27 octobre 2023 qui comprenait des données de terrain collectées dans des mines artisanales dans les parties sud-ouest et ouest de la Réserve :<br><a href="https://ipisresearch.be/publication/mapping-of-artisanal-mining-sites-in-western-mambasa-ituri-province-democratic-republic-of-the-congo/">Cartographie des sites miniers artisanaux dans l\'ouest de Mambasa, province de l\'Ituri, République Démocratique du Congo</a>. Le rapport de l\'IPIS a présenté des données de mi-2022, documentant la présence de services de sécurité de l\'État (Police, Armée) dans les mines, agissant comme des agents de sécurité privés pour Kimia Mining, une entreprise chinoise. Le rapport a également documenté que le ministère provincial des Mines de l\'Ituri et le tribunal militaire provincial ont reconnu la version des limites de la Réserve des Okapis par le CAMI ainsi que les concessions attribuées à l\'intérieur de la Réserve.<br>L\'origine des données des limites des aires protégées du CAMI reste à révéler et mérite une enquête plus approfondie.',
            location: {
                    center: [24, -1],
                    zoom: 5.8,
                    pitch: 20,
                    bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'unesco-sites',
                    opacity: 0.8,
                },
                {
                    layer: 'unesco-sites-label',
                    opacity: 1.0,
                },
                {
                    layer: 'landcover',
                    opacity: 0.2, 
                },
                {
                    layer: 'rfo-cami',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-polygon',
                //     opacity: 0.4,
                // },
                // {
                //     layer: 'unesco-sites',
                //     opacity: 0.1,
                // },
            ]
        },
    ]
};