<html>
<head>
  <title>Das Sonnensystem (Three.js)</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel=stylesheet href="/css/base.css"/>
    <script src="js/lib/three.js"></script>
    <script src="js/lib/detector.js"></script>
    <script src="js/lib/stats.js"></script>
    <script src="js/lib/OrbitControls.js"></script>
    <script src="js/lib/THREEx.KeyboardState.js"></script>
    <script src="js/lib/THREEx.Fullscreen.js"></script>
    <script src="js/lib/THREEx.WindowResize.js"></script>
    <script src="js/constants.js"></script>
    <script src="js/utilities.js"></script>
    <script src="js/init.js"></script>
    <script src="js/Planet.js"></script>
    <script src="js/lib/planets/threex.planets.js"></script>
    <script src="js/lib/jquery-2.1.1.min.js"></script>
    <script src="js/solarSystem.js"></script>
    <script text="type/json" charset="UTF-8" src="jsonData/celestialBodyData.json"></script>
</head>
<body>
    <div id="canvas"></div>
    <%--var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;--%>
        <ul id="celestialBodyNavigation">
            <li id="sonne">Sonne</li>
            <li id="merkur">Merkur</li>
            <li id="venus">Venus</li>
            <li id="erde">Erde</li>
            <li id="mars">Mars</li>
            <li id="jupiter">Jupiter</li>
            <li id="saturn">Saturn</li>
            <li id="uranus">Uranus</li>
            <li id="neptun">Neptun</li>
            <li id="pluto">Pluto</li>
        </ul>
        <div id="infoPanel">
            <h1 id="Name">mercury</h1>
            <div id="Beschreibung">
                Die Sonne ist der bei weitem größte Himmelskörper im unserem Sonnensystem. Ihr Durchmesser beträgt das ca. 109-fache des Erddurchmessers, und sie vereint auf sich 99,8 % der Gesamtmasse des Systems. Die Sonne ist ein Stern aus der so genannten Hauptreihe, ihre Spektralklasse ist G2, und sie hat die Leuchtkraftklasse V. Das bedeutet, dass die Sonne ein relativ gewöhnlicher, gelb-orange-leuchtender Stern ist. Ihre Masse beträgt etwa das Doppelte des geschätzten Mittelwertes der Sterne in der Milchstraße. Ihre Masse setzt sich zu 75 % aus Wasserstoff und zu 25 % aus Helium zusammen. Hinsichtlich der Anzahl der Atome betragen diese Anteile 92,1 % und 7,8 %. Im Kern, der Energiequelle der Sonne, werden pro Sekunde 700 Millionen Tonnen Wasserstoff zu 695 Millionen Tonnen Helium fusioniert. Durch den Massenunterschied wird nach E = m c²
            </div>
            <div id="container">
                <div class="block flipcard v" title="Der Radius">
                    <div class="front">
                        <img src="/images/physicsIcons/radius.png">
                    </div>
                    <div id="Radius" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h" title="Der Radius">
                    <div class="front">
                        <img src="/images/physicsIcons/gewicht.png">
                    </div>
                    <div id="Masse" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/rotationsperiode.png">
                    </div>
                    <div id="Rotationsperiode" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/orbitalperiode.png">
                    </div>
                    <div id="Orbitalperiode" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/sonnenentfernung.png">
                    </div>
                    <div id="Sonnenentfernung" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/achsenneigung.png">
                    </div>
                    <div id="Achsenneigung" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/temperatur.png">
                    </div>
                    <div id="Temperatur" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/monde.png">
                    </div>
                    <div id="Monde" class="back">
                        BACK
                    </div>
                </div>
                <div class="block flipcard h">
                    <div class="front">
                        <img src="/images/physicsIcons/druck.png">
                    </div>
                    <div id="AtmoDruck" class="back">
                        BACK
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>