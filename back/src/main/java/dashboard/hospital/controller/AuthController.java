package dashboard.hospital.controller;

import dashboard.hospital.model.Medico;
import dashboard.hospital.repository.MedicoRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api")

public class AuthController {
    private final MedicoRepository medicoRepository;

    @Autowired
    public AuthController(MedicoRepository medicoRepository) {
        this.medicoRepository = medicoRepository;
    }

    @PostMapping("/login")
    public Boolean login(@RequestBody Medico medico) {
        List<Medico> medicos = medicoRepository.findAll();
        for (Medico m : medicos) {
            if (m.getEmail().equals(medico.getEmail()) && m.getSenha().equals(medico.getSenha())) {
                return true;
            }
        }
        return false;
    }
}
