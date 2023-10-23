package dashboard.hospital.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
public class Paciente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_paciente;
    
    private String nome_completo;
    private String data_nascimento;
    private String sexo;
    private String telefone;
}
