package com.br.gov.sp.fatec.RepositorioDoBem.Controller.Service;

import com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain.Usuario;
import com.br.gov.sp.fatec.RepositorioDoBem.Model.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario saveUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario getUsuario(String usuarioId) {
        return usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuario não encontrado"));
    }

    public Usuario updateUsuario(Usuario usuario, String usuarioId) {
        usuario.setUsuarioId(usuarioId);
        return usuarioRepository.save(usuario);
    }

    public void deleteUsuario(String usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }

    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }

}
