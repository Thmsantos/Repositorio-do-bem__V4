package com.br.gov.sp.fatec.RepositorioDoBem.Model.Repository;

import com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    Optional<Usuario> findByStatusTrue(); 
}
