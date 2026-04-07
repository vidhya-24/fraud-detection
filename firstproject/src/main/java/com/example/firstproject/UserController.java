import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @PostMapping("/signup")
    public String signup(@RequestBody Map<String, Object> user){
        System.out.println("Signup Hit ✅");
        return "success";
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, Object> user){
        System.out.println("Login Hit ✅");
        return "success";
    }
}