package de.helixgardenindustries.solarsystem;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
@RequestMapping("/appointments")
public class CelestialBodyController {

    public CelestialBodyController(){
        System.out.println("sdfsdf");
    }

    @RequestMapping("/")
    public String welcomeHandler() {
        return "Alive.";
    }

    @RequestMapping(method = RequestMethod.GET)
    public Map<String, String> getInformationForCelestialBody(@PathVariable String celestialBody){
        System.out.println("A");
        return Collections.EMPTY_MAP;
    }
}

