package com.br.gov.sp.fatec.RepositorioDoBem.Model.Repository;

import com.br.gov.sp.fatec.RepositorioDoBem.Model.Domain.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
}
