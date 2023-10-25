package dashboard.hospital.controller;
import dashboard.hospital.model.Medico;
import dashboard.hospital.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

@RequestMapping("/medicos")

public class MedicoController {

    @Autowired
    private MedicoRepository medicoRepository;

    @GetMapping
    public List<Medico> listarMedicos() {
        return medicoRepository.findAll();
    }

    @PostMapping
    public Medico criarMedico(@RequestBody Medico medico) {
        return medicoRepository.save(medico);
    }

    @DeleteMapping("/{id_medico}")
    public ResponseEntity<String> deletarMedico(@PathVariable Long id_medico) {
        if (medicoRepository.existsById(id_medico)) {
            medicoRepository.deleteById(id_medico);
            return ResponseEntity.ok("Médico deletado com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_medico}")
    public ResponseEntity<Medico> atualizarMedico(@PathVariable Long id_medico, @RequestBody Medico medicoAtualizado) {
        if (medicoRepository.existsById(id_medico)) {
            Medico medico = medicoRepository.findById(id_medico).get();
            medico.setNome_completo(medicoAtualizado.getNome_completo());
            medico.setEmail(medicoAtualizado.getEmail());
            medico.setSenha(medicoAtualizado.getSenha());

            Medico medicoAtualizadoBD = medicoRepository.save(medico);
            return ResponseEntity.ok(medicoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}