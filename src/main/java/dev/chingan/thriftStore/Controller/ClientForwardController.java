package dev.chingan.thriftStore.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

@Controller
public class ClientForwardController {

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward(){
        return "forward:/";
    }

}
