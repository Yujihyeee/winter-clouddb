package shop.tripn.api.cloud.user.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@AllArgsConstructor
@Getter @Setter @ToString
public class UserSerializer implements Serializable {
    private static final long serialVersionUID = 1L;

    private long userId;
    private String username;
    private String password;
    private String name;
    private String email;
    private String regDate;
}
