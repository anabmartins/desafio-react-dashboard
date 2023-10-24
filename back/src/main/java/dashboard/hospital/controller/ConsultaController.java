package dashboard.hospital.controller;
import dashboard.hospital.model.Consulta;
import dashboard.hospital.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // endereco do
@RestController
@RequestMapping("/consultas")

public class ConsultaController{
    @Autowired
    private ConsultaRepository consultaRepository;

    @GetMapping
    public List<Consulta> listarConsultas(){
        return consultaRepository.findAll();
    }

    @PostMapping
    public Consulta criarConsulta(@RequestBody Consulta consulta){
        return consultaRepository.save(consulta);
    } 

    @DeleteMapping("/{id_consulta}")
    public ResponseEntity<String> deletarConsulta(@PathVariable Long id_consulta){
        if (consultaRepository.existsById(id_consulta)) {
            consultaRepository.deleteById(id_consulta);
            return ResponseEntity.ok("Consulta deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_consulta}")
    public ResponseEntity<Consulta> atualizarConsulta(@PathVariable Long id_consulta, @RequestBody Consulta consultaAtualizado) {
        if (consultaRepository.existsById(id_consulta)){
            Consulta consulta = consultaRepository.findById(id_consulta).get();
            consulta.setNome_consulta(consultaAtualizado.getNome_consulta());
            consulta.setData(consultaAtualizado.getData());
            consulta.setHorario(consultaAtualizado.getHorario());

            Consulta consultaAtualizadoBD = consultaRepository.save(consulta);
            return ResponseEntity.ok(consultaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
