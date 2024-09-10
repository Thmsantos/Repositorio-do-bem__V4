package com.br.gov.sp.fatec.RepositorioDoBem.Controller.Controllers;

import com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain.Usuario;
import com.br.gov.sp.fatec.RepositorioDoBem.Controller.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/saveUsuario")
    public Usuario saveUsuario(@RequestBody Usuario usuario) {
        return usuarioService.saveUsuario(usuario);
    }

    
    @PostMapping("/AuthUser")
    public ResponseEntity<Boolean> login(@RequestBody String cnpj, String senha) {
        boolean isAuthenticated = usuarioService.Login(cnpj, senha);

        if (isAuthenticated) {
            return new ResponseEntity<>(true, HttpStatus.OK); 
        } else {
            return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
        }
    }
    

    @GetMapping("/getUsuario/{usuarioID}")
    public Usuario getUsuario(@PathVariable String usuarioID) {
        return usuarioService.getUsuario(usuarioID);
    }

    @PutMapping("/updateUsuario/{usuarioId}")
    public Usuario updateUsuario(@RequestBody Usuario usuario, @PathVariable String usuarioId) {
        return usuarioService.updateUsuario(usuario, usuarioId);
    }

    @DeleteMapping("/deleteUsuario/{usuarioId}")
    public String deleteUsuario(@PathVariable String usuarioId){
        usuarioService.deleteUsuario(usuarioId);
        return "Usuario Deletado com sucesso";
    }

    @GetMapping("/getAllUsuarios")
    public List<Usuario> getAllUsuarios(){
        return usuarioService.getAllUsuarios();
    }

}
