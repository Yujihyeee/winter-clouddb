package shop.tripn.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.user.domain.User;
import shop.tripn.api.cloud.user.domain.UserSerializer;
import shop.tripn.api.cloud.user.service.UserService;

import java.util.Optional;
@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserService userService;

    @GetMapping("/users/{id}")
    public ResponseEntity<UserSerializer> getById(@PathVariable long id) throws JsonProcessingException{
        User user = userService.findById(id).get();
        UserSerializer userSerializer = new UserSerializer(user.getUserId(),
                user.getUsername(), user.getPassword(), user.getName(), user.getEmail(), user.getRegDate());
        return new ResponseEntity<>(userSerializer, HttpStatus.OK);
    }
}
