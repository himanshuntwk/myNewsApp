package services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class NewsService {
	@RequestMapping("/hello")
	User home() {
		User user = new User();
		user.setName("Himanshu Sharma");
		return user;
	}
	
	class User{
		String name;
		public String getName(){
			return name;
		}
		public void setName(String name){
			this.name = name;
		}
	}
	
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(NewsService.class,args);
	}

}
