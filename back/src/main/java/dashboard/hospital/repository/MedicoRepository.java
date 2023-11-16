package dashboard.hospital.repository;
import dashboard.hospital.model.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long>{
  //  Medico findByNome(String nome_completo);
}
