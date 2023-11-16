package dashboard.hospital.repository;
import dashboard.hospital.model.Consulta;
import dashboard.hospital.model.Paciente;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long>{
    List<Consulta> findByPaciente(Paciente paciente);
}