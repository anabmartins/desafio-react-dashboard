package dashboard.hospital.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
public class Medico {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_medico;

    private String nome_completo;
    private String email;
    private String senha;
}
