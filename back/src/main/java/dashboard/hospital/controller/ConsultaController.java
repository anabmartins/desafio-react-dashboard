package dashboard.hospital.controller;

import dashboard.hospital.model.Consulta;
import dashboard.hospital.model.Paciente;

import dashboard.hospital.repository.ConsultaRepository;
import dashboard.hospital.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:5173") // endereco do front
@RestController
@RequestMapping("/consultas")

public class ConsultaController {

    @Autowired
    private ConsultaRepository consultaRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    @GetMapping
    public List<Consulta> listarConsultas() {
        return consultaRepository.findAll();
    }

    @GetMapping("/paciente/{id_paciente}")
    public Paciente verificaPacientePorId(@PathVariable Long id_paciente) {
        Paciente encontrado = new Paciente();
        List<Paciente> pacientes = pacienteRepository.findAll();
        for (Paciente p : pacientes) {
            if (p.getId_paciente() == id_paciente) {
                encontrado = p;
                break;
            }
        }
        return encontrado;
    }

    @PostMapping
    public Consulta criarConsulta(@RequestBody Consulta consulta) {
        return consultaRepository.save(consulta);
    }

    @DeleteMapping("/{id_consulta}")
    public ResponseEntity<String> deletarConsulta(@PathVariable Long id_consulta) {
        if (consultaRepository.existsById(id_consulta)) {
            consultaRepository.deleteById(id_consulta);
            return ResponseEntity.ok("Consulta deletado com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id_consulta}")
    public ResponseEntity<Consulta> atualizarConsulta(@PathVariable Long id_consulta,
            @RequestBody Consulta consultaAtualizado

    ) {
        if (consultaRepository.existsById(id_consulta)) {
            Consulta consulta = consultaRepository.findById(id_consulta).get();
            consulta.setNome_consulta(consultaAtualizado.getNome_consulta());
            consulta.setData(consultaAtualizado.getData());
            consulta.setHorario(consultaAtualizado.getHorario());
            consulta.setPaciente(consultaAtualizado.getPaciente());
            consulta.setMedico(consultaAtualizado.getMedico());

            Consulta consultaAtualizadoBD = consultaRepository.save(consulta);
            return ResponseEntity.ok(consultaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
