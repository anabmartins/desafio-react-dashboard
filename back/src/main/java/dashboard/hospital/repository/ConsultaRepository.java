package dashboard.hospital.repository;
import dashboard.hospital.model.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultaRepository extends JpaRepository<Consulta, Long>{
}