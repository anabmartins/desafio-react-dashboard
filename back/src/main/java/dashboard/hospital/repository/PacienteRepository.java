package dashboard.hospital.repository;
import dashboard.hospital.model.Paciente;
// import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long>{
   // List<Paciente> findByNome(String nome_completo);
}
