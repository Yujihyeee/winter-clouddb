package shop.tripn.api.cloud.board.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.item.domain.Item;
import shop.tripn.api.cloud.user.domain.User;

import javax.persistence.*;

@Data @Component @Table(name = "articles")
@Entity
public class Article {
    @Id
    @Column(name = "article_id")
    @GeneratedValue @NotNull
    private long articleId;
    @Column private @NotNull String title;
    @Column private @NotNull String content;
    @Column(name = "written_date") @NotNull private String writtenDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;
}
