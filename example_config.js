var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'ACCESS TOKEN HERE',
    NICFI_API_KEY: 'NICFI API KEY HERE',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Storytelling with NICFI Tropical Forest Imagery',
    subtitle: 'Take a tour of the NICFI Satellite Data Program’s Purpose Allies, Participants, and General Partners',
    byline: 'By Planet',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'What is NICFI?',
            description: 'Since October 2020, when Norway\s International Climate & Forests Initiative (<a href="https://www.nicfi.no/" target="_blank" rel="noopener noreferrer">NICFI</a>) launched its Satellite Data Program with <a href="https://www.planet.com/pulse/planet-ksat-and-airbus-awarded-first-ever-global-contract-to-combat-deforestation/" target="_blank" rel="noopener noreferrer">an international contract awarded</a> to Kongsberg Satellite Services (<a href="https://www.ksat.no/" target="_blank" rel="noopener noreferrer">KSAT</a>) with partners Planet and <a href="https://www.intelligence-airbusds.com/" target="_blank" rel="noopener noreferrer">Airbus</a>, the global community has had a tremendous resource available in the fight against tropical deforestation: High-resolution satellite monitoring.<br><br>This global mosaic is from September 2021.',
            location: {
                center: [-2, 2],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'access',
            alignment: 'right',
            hidden: false,
            title: 'Accessing NICFI',
            description: 'The mosaics cover tropical forest regions between 30 degrees North and 30 degrees South.<br><br>The NICFI Satellite Data Program has three levels of access:<br><br><b>Purpose Allies</b>, such as <a href="https://www.globalforestwatch.org/" target="_blank" rel="noopener noreferrer">Global Forest Watch</a> and <a href="https://mapbiomas.org/" target="_blank" rel="noopener noreferrer">Mapbiomas</a>, help share visual, monthly data with the public at large and non-technical users;<br><br><b>Third Party Participants</b>, including Government, NGO, Academic, and Private Sector stakeholders, <a href="https://www.planet.com/nicfi/" target="_blank" rel="noopener noreferrer">can access</a> analysis-ready, monthly data to help achieve NICFI\s strategic purpose; and<br><br><b>General Partners</b>, <a href="https://www.nicfi.no/current/call-for-proposals-nicfi-satellite-data-program-level-2-access/" target="_blank" rel="noopener noreferrer">selected by</a> the Norwegian Ministry of Climate and Environment, can access Scenes-level data including Planet\s daily monitoring and Airbus\ historical archive.',
            location: {
                center: [37.88, -8.23],
                zoom: 4.44,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kilimanjaro',
            alignment: 'left',
            hidden: false,
            title: 'Look at NICFI imagery over Mount Kilimanjaro',
            description: 'Monthly mosaics use the best imagery from that time period.',
            location: {
                center: [37.391, -4.042],
                zoom: 7.34,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kilimanjaro-3d',
            alignment: 'right',
            hidden: false,
            title: 'And Now View Mount Kilimanjaro in 3D!',
            description: 'Thanks to Mapbox GL JS v2 - <a href="https://www.mapbox.com/mapbox-gljs" target="_blank">learn more</a>.',
            location: {
                center: [37.3499, -3.0916],
                zoom: 10.96,
                pitch: 72,
                bearing: 13.6
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'south-america',
            alignment: 'left',
            hidden: false,
            title: 'Let\'s fly over to South America',
            description: 'Note the breadth of NICFI imagery, which covers 96 countries!',
            location: {
                center: [-60.99, -8.1],
                zoom: 4.03,
                pitch: 49,
                bearing: -12.8
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'rondonia-sep-20',
            alignment: 'right',
            hidden: false,
            title: 'Here\'s Rondônia, Brazil in September 2020',
            description: 'Rondônia is one of the states of Brazil.',
            location: {
                center: [-63.291, -10.844],
                zoom: 7.53,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2020',            
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rondonia-sep-21',
            alignment: 'right',
            hidden: false,
            title: 'Here\'s Rondônia, Brazil in September 2021',
            description: 'Observe the annual change in this tropical forest region.',
            location: {
                center: [-63.291, -10.844],
                zoom: 7.53,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ]
        },
        {
            id: 'tour',
            alignment: 'left',
            hidden: false,
            title: '',
            description: 'Let\s take a tour of what the NICFI Satellite Data Program\s General Partners are doing with the additional Scenes-level data for the fight against deforestation.',
            location: {
                center: [134.37, -24.08],
                zoom: 3.09,
                pitch: 38,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'mato-grosso',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<b>The Amazon Environmental Research Institute</b> (IPAM) is putting the Planet-NICFI Data to work to monitor and report on native vegetation that could be legally deforested, but that farmers chose not to when participating in the <a href="https://conserv.org.br/" target="_blank" rel="noopener noreferrer">CONSERV</a> program: a private, voluntary mechanism that compensates rural producers for conserving native vegetation. The high-resolution of the data is helping improve their algorithms for detecting deforestation, degradation, and fire that are critical to this work, with recent improvements being especially useful for capturing early patterns of degradation at a fine scale.',
            location: {
                center: [-55.9290946,-12.6953132],
                zoom: 6,
                pitch: 12,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'mozambique',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '<b>The National Sustainable Development Fund of Mozambique</b> is using the data to derive validation information for annual monitoring of deforestation, as well as to test the production of their own <a href="https://www.fnds.gov.mz/mrv/" target="_blank" rel="noopener noreferrer">high-resolution deforestation alerts</a>.',
            location: {
                center: [37.1431398,-16.9529214],
                zoom: 8,
                pitch: 12,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'peru',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<b>The Peruvian Service for National Protected Areas</b> is accessing the Planet-NICFI Data through the QGIS plug-in to classify deforestation alerts within 38 Nationally Protected Areas of the Peruvian Amazon, covering an area of almost 17 million hectares in high-resolution monitoring.',
            location: {
                center: [-78.646463,-9.1618785],
                zoom: 6.27,
                pitch: 32,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indigenous',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '<b>Forests of the World</b> is using the Planet-NICFI Data to empower Indigenous communities to stop the loss of forests, defend their rights, and sustainably govern forest resources. They are working with Indigenous communities across the tropics, including in Bolivia, Nicaragua, Panama, Ethiopia, and Uganda, to integrate the high-resolution satellite monitoring into community alert systems; monitor illegal deforestation as well as compliance with conservation and forest management plans; identify areas for restoration; and support Indigenous rangers in the field.<br><br><img src="https://storage.googleapis.com/corpeng-pulse-assets/uploads/2022/02/image1-3.png" alt="side by side comparison of deforestation maps" style="width:350px;"><br><br><i>Forests of the World uses Planet-NICFI Data for the identification of clearings to be restored after timber extraction or forest fires, communities of Río Blanco and Nokoborema in the Indigenous territory of Monte Verde, Bolivia.</i>',
            location: {
                center: [-63.31245,-16.3495866],
                zoom: 7,
                pitch: 32,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'panama',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<b>The Ministry of Environment of Panama</b> is using the Planet images to verify and map forest cover, refining estimates from Sentinel-2. Given the frequent revisit, it is especially helpful in the cloudy parts of the country.<br><br><img src="https://storage.googleapis.com/corpeng-pulse-assets/uploads/2022/02/image2-2-792x1024.jpg" alt="side by side comparison of deforestation maps" style="width:350px;"><br><br><i>The Ministry of Environment of Panama uses the Planet images in the north of Colón. The Ministry uses the 4-Band daily imagery with the aim of identifying sites that are being illegally deforested and works with park rangers to determine the causes of the incidents.</i>',
            location: {
                center: [-80.0235,9.2361],
                zoom: 10,
                pitch: 22,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'un',
            alignment: 'center',
            hidden: false,
            title: '',
            description: '<b>The United Nations Office on Drugs and Crime</b> is using the data to research illicit activities (such as illegal logging, mining, and/or cultivation) as drivers of deforestation and forest degradation, noting "The NICFI Program gives great opportunities to carry out applied research, to develop new methods and tools, and to improve the quality of information produced."',
            location: {
                center: [-2, 2],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'end',
            alignment: 'center',
            hidden: false,
            title: '',
            description: 'We are amazed with this user community and more inspired than ever to continue serving the NICFI Satellite Data Program’s Purpose Allies, Participants, and General Partners in their critical work to reduce and reverse tropical forest loss.<br><br><i><a href="https://assets.planet.com/docs/NICFI_UserGuidesFAQ.pdf" target="_blank" rel="noopener noreferrer">Here</a> is the comprehensive user guide on how to access the NICFI Satellite Data Program.</i>',
            location: {
                center: [-2, 2],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mosaic: 'Sep 2021',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
