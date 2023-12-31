package dashboard.hospital.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_consulta;

    private String nome_consulta;
    private String data;
    private String horario;
    
    @ManyToOne
   // @JoinColumn(name = "nome_completo",nullable=false)
    private Paciente paciente;
    
    @ManyToOne
    private Medico medico;
} 