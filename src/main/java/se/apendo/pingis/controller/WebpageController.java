package se.apendo.pingis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebpageController {
	
	@RequestMapping({ "/", "/addmatch", "/standings", "/history", "/rules", "/user/*"})
	public String index() {
		return "forward:/index.html";
	}

}
