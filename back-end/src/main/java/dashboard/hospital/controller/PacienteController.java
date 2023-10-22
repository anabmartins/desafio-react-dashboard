package dashboard.hospital.controller;
import dashboard.hospital.model.Paciente;
import dashboard.hospital.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*") // endereco do front
@RestController
@RequestMapping("/pacientes")

public class PacienteController {
    @Autowired
    private PacienteRepository pacienteRepository;
    
    @GetMapping
    public List<Paciente> listarPacientes(){
        return pacienteRepository.findAll();
    }
    
    @PostMapping
    public Paciente criarPaciente(@RequestBody Paciente paciente){
        return pacienteRepository.save(paciente);
    }
    
    @DeleteMapping("/{id_paciente}")
    public ResponseEntity<String> deletarPaciente(@PathVariable Long id_paciente){
        if (pacienteRepository.existsById(id_paciente)) {
            pacienteRepository.deleteById(id_paciente);
            return ResponseEntity.ok("Paciente deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id_paciente}")
    public ResponseEntity<Paciente> atualizarPaciente(@PathVariable Long id_paciente, @RequestBody Paciente pacienteAtualizado) {
        if (pacienteRepository.existsById(id_paciente)){
            Paciente paciente = pacienteRepository.findById(id_paciente).get();
            paciente.setData_nascimento(pacienteAtualizado.getData_nascimento());
            paciente.setNome_completo(pacienteAtualizado.getNome_completo());
            paciente.setSexo(pacienteAtualizado.getSexo());
            paciente.setTelefone(pacienteAtualizado.getTelefone());
            
            Paciente pacienteAtualizadoBD = pacienteRepository.save(paciente);
            return ResponseEntity.ok(pacienteAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
