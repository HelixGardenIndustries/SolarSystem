<html>
<head>
  <title>Tschehel Sotoun (Three.js)</title>
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
    <script src="js/CelestialBodyInformationController.js"></script>
    <script src="js/lib/planets/threex.planets.js"></script>
    <script src="js/lib/jquery-2.1.1.min.js"></script>
    <script src="js/solarSystem.js"></script>
    <script text="type/json" src="jsonData/celestialBodyData.json"></script>
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
            <h1 id="Name"></h1>
            <table border="1">
                <tr>
                    <th width="30%">Eigenschaft</th>
                    <th width="70%">Wert</th>
                </tr>
                <tr>
                    <td>Masse</td>
                    <td id="Masse">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Radius</td>
                    <td id="Radius">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Dichte</td>
                    <td id="Dichte">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Rotationsperiode</td>
                    <td id="Rotationsperiode">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Orbitalperiode</td>
                    <td id="Orbitalperiode">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Sonnenentfernung</td>
                    <td id="Sonnenentfernung">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Orbitalgeschwindigkeit</td>
                    <td id="Orbitalgeschwindigkeit">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Achsenneigung</td>
                    <td id="Achsenneigung">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Temperatur</td>
                    <td id="Temperatur">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>AtmoDruck</td>
                    <td id="AtmoDruck">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr>
                    <td>Monde</td>
                    <td id="Monde">Lorem ipsum dolor sit amet,</td>
                </tr>
                <tr colspan="2">
                    <td colspan="2" id="Beschreibung">Lorem ipsum dolor sit amet,</td>
                </tr>
            </table>
        </div>
</body>
</html>